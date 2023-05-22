export interface IResetPasswordRequest {
  password: string;
  userId: string;
  resetToken: string;
}
