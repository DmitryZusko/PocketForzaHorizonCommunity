namespace PocketForzaHorizonCommunity.Back.Services.Utilities.Models.EmailModels;

public class EmailConfirmationOptions : MessageOptionsBase
{
    public Guid UserId { get; set; }
    public string ConfirmationToken { get; set; } = null!;
}
