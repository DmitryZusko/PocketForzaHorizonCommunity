using Autofac.Extras.Moq;
using MockQueryable.Moq;
using Moq;
using NUnit.Framework;
using PocketForzaHorizonCommunity.Back.Database.Entities.CarEntities;
using PocketForzaHorizonCommunity.Back.Database.Repos.Interfaces;
using PocketForzaHorizonCommunity.Back.DTO.Requests.Car;
using PocketForzaHorizonCommunity.Back.Services.Services;
using PocketForzaHorizonCommunity.Back.Services.Utilities.Interfaces;

namespace PocketForzaHorizonCommunity.Back.Services.Tests.Services;

[TestFixture]
public class CarServiceTests
{
    [Test]
    public async Task CreateAsync_Car_Should_Have_Thumbnail()
    {
        var entity = new Car { Model = "Model" };

        var thumbnailPath = @"thumbnail\path";
        using var mock = AutoMock.GetLoose();
        mock.Mock<ICarRepository>()
            .Setup(x => x.CreateAsync(entity));
        mock.Mock<ICarRepository>()
            .Setup(x => x.SaveAsync());
        mock.Mock<IImageManager>()
            .Setup(x => x.SaveCarThumbnail(null, entity.Model))
            .Returns(Task.Run(() => thumbnailPath));

        var carService = mock.Create<CarService>();

        await carService.CreateAsync(entity, null);

        Assert.IsTrue(entity.ImageUrl.Equals(thumbnailPath));
    }

    [Test]
    public async Task DeleteAsync_Should_Delete_Thumbnail()
    {
        var entity = new Car
        {
            ImageUrl = @"thumbnail\path",
        };

        using var mock = AutoMock.GetLoose();
        mock.Mock<ICarRepository>()
            .Setup(x => x.GetById(entity.Id))
            .Returns(new List<Car> { entity }.BuildMock());
        mock.Mock<ICarRepository>()
            .Setup(x => x.Delete(entity));
        mock.Mock<ICarRepository>()
            .Setup(x => x.SaveAsync());
        mock.Mock<IImageManager>()
            .Setup(x => x.DeleteImages(new List<string> { entity.ImageUrl }));

        var carService = mock.Create<CarService>();
        await carService.DeleteAsync(entity.Id);

        mock.Mock<IImageManager>()
            .Verify(x => x.DeleteImages(It.IsAny<List<string>>()), Times.Once);
    }

    [Test]
    [TestCase(0, 10_000, ExpectedResult = 0)]
    [TestCase(10_000, 100_000, ExpectedResult = 1)]
    [TestCase(0, 1_000_000, ExpectedResult = 2)]
    public async Task<int> GetAllAsync_Should_Apply_Price_Filter(int minPrice, int maxPrice)
    {
        var cars = new List<Car>
        {
            new Car
            {
                Price = 50_000,
            },

            new Car
            {
                Price = 500_000,
            }
        };
        var request = new FilteredCarsGetRequest
        {
            MinPrice = minPrice,
            MaxPrice = maxPrice,
        };

        using var mock = AutoMock.GetLoose();
        mock.Mock<ICarRepository>()
            .Setup(x => x.GetAll())
            .Returns(cars.BuildMock());

        var carService = mock.Create<CarService>();

        var actual = await carService.GetAllAsync(request);

        return actual.Entities.Count();
    }

    [Test]
    [TestCase(1900, 2100, ExpectedResult = 2)]
    [TestCase(2000, 2100, ExpectedResult = 1)]
    [TestCase(2077, 2100, ExpectedResult = 0)]
    public async Task<int> GetAllAsync_Should_Apply_Year_Filter(int minYear, int maxYear)
    {
        var cars = new List<Car>
        {
            new Car
            {
                Year = 1998,
            },
            new Car
            {
                Year = 2050
            }
        };
        var query = new FilteredCarsGetRequest { MinYear = minYear, MaxYear = maxYear };

        using var mock = AutoMock.GetLoose();
        mock.Mock<ICarRepository>()
            .Setup(x => x.GetAll())
            .Returns(cars.BuildMock());

        var carService = mock.Create<CarService>();

        var actual = await carService.GetAllAsync(query);

        return actual.Entities.Count();
    }

    [Test]
    [TestCase(null, ExpectedResult = 3)]
    [TestCase("USA,Japan", ExpectedResult = 2)]
    [TestCase("France", ExpectedResult = 0)]
    public async Task<int> GetAllAsync_Should_Apply_Country_Filter(string countries)
    {
        var cars = new List<Car>
        {
            new Car {Manufacture = new Manufacture{Country = "USA"}},
            new Car {Manufacture = new Manufacture{Country = "Japan"}},
            new Car {Manufacture = new Manufacture{Country = "Australia"}}
        };
        var query = new FilteredCarsGetRequest { SelectedCountries = countries };

        using var mock = AutoMock.GetLoose();
        mock.Mock<ICarRepository>()
            .Setup(x => x.GetAll())
            .Returns(cars.BuildMock());

        var carService = mock.Create<CarService>();

        var actual = await carService.GetAllAsync(query);

        return actual.Entities.Count();
    }

    [Test]
    [TestCase(null, ExpectedResult = 3)]
    [TestCase("Mazda,Nissan", ExpectedResult = 2)]
    [TestCase("Opel", ExpectedResult = 0)]
    public async Task<int> GetAllAsync_Should_Apply_Manufacture_Filter(string manufactures)
    {
        var cars = new List<Car>
        {
            new Car {Manufacture = new Manufacture{Name = "Mazda"}},
            new Car {Manufacture = new Manufacture{Name = "Nissan"}},
            new Car {Manufacture = new Manufacture{Name = "Ford"}}
        };
        var query = new FilteredCarsGetRequest { SelectedManufactures = manufactures };

        using var mock = AutoMock.GetLoose();
        mock.Mock<ICarRepository>()
            .Setup(x => x.GetAll())
            .Returns(cars.BuildMock());

        var carService = mock.Create<CarService>();

        var result = await carService.GetAllAsync(query);

        return result.Entities.Count();
    }

    [Test]
    [TestCase(null, ExpectedResult = 3)]
    [TestCase("Modern Rally,Retro Sport Car", ExpectedResult = 2)]
    [TestCase("Track Toys", ExpectedResult = 0)]
    public async Task<int> GetAllAsync_Should_Apply_CarType_Filter(string carTypes)
    {
        var cars = new List<Car>
        {
            new Car{CarType = new CarType{Name = "Modern Rally"}},
            new Car{CarType = new CarType{Name = "Retro Sport Car"}},
            new Car{CarType = new CarType{Name = "Vintage Classic"}},
        };
        var query = new FilteredCarsGetRequest { SelectedCarTypes = carTypes };

        using var mock = AutoMock.GetLoose();
        mock.Mock<ICarRepository>()
            .Setup(x => x.GetAll())
            .Returns(cars.BuildMock());

        var carService = mock.Create<CarService>();

        var actual = await carService.GetAllAsync(query);

        return actual.Entities.Count();
    }
}
