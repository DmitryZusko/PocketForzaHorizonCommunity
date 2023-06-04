using AutoMapper;
using PocketForzaHorizonCommunity.Back.Database.Entities.GuideEntities.DesignEntities;
using PocketForzaHorizonCommunity.Back.DTO.DTOs.GuidesDtos;
using PocketForzaHorizonCommunity.Back.DTO.Requests.Guides.Design;

namespace PocketForzaHorizonCommunity.Back.DTO.Mapper;

public class DesignProfile : Profile
{
    public DesignProfile()
    {
        CreateMap<Design, DesignDto>()
            .ForMember(dest => dest.AuthorUsername, opt => opt.MapFrom(src => src.User.UserName))
            .ForMember(dest => dest.CarModel, opt => opt.MapFrom(src => $"{src.Car.Manufacture.Name} {src.Car.Model} {src.Car.Year}"))
            .ForMember(dest => dest.Description, opt => opt.MapFrom(src => src.DesignOptions.Description))
            .ForMember(dest => dest.Thumbnail, opt => opt.MapFrom(src => LoadThumbnail(src.DesignOptions.ThumbnailUrl)))
            .ForMember(dest => dest.Rating, opt => opt.MapFrom(src => CalculateAvarage(src.Ratings)));

        CreateMap<Design, DesignFullInfoDto>()
            .ForMember(dest => dest.AuthorUsername, opt => opt.MapFrom(src => src.User.UserName))
            .ForMember(dest => dest.CarModel, opt => opt.MapFrom(src => $"{src.Car.Manufacture.Name} {src.Car.Model} {src.Car.Year}"))
            .ForMember(dest => dest.Description, opt => opt.MapFrom(src => src.DesignOptions.Description))
            .ForMember(dest => dest.Thumbnail, opt => opt.MapFrom(src => LoadThumbnail(src.DesignOptions.ThumbnailUrl)))
            .ForMember(dest => dest.Gallery, opt => opt.MapFrom(src => LoadGallery(src.DesignOptions.Gallery)))
            .ForMember(dest => dest.Rating, opt => opt.MapFrom(src => CalculateAvarage(src.Ratings)));

        CreateMap<CreateDesignRequest, Design>()
            .ForMember(dest => dest.UserId, opt => opt.MapFrom(src => Guid.Parse(src.AuthorId)))
            .ForMember(dest => dest.CarId, opt => opt.MapFrom(src => Guid.Parse(src.CarId)))
            .ForPath(dest => dest.DesignOptions.Description, opt => opt.MapFrom(src => src.Description))
            .ForSourceMember(src => src.Thumbnail, opt => opt.DoNotValidate())
            .ForSourceMember(src => src.Gallery, opt => opt.DoNotValidate());
    }

    private static byte[] LoadThumbnail(string path)
    {
        using (var stream = new FileStream(path, FileMode.Open))
        {
            var image = new byte[stream.Length];
            stream.Read(image);
            return image;
        }
    }

    private static List<byte[]> LoadGallery(ICollection<GalleryImage> gallery)
    {
        var images = new List<byte[]>();

        foreach (var image in gallery)
        {
            using (var stream = new FileStream(image.ImageUrl, FileMode.Open))
            {
                var loadedImage = new byte[stream.Length];
                stream.Read(loadedImage);
                images.Add(loadedImage);
            }
        }

        return images;
    }

    private double CalculateAvarage(List<DesignRating> ratings)
    {
        if (ratings.Count == 0) return 0;

        return ratings.Sum(r => r.Rating) / ratings.Count;
    }

}
