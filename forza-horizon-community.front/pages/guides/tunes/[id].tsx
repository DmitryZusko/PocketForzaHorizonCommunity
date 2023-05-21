import { AuthAccessLevel } from "@/components";
import { TuneDetailsContent } from "@/page-content";
import { tuneService } from "@/services";
import { gateHandler } from "@/utilities";
import { GetStaticPaths, GetStaticProps } from "next";

export const getStaticPaths: GetStaticPaths = async () => {
  let ids: string[] = [];

  tuneService.getAllIdsAsync().then((result) => (ids = result.data));

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

export const getServerSideProps = () => {
  return {
    props: {
      authSettings: gateHandler.setPageProps(AuthAccessLevel.Authorized),
    },
  };
};

const TuneDetails = (props: { id: string }) => {
  return <TuneDetailsContent id={props.id} />;
};

export default TuneDetails;
