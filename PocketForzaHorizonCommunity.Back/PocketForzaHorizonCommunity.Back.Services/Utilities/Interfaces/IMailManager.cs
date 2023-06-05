using MimeKit;

namespace PocketForzaHorizonCommunity.Back.Services.Utilities.Interfaces
{
    public interface IMailManager
    {
        void SendEmail(MimeMessage message);
    }
}