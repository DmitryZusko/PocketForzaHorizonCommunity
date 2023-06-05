namespace PocketForzaHorizonCommunity.Back.Services.Utilities.Models
{
    public class MessageOptions
    {
        public string DestinationEmail { get; set; } = null!;

        public Guid UserId { get; set; }

        public string Token { get; set; } = null!;
    }
}
