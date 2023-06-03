using MimeKit;
using PocketForzaHorizonCommunity.Back.Services.Utilities.Models;

namespace PocketForzaHorizonCommunity.Back.Services.Utilities.MailManager.MessageFactory.Interfaces
{
    public interface IMessageFactoryBase
    {
        public MimeMessage CreateMessage(MessageOptions options);
    }
}
