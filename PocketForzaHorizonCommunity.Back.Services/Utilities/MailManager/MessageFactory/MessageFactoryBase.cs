using Microsoft.Extensions.Configuration;
using MimeKit;
using PocketForzaHorizonCommunity.Back.Services.Utilities.MailManager.MessageFactory.Interfaces;
using PocketForzaHorizonCommunity.Back.Services.Utilities.Models;

namespace PocketForzaHorizonCommunity.Back.Services.Utilities.MailManager.MessageFactory
{
    public abstract class MessageFactoryBase : IMessageFactoryBase
    {
        protected readonly IConfiguration _config;

        public MessageFactoryBase(IConfiguration config) => _config = config;

        public abstract MimeMessage CreateMessage(MessageOptions options);
    }
}
