using PocketForzaHorizonCommunity.Back.Services.Utilities.Models.EmailModels;

namespace PocketForzaHorizonCommunity.Back.Services.Utilities.Interfaces
{
    public interface IMailManager
    {
        void SendEmail(MessageOptionsBase messageOptions);
    }
}