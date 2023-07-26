import Head from "next/head";
const Meta = ({ title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
    </>
  );
};

Meta.defaultProps = {
  title: "This is a title",
};

export default Meta;
