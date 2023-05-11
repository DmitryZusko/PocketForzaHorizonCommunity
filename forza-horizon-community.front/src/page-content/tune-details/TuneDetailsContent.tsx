import { TuneDetailsComponent } from "@/components";
import { TuneDetailsContentProps } from "./types";

const TuneDetailsContent = ({ id }: TuneDetailsContentProps) => {
  return <TuneDetailsComponent id={id} />;
};

export default TuneDetailsContent;
