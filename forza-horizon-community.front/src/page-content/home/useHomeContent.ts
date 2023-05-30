import { useInView } from "react-intersection-observer";

export const useHomeContent = () => {
  const { ref: newsAccordionRef, inView: newsAccordionInView } = useInView();
  const { ref: guidesAccordionRef, inView: guidesAccordionInView } = useInView();
  const { ref: statisticsAccordionRef, inView: statisticsAccordionInView } = useInView();
  const { ref: footerRef, inView: footerInView } = useInView();
  return {
    newsAccordionInView,
    guidesAccordionInView,
    statisticsAccordionInView,
    footerInView,
    newsAccordionRef,
    guidesAccordionRef,
    statisticsAccordionRef,
    footerRef,
  };
};
