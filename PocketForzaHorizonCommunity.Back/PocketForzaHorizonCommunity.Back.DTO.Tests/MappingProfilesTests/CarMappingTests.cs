using AutoMapper;
using NUnit.Framework;
using PocketForzaHorizonCommunity.Back.Database.Entities.CarEntities;
using PocketForzaHorizonCommunity.Back.DTO.DTOs.CarDtos;
using PocketForzaHorizonCommunity.Back.DTO.Mapper;
using PocketForzaHorizonCommunity.Back.DTO.Requests.Car;

namespace PocketForzaHorizonCommunity.Back.DTO.Tests.MappingProfilesTests;

[TestFixture]
public class CarMappingTests
{
    [Test]
    public void Car_To_CarDto_Should_Map()
    {
        var car = Boilerplate.GetCarSample();
        var expected = MapCarToDto(car);
        var mapper = new MapperConfiguration(cfg => cfg.AddProfile<CarProfile>()).CreateMapper();

        var actual = mapper.Map<Car, CarDto>(car);

        Assert.IsTrue(CompareCars(expected, actual));
    }

    [Test]
    public void CreateCarRequest_To_Car_Should_Map()
    {
        var request = Boilerplate.GetCreateCarRequestSample();
        var expected = Boilerplate.GetCarSample();
        var mapper = new MapperConfiguration(cfg => cfg.AddProfile<CarProfile>()).CreateMapper();

        var actual = mapper.Map<CreateCarRequest, Car>(request);

        Assert.IsTrue(CompareCreatedCars(expected, actual));
    }

    [Test]
    public void UpdateCarRequest_To_Car_Should_Map()
    {
        var request = Boilerplate.GetUpdateCarRequestSample();
        var expected = Boilerplate.GetCarSample();
        var mapper = new MapperConfiguration(cfg => cfg.AddProfile<CarProfile>()).CreateMapper();

        var actual = mapper.Map<UpdateCarRequest, Car>(request);

        Assert.IsTrue(CompareUpdatedCars(expected, actual));
    }

    private static CarDto MapCarToDto(Car car)
    {
        return new CarDto
        {
            Id = car.Id.ToString(),
            Model = car.Model,
            Year = car.Year,
            Price = car.Price,
            Manufacture = car.Manufacture.Name,
            Type = car.CarType.Name,
        };
    }

    private static bool CompareCars(CarDto expected, CarDto actual)
    {
        foreach (var property in actual.GetType().GetProperties())
        {
            if (property.Name == nameof(expected.Image)) continue;
            if (!property.GetValue(actual).Equals(property.GetValue(expected))) return false;
        }

        return true;
    }

    private static bool CompareCreatedCars(Car expected, Car actual)
    {
        foreach (var property in expected.GetType().GetProperties())
        {
            if (property.Name == nameof(expected.ImagePath)) continue;
            if (property.Name == nameof(expected.Manufacture)) continue;
            if (property.Name == nameof(expected.CarType)) continue;
            if (property.Name == nameof(expected.Tunes)) continue;
            if (property.Name == nameof(expected.Designs)) continue;
            if (property.Name == nameof(expected.OwnedCarsByUsers)) continue;
            if (!property.GetValue(actual).Equals(property.GetValue(expected))) return false;
        }

        return true;
    }

    private static bool CompareUpdatedCars(Car expected, Car actual)
    {
        foreach (var property in expected.GetType().GetProperties())
        {
            if (property.Name == nameof(expected.ImagePath)) continue;
            if (property.Name == nameof(expected.Manufacture)) continue;
            if (property.Name == nameof(expected.CarType)) continue;
            if (property.Name == nameof(expected.Tunes)) continue;
            if (property.Name == nameof(expected.Designs)) continue;
            if (property.Name == nameof(expected.OwnedCarsByUsers)) continue;
            if (!property.GetValue(actual).Equals(property.GetValue(expected))) return false;
        }

        return true;
    }
}
