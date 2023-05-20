import { DesignDetailsContent } from "@/page-content";
import { designService } from "@/services";
import { GetStaticPaths, GetStaticProps } from "next";

export const getStaticPaths: GetStaticPaths = async () => {
  let ids: string[] = [];

  designService.getAllIdsAsync().then((result) => (ids = result.data));

  const paths = ids.map((path) => {
    return {
      params: { id: path },
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

const DesignDetails = (props: { id: string }) => {
  return <DesignDetailsContent id={props.id} />;
};

export default DesignDetails;
