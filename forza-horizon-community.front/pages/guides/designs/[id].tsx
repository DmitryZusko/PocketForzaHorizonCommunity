import { AuthAccessLevel } from "@/components";
import { DesignDetailsContent } from "@/page-content";
import { designService } from "@/services";
import { gateHandler } from "@/utilities";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";

export const getStaticPaths: GetStaticPaths = async () => {
  let ids: string[] = [];

  designService.getAllIdsAsync().then((result) => (ids = result.data));

  const paths = ids.map((path) => {
    return {
      params: {
        id: path,
      },
    };
  });

  return {
    paths: paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id;

  return {
    props: { id: id, authSettings: gateHandler.setPageProps(AuthAccessLevel.Authorized) },
  };
};

const DesignDetails = (props: { id: string }) => {
  return (
    <>
      <Head>
        <title>Design | Pocket Forza Horizon Community</title>
        <meta name="description" content="Add new design" />
        <meta name="author" content="Dmitry Zusko" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <DesignDetailsContent id={props.id} />
    </>
  );
};

export default DesignDetails;
