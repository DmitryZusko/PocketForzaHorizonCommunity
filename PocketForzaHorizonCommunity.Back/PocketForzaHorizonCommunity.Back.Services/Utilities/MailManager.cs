using MailKit.Net.Smtp;
using Microsoft.Extensions.Configuration;
using MimeKit;
using PocketForzaHorizonCommunity.Back.Services.Exceptions;
using PocketForzaHorizonCommunity.Back.Services.Utilities.Interfaces;
using PocketForzaHorizonCommunity.Back.Services.Utilities.Models.EmailModels;

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
                        {_config["Email:confiramtionEndpoint"]}/?userId={emailOptions.UserId}&confirmationToken={emailOptions.ConfirmationToken}" };

        return message;
    }
}
