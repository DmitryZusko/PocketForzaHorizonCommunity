using Autofac.Extras.Moq;
using MockQueryable.Moq;
using Moq;
using NUnit.Framework;
using PocketForzaHorizonCommunity.Back.Database.Entities.GuideEntities.DesignEntities;
using PocketForzaHorizonCommunity.Back.Database.Repos.Interfaces;
using PocketForzaHorizonCommunity.Back.DTO.Requests.Guides.Design;
using PocketForzaHorizonCommunity.Back.Services.Services;
using PocketForzaHorizonCommunity.Back.Services.Utilities.Interfaces;

namespace PocketForzaHorizonCommunity.Back.Services.Tests.Services;

[TestFixture]
public class DesignServiceTests
{

    [Test]
    public async Task CreateAsync_NewEntity_Should_Have_Thumbnail()
    {
        var expected = new Design
        {
            Id = new Guid(),
            DesignOptions = new DesignOptions
            {
                ThumbnailPath = @"thumbnail/path",
            }
        };

        using var mock = AutoMock.GetLoose();
        mock.Mock<IImageManager>()
            .Setup(x => x.SaveDesignThumbnail(null, expected.Id))
            .Returns(Task.Run(() => expected.DesignOptions.ThumbnailPath));
        mock.Mock<IImageManager>()
            .Setup(x => x.SaveDesignGallery(null, expected.Id))
            .Returns(Task.Run(() => new List<string>()));
        mock.Mock<IGalleryRepository>()
            .Setup(x => x.SaveAsync());
        mock.Mock<IDesignRepository>()
            .Setup(x => x.CreateAsync(expected));
        mock.Mock<IDesignRepository>()
            .Setup(x => x.SaveAsync());

        var designService = mock.Create<DesignService>();

        var actual = await designService.CreateAsync(new Design { Id = expected.Id, DesignOptions = new DesignOptions() }, null, null);

        Assert.AreEqual(expected.DesignOptions.ThumbnailPath, actual.DesignOptions.ThumbnailPath);

    }

    [Test]
    [TestCase(2)]
    [TestCase(0)]
    public async Task CreateAsync_Should_Handle_Gallery(int galleryImagesAmount)
    {
        var design = new Design
        {
            Id = new Guid(),
            DesignOptions = new DesignOptions
            {
            }
        };

        var gallery = new List<string>();
        for (int i = 0; i < galleryImagesAmount; i++)
        {
            gallery.Add("path");
        }

        using var mock = AutoMock.GetLoose();
        mock.Mock<IImageManager>()
            .Setup(x => x.SaveDesignThumbnail(null, design.Id));
        mock.Mock<IImageManager>()
            .Setup(x => x.SaveDesignGallery(null, design.Id))
            .Returns(Task.Run(() => gallery));
        mock.Mock<IGalleryRepository>()
            .Setup(x => x.CreateAsync(null));
        mock.Mock<IGalleryRepository>()
            .Setup(x => x.SaveAsync());
        mock.Mock<IDesignRepository>()
            .Setup(x => x.CreateAsync(design));
        mock.Mock<IDesignRepository>()
            .Setup(x => x.SaveAsync());

        var designService = mock.Create<DesignService>();

        await designService.CreateAsync(new Design { Id = design.Id, DesignOptions = new DesignOptions() }, null, null);

        for (int i = 0; i < galleryImagesAmount; i++)
        {
            mock.Mock<IGalleryRepository>()
                .Verify(x => x.CreateAsync(It.IsAny<GalleryImage>()), Times.Exactly(galleryImagesAmount));

        }
    }

    [Test]
    public async Task DeleteAsync_Should_Delete_All_Images()
    {
        var entity = new Design
        {
            DesignOptions = new DesignOptions
            {
                ThumbnailPath = @"thumbnail\path",
                Gallery = new List<GalleryImage>(),
            }
        };

        using var mock = AutoMock.GetLoose();
        mock.Mock<IDesignRepository>()
            .Setup(x => x.GetById(entity.Id))
            .Returns(new List<Design> { entity }.BuildMock());
        mock.Mock<IDesignRepository>()
            .Setup(x => x.Delete(entity));
        mock.Mock<IDesignRepository>()
            .Setup(x => x.SaveAsync());
        mock.Mock<IImageManager>()
            .Setup(x => x.DeleteDesignImages(entity.DesignOptions.ThumbnailPath, entity.DesignOptions.Gallery.ToList()));
        mock.Mock<IGalleryRepository>()
            .Setup(x => x.SaveAsync());

        var desginService = mock.Create<DesignService>();

        await desginService.DeleteAsync(entity.Id);

        mock.Mock<IImageManager>()
            .Verify(x => x.DeleteDesignImages(
                entity.DesignOptions.ThumbnailPath, entity.DesignOptions.Gallery.ToList()),
                Times.Once);
    }

