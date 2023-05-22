using PocketForzaHorizonCommunity.Back.Services.Utilities.Models.EmailModels;

namespace PocketForzaHorizonCommunity.Back.Services.Utilities.Models.MessageOptions;

public class ResetPasswordOptions : MessageOptionsBase
{
    public Guid UserId { get; set; }
    public string ResetToken { get; set; } = null!;
}
