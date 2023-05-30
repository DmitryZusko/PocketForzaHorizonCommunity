export interface IPostDesignRequest {
  title: string;
  forzaShareCode: string;
  authorId: string;
  carId: string;
  thumbnail: File;
  gallery?: File[];
  description: string;
}