    [Test]
    [TestCase("", ExpectedResult = 2)]
    [TestCase("tit", ExpectedResult = 2)]
    [TestCase("car", ExpectedResult = 0)]
    public async Task<int> GetAllAsync_Should_Apply_Title_Search(string searchQuery)
    {
        var designs = GetDesigns();
        var query = new FilteredDesignsGetRequest { SearchQuery = searchQuery };

        using var mock = AutoMock.GetLoose();
        mock.Mock<IDesignRepository>()
            .Setup(x => x.GetAll())
            .Returns(designs.BuildMock());

        var designService = mock.Create<DesignService>();

        var actual = await designService.GetAllAsync(query);

        return actual.Total;
    }

    [Test]
    [TestCase("", ExpectedResult = 2)]
    [TestCase("cript", ExpectedResult = 2)]
    [TestCase("car", ExpectedResult = 0)]
    public async Task<int> GetAllAsync_Should_Apply_Description_Search(string searchQuery)
    {
        var designs = GetDesigns();
        var query = new FilteredDesignsGetRequest { SearchQuery = searchQuery };

        using var mock = AutoMock.GetLoose();
        mock.Mock<IDesignRepository>()
            .Setup(x => x.GetAll())
            .Returns(designs.BuildMock());

        var designService = mock.Create<DesignService>();

        var actual = await designService.GetAllAsync(query);

        return actual.Total;
    }

    [Test]
    [TestCase("", ExpectedResult = 2)]
    [TestCase("erna", ExpectedResult = 2)]
    [TestCase("car", ExpectedResult = 0)]
    public async Task<int> GetAllAsync_Should_Apply_Username_Search(string searchQuery)
    {
        var designs = GetDesigns();
        var query = new FilteredDesignsGetRequest { SearchQuery = searchQuery };

        using var mock = AutoMock.GetLoose();
        mock.Mock<IDesignRepository>()
            .Setup(x => x.GetAll())
            .Returns(designs.BuildMock());

        var designService = mock.Create<DesignService>();

        var actual = await designService.GetAllAsync(query);

        return actual.Total;
    }

    [Test]
    public async Task SetRating_Should_Create_Rating_If_Not_Exists()
    {
        var mock = AutoMock.GetLoose();
        mock.Mock<IDesignRepository>()
            .Setup(x => x.GetById(new Guid()))
            .Returns(GetDesigns().BuildMock());
        mock.Mock<IDesignRatingRepository>()
            .Setup(x => x.GetByKey(new Guid(), new Guid()));
        mock.Mock<IDesignRatingRepository>()
            .Setup(x => x.CreateAsync(null));
        mock.Mock<IDesignRatingRepository>()
            .Setup(x => x.SaveAsync());

        var desginService = mock.Create<DesignService>();

        await desginService.SetRating(new DesignRating());

        mock.Mock<IDesignRatingRepository>()
            .Verify(x => x.CreateAsync(It.IsAny<DesignRating>()), Times.Once);
    }

    [Test]
    public async Task SetRating_Should_Update_Rating_If_Exists()
    {
        var mock = AutoMock.GetLoose();
        mock.Mock<IDesignRepository>()
            .Setup(x => x.GetById(new Guid()))
            .Returns(GetDesigns().BuildMock());
        mock.Mock<IDesignRatingRepository>()
            .Setup(x => x.GetByKey(new Guid(), new Guid()))
            .Returns(Task.Run(() => new DesignRating()));
        mock.Mock<IDesignRatingRepository>()
            .Setup(x => x.CreateAsync(null));
        mock.Mock<IDesignRatingRepository>()
            .Setup(x => x.SaveAsync());

        var desginService = mock.Create<DesignService>();

        await desginService.SetRating(new DesignRating());

        mock.Mock<IDesignRatingRepository>()
            .Verify(x => x.CreateAsync(It.IsAny<DesignRating>()), Times.Never);
    }

    private List<Design> GetDesigns()
    {
        return new List<Design>
        {
            new Design
            {
                Title = "Title",
                User = new Database.Entities.ApplicationUser{ UserName = "Username" },
                DesignOptions = new DesignOptions{Description = "Description"},
            },
                        new Design
            {
                Title = "Title",
                User = new Database.Entities.ApplicationUser{ UserName = "Username" },
                DesignOptions = new DesignOptions{Description = "Description"},
            },
        };
    }
}
