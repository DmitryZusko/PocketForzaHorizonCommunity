﻿namespace PocketForzaHorizonCommunity.Back.DTO.Requests.Authentication;

public class SignUpRequest
{
    public string Email { get; set; } = null!;
    public string Username { get; set; } = null!;
    public string Password { get; set; } = null!;
}
