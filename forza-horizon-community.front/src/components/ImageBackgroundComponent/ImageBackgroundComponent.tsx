import Image from "next/image";
import { PropsWithChildren } from "react";
import classes from "./styles.module.css";

const ImageBackgroundComponent = ({ children }: PropsWithChildren) => {
  return (
    <div className={classes.outerBlock}>
      <Image alt="background" src="/background.jpg" fill priority className={classes.image} />
      <div className={classes.text}>{children}</div>
    </div>
  );
};

export default ImageBackgroundComponent;
