using FluentValidation;
using FluentValidation.AspNetCore;
using PocketForzaHorizonCommunity.Back.DTO.Requests.Authentication;
using PocketForzaHorizonCommunity.Back.DTO.Requests.Car;
using PocketForzaHorizonCommunity.Back.DTO.Requests.Guides;
using PocketForzaHorizonCommunity.Back.DTO.Validation.Authentication;
using PocketForzaHorizonCommunity.Back.DTO.Validation.Car;
using PocketForzaHorizonCommunity.Back.DTO.Validation.Guides;

namespace PocketForzaHorizonCommunity.Back.API.ServiceConfig
{
    public static class ValidatorConfig
    {
        public static void ConfigureValidator(this IServiceCollection services)
        {
            services.AddFluentValidationAutoValidation();

            services.AddTransient<IValidator<CreateCarRequest>, CreateCarRequestValidation>();
            services.AddTransient<IValidator<UpdateCarRequest>, UpdateCarRequestValidator>();

            services.AddTransient<IValidator<CreateCarTypeRequest>, CreateCarTypeRequestValidation>();
            services.AddTransient<IValidator<UpdateCarTypeRequest>, UpdateCarTypeRequestValidator>();

            services.AddTransient<IValidator<CreateManufactureRequest>, CreateManufactureRequestValidator>();
            services.AddTransient<IValidator<UpdateManufactureRequest>, UpdateManufactureRequestValidator>();

            services.AddTransient<IValidator<CreateDesignRequest>, CreateDesignRequestValidator>();

            services.AddTransient<IValidator<CreateTuneRequest>, CreateTuneRequestValidation>();

            services.AddTransient<IValidator<RefreshTokensRequest>, RefreshTokensRequestValidation>();

            services.AddTransient<IValidator<SignInRequest>, SignInRequestValidation>();

            services.AddTransient<IValidator<SignUpRequest>, SignUpRequestValidation>();
        }
    }
}
