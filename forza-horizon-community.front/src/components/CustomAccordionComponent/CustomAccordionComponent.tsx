import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import { forwardRef, PropsWithChildren } from "react";
import { ICustomAccordionComponentProps } from "./types";
import { useCustomAccordionComponent } from "./useCustomAccordionComponent";
import { styles } from "./styles";

const CustomAccordionComponent = forwardRef<
  HTMLDivElement,
  PropsWithChildren<ICustomAccordionComponentProps>
>(function CustomAccordionComponent(
  { title, isExpandedByDefault, unmountOnExit, children, ...props },
  ref,
) {
  const { isExpanded, handleChange } = useCustomAccordionComponent({ isExpandedByDefault });
  return (
    <Accordion
      expanded={isExpanded}
      onChange={handleChange}
      TransitionProps={{ unmountOnExit: unmountOnExit || false }}
      sx={styles.accordion}
      ref={ref}
      {...props}
    >
      <AccordionSummary expandIcon={<ExpandCircleDownIcon />}>
        <Typography variant="blockTitle" sx={styles.title}>
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
});

export default CustomAccordionComponent;
