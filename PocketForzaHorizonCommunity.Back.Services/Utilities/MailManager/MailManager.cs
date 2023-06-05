using MailKit.Net.Smtp;
using Microsoft.Extensions.Configuration;
using MimeKit;
using PocketForzaHorizonCommunity.Back.Services.Utilities.Interfaces;

namespace PocketForzaHorizonCommunity.Back.Services.Utilities.MailManager;

public class MailManager : IMailManager
{
    private readonly IConfiguration _config;

    public MailManager(IConfiguration config) => _config = config;

    public void SendEmail(MimeMessage message)
    {
        using var smtp = new SmtpClient();
        smtp.Connect("smtp.gmail.com", 587, MailKit.Security.SecureSocketOptions.StartTls);
        smtp.Authenticate(_config.GetValue<string>("Email:Address"), _config.GetValue<string>("Email:Password"));
        smtp.Send(message);
        smtp.Disconnect(true);
    }
}
