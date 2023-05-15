import { useInView } from "react-intersection-observer";

export const useHomeContent = () => {
  const { ref: newsAccordionRef, inView: newsAccordionInView } = useInView();
  const { ref: guidesAccordionRef, inView: guidesAccordionInView } = useInView();
  const { ref: statisticsAccordionRef, inView: statisticsAccordionInView } = useInView();
  return {
    newsAccordionInView,
    guidesAccordionInView,
    statisticsAccordionInView,
    newsAccordionRef,
    guidesAccordionRef,
    statisticsAccordionRef,
  };
};
