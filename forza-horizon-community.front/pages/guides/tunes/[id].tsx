import { AuthAccessLevel } from "@/components";
import { TuneDetailsContent } from "@/page-content";
import { tuneService } from "@/services";
import { gateHandler } from "@/utilities";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";

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
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id;

  return {
    props: { id: id, authSettings: gateHandler.setPageProps(AuthAccessLevel.Authorized) },
  };
};

const TuneDetails = (props: { id: string }) => {
  return (
    <>
      <Head>
        <title>Tune | Pocket Forza Horizon Community</title>
        <meta name="description" content="Add new design" />
        <meta name="author" content="Dmitry Zusko" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <TuneDetailsContent id={props.id} />
    </>
  );
};

export default TuneDetails;
