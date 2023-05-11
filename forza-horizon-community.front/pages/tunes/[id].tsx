import { TuneDetailsContent } from "@/page-content";
import { tuneService } from "@/services";
import { GetStaticPaths, GetStaticProps } from "next";

export const getStaticPaths: GetStaticPaths = async () => {
  let ids: string[] = [];

  tuneService.getAllIds().then((result) => (ids = result.data));

  const paths = ids.map((path) => {
    return {
      params: {
        id: path,
      },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id;

  return {
    props: { id: id },
  };
};

const TuneDetails = (props: { id: string }) => {
  return <TuneDetailsContent id={props.id} />;
};

export default TuneDetails;
