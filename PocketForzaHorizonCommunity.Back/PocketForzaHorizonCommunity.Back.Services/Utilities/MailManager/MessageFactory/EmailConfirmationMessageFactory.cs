using Microsoft.Extensions.Configuration;
using MimeKit;
using PocketForzaHorizonCommunity.Back.Services.Utilities.MailManager.MessageFactory.Interfaces;
using PocketForzaHorizonCommunity.Back.Services.Utilities.Models;

namespace PocketForzaHorizonCommunity.Back.Services.Utilities.MailManager.MessageFactory
{
    public class EmailConfirmationMessageFactory : MessageFactoryBase, IEmailConfirmationMessageFactory
    {
        public EmailConfirmationMessageFactory(IConfiguration config) : base(config) { }

        public override MimeMessage CreateMessage(MessageOptions options)
        {
            var message = new MimeMessage();

            message.From.Add(MailboxAddress.Parse(_config.GetValue<string>("Email:Address")));
            message.To.Add(MailboxAddress.Parse(options.DestinationEmail));
            message.Subject = "Email Confirmation";
            message.Body = new TextPart(MimeKit.Text.TextFormat.Html) { Text = $@"
                        <p>Hi, we're glad to see you with us! Please, follow the link below 
                        to confim the email.<br>
                        {_config["Domain:BaseUrl"]}service/confirm-email/?u={options.UserId}&t={options.Token}" };

            return message;
        }
    }
}
