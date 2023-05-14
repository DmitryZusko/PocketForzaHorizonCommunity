import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import { PropsWithChildren } from "react";
import { ICustomAccordionComponentProps } from "./types";
import { useCustomAccordionComponent } from "./useCustomAccordionComponent";
import { styles } from "./styles";

const CustomAccordionComponent = ({
  title,
  unmountOnExit,
  children,
}: PropsWithChildren<ICustomAccordionComponentProps>) => {
  const { isExpanded, handleChange } = useCustomAccordionComponent();
  return (
    <Accordion
      expanded={isExpanded}
      onChange={handleChange}
      TransitionProps={{ unmountOnExit: unmountOnExit || false }}
      sx={styles.accordion}
    >
      <AccordionSummary expandIcon={<ExpandCircleDownIcon />}>
        <Typography variant="blockTitle" sx={styles.title}>
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};

export default CustomAccordionComponent;
