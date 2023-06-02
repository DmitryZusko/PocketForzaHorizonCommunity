using Microsoft.Extensions.Configuration;
using MimeKit;
using PocketForzaHorizonCommunity.Back.Services.Utilities.MailManager.MessageFactory.Interfaces;
using PocketForzaHorizonCommunity.Back.Services.Utilities.Models;

namespace PocketForzaHorizonCommunity.Back.Services.Utilities.MailManager.MessageFactory;

public class ResetPasswordsMessageFactory : MessageFactoryBase, IResetPasswordsMessageFactory
{
    public ResetPasswordsMessageFactory(IConfiguration config) : base(config) { }

    public override MimeMessage CreateMessage(MessageOptions options)
    {
        var message = new MimeMessage();

        message.From.Add(MailboxAddress.Parse(_config["Email:Address"]));
        message.To.Add(MailboxAddress.Parse(options.DestinationEmail));
        message.Subject = "Reset Password";
        message.Body = new TextPart(MimeKit.Text.TextFormat.Html) { Text = $@"
                                <p>Hi, we've recieved a reset password request. If you want to proceed, just folow the lonk below:</p><br/>
                                    {_config["Domain:BaseUrl"]}service/reset-password/?u={options.UserId}&t={options.Token}
                                 <br/>
                                 <br/>
                                 If you don't want to change a password - just ignore this message." };

        return message;
    }
}
