import { Sector } from "recharts";

const SelectedSectorComponent = (props: any) => {
  return (
    <Sector
      cx={props.cx}
      cy={props.cy}
      innerRadius={props.innerRadius}
      outerRadius={props.outerRadius + 5}
      startAngle={props.startAngle}
      endAngle={props.endAngle}
      fill={"#ccc"}
    />
  );
};

export default SelectedSectorComponent;
