using Autofac.Extras.Moq;
using MockQueryable.Moq;
using Moq;
using NUnit.Framework;
using PocketForzaHorizonCommunity.Back.Database.Entities.GuideEntities.TuneEntities;
using PocketForzaHorizonCommunity.Back.Database.Repos.Interfaces;
using PocketForzaHorizonCommunity.Back.DTO.Requests.Guides;
using PocketForzaHorizonCommunity.Back.DTO.Requests.Guides.Tune;
using PocketForzaHorizonCommunity.Back.Services.Services;

namespace PocketForzaHorizonCommunity.Back.Services.Tests.Services;

[TestFixture]
public class TuneServiceTests
{
    [TestCase("", ExpectedResult = 2)]
    [TestCase("erna", ExpectedResult = 2)]
    [TestCase("car", ExpectedResult = 0)]
    public async Task<int> GetAllAsync_Should_Apply_Username_Filter(string searchQuery)
    {
        var tunes = GetTunes();
        var request = new FilteredTuneGetRequest { SearchQuery = searchQuery };

        using var mock = AutoMock.GetLoose();
        mock.Mock<ITuneRepository>()
            .Setup(x => x.GetAll())
            .Returns(GetTunes().BuildMock());

        var tuneService = mock.Create<TuneService>();

        var actual = await tuneService.GetAllAsync(request);

        return actual.Total;
    }

    [TestCase("", ExpectedResult = 2)]
    [TestCase("ngin", ExpectedResult = 2)]
    [TestCase("car", ExpectedResult = 0)]
    public async Task<int> GetAllAsync_Should_Apply_EngineDescription_Filter(string searchQuery)
    {
        var tunes = GetTunes();
        var request = new FilteredTuneGetRequest { SearchQuery = searchQuery };

        using var mock = AutoMock.GetLoose();
        mock.Mock<ITuneRepository>()
            .Setup(x => x.GetAll())
            .Returns(GetTunes().BuildMock());

        var tuneService = mock.Create<TuneService>();

        var actual = await tuneService.GetAllAsync(request);

        return actual.Total;
    }

    [TestCase("", ExpectedResult = 2)]
    [TestCase("ling", ExpectedResult = 2)]
    [TestCase("car", ExpectedResult = 0)]
    public async Task<int> GetAllAsync_Should_Apply_HandlingDescription_Filter(string searchQuery)
    {
        var tunes = GetTunes();
        var request = new FilteredTuneGetRequest { SearchQuery = searchQuery };

        using var mock = AutoMock.GetLoose();
        mock.Mock<ITuneRepository>()
            .Setup(x => x.GetAll())
            .Returns(GetTunes().BuildMock());

        var tuneService = mock.Create<TuneService>();

        var actual = await tuneService.GetAllAsync(request);

        return actual.Total;
    }

    [TestCase("", ExpectedResult = 2)]
    [TestCase("train", ExpectedResult = 2)]
    [TestCase("car", ExpectedResult = 0)]
    public async Task<int> GetAllAsync_Should_Apply_DrivetrainDescription_Filter(string searchQuery)
    {
        var tunes = GetTunes();
        var request = new FilteredTuneGetRequest { SearchQuery = searchQuery };

        using var mock = AutoMock.GetLoose();
        mock.Mock<ITuneRepository>()
            .Setup(x => x.GetAll())
            .Returns(GetTunes().BuildMock());

        var tuneService = mock.Create<TuneService>();

        var actual = await tuneService.GetAllAsync(request);

        return actual.Total;
    }

    [TestCase("", ExpectedResult = 2)]
    [TestCase("res de", ExpectedResult = 2)]
    [TestCase("car", ExpectedResult = 0)]
    public async Task<int> GetAllAsync_Should_Apply_TiresDescription_Filter(string searchQuery)
    {
        var tunes = GetTunes();
        var request = new FilteredTuneGetRequest { SearchQuery = searchQuery };

        using var mock = AutoMock.GetLoose();
        mock.Mock<ITuneRepository>()
            .Setup(x => x.GetAll())
            .Returns(GetTunes().BuildMock());

        var tuneService = mock.Create<TuneService>();

        var actual = await tuneService.GetAllAsync(request);

        return actual.Total;
    }

    [Test]
    public async Task SetRating_Should_Create_Rating_If_Not_Exists()
    {
        using var mock = AutoMock.GetLoose();
        mock.Mock<ITuneRepository>()
            .Setup(x => x.GetById(new Guid()))
            .Returns(GetTunes().BuildMock());
        mock.Mock<ITuneRatingRepository>()
            .Setup(x => x.GetByKey(new Guid(), new Guid()));
        mock.Mock<ITuneRatingRepository>()
            .Setup(x => x.CreateAsync(null));
        mock.Mock<ITuneRatingRepository>()
            .Setup(x => x.SaveAsync());

        var tuneService = mock.Create<TuneService>();

        await tuneService.SetRating(new PostRatingRequest());

        mock.Mock<ITuneRatingRepository>()
            .Verify(x => x.CreateAsync(It.IsAny<TuneRating>()), Times.Once);
    }

    [Test]
    public async Task SetRating_Should_Update_Rating_If_Exists()
    {
        var rating = new TuneRating();
        using var mock = AutoMock.GetLoose();
        mock.Mock<ITuneRepository>()
            .Setup(x => x.GetById(new Guid()))
            .Returns(GetTunes().BuildMock());
        mock.Mock<ITuneRatingRepository>()
            .Setup(x => x.GetByKey(new Guid(), new Guid()))
            .Returns(Task.Run(() => rating));
        mock.Mock<ITuneRatingRepository>()
            .Setup(x => x.CreateAsync(null));
        mock.Mock<ITuneRatingRepository>()
            .Setup(x => x.SaveAsync());

        var tuneService = mock.Create<TuneService>();

        await tuneService.SetRating(new PostRatingRequest());

        mock.Mock<ITuneRatingRepository>()
            .Verify(x => x.CreateAsync(It.IsAny<TuneRating>()), Times.Never);
    }

    private List<Tune> GetTunes()
    {
        return new List<Tune>
        {
            new Tune
            {
                User = new Database.Entities.ApplicationUser
                {
                    UserName = "Username",
                },
                Title = "Title",
                TuneOptions = new TuneOptions
                {
                    EngineDescription = "Engine Description",
                    HandlingDescription = "Handling Description",
                    DrivetrainDescription = "Drivetrain Description",
                    TiresDescription = "Tires Description",
                }
            },
            new Tune
            {
                User = new Database.Entities.ApplicationUser
                {
                    UserName = "Username",
                },
                Title = "Title",
                TuneOptions = new TuneOptions
                {
                    EngineDescription = "Engine Description",
                    HandlingDescription = "Handling Description",
                    DrivetrainDescription = "Drivetrain Description",
                    TiresDescription = "Tires Description",
                }
            }
        };
    }
}
