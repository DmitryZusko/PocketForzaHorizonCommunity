import { AspirationType, EngineType, TiresCompoundType } from "@/components";

export interface ITune {
  id: string;
  title: string;
  forzaShareCode: string;
  rating: number;
  creationDate: Date;
  authorUsername: string;
  carModel: string;
  engineType: EngineType;
  aspirationType: AspirationType;
  tiresCompound: TiresCompoundType;
}
