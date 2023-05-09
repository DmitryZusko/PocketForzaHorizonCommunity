import { AspirationType } from "@/components/constants/enums/AspirationType";
import { EngineType } from "@/components/constants/enums/EngineType";
import { TiresCompoundType } from "@/components/constants/enums/TiresCompoundType";

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
