using MailKit.Net.Smtp;
using Microsoft.Extensions.Configuration;
using MimeKit;
using PocketForzaHorizonCommunity.Back.Services.Exceptions;
using PocketForzaHorizonCommunity.Back.Services.Utilities.Interfaces;
using PocketForzaHorizonCommunity.Back.Services.Utilities.Models.EmailModels;
using PocketForzaHorizonCommunity.Back.Services.Utilities.Models.MessageOptions;

namespace PocketForzaHorizonCommunity.Back.Services.Utilities;

public class MailManager : IMailManager
{
    private readonly IConfiguration _config;

    public MailManager(IConfiguration config)
    {
        _config = config;
    }
    public void SendEmail(MessageOptionsBase messageOptions)
    {
        var message = GetMessage(messageOptions);
        using var smtp = new SmtpClient();
        smtp.Connect("smtp.gmail.com", 587, MailKit.Security.SecureSocketOptions.StartTls);
        smtp.Authenticate(_config["Email:Address"], _config["Email:Password"]);
        smtp.Send(message);
        smtp.Disconnect(true);
    }

    private MimeMessage GetMessage(MessageOptionsBase messageOptions)
    {
        if (messageOptions.GetType() == typeof(EmailConfirmationOptions))
        {
            return CreateEmailConfirmationMessage(messageOptions as EmailConfirmationOptions);
        }

        if (messageOptions.GetType() == typeof(ResetPasswordOptions))
        {
            return CreateResetPasswordMessage(messageOptions as ResetPasswordOptions);
        }

        throw new BadRequestException(Messages.INVALID_EMAIL_OPTIONS);
    }

    private MimeMessage CreateEmailConfirmationMessage(EmailConfirmationOptions emailOptions)
    {
        var message = new MimeMessage();
        message.From.Add(MailboxAddress.Parse(_config["Email:Address"]));
        message.To.Add(MailboxAddress.Parse(emailOptions.DestinationEmail));
        message.Subject = "Email Confirmation";
        message.Body = new TextPart(MimeKit.Text.TextFormat.Html) { Text = $@"
                        <p>Hi, we're glad to see you with us! Please, follow the link below 
                        to confim the email.<br>
                        {_config["Domain:BaseUrl"]}service/confirm-email/?u={emailOptions.UserId}&t={emailOptions.ConfirmationToken}" };

        return message;
    }
    private MimeMessage CreateResetPasswordMessage(ResetPasswordOptions emailOptions)
    {
        var message = new MimeMessage();
        message.From.Add(MailboxAddress.Parse(_config["Email:Address"]));
        message.To.Add(MailboxAddress.Parse(emailOptions.DestinationEmail));
        message.Subject = "Reset Password";
        message.Body = new TextPart(MimeKit.Text.TextFormat.Html) { Text = $@"
                                <p>Hi, we've recieved a reset password request. If you want to proceed, just folow the lonk below:</p><br/>
                                    {_config["Domain:BaseUrl"]}service/reset-password/?u={emailOptions.UserId}&t={emailOptions.ResetToken}
                                 <br/>
                                 <br/>
                                 If you don't want to change a password - just ignore this message." };

        return message;
    }
}
