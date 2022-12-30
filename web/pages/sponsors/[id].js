import Layout from "../../components/layout";
import Section from "../../components/section";

export default function Sponsor() {
  return (
    <Layout>
      <Section>Sponsor</Section>
    </Layout>
  );
}

export async function getStaticPaths() {
  // Return a list of possible value for id.
  const paths = [
    {
      params: {
        id: "golden-tanner",
      },
    },
    {
      params: {
        id: "rose-oneal",
      },
    },
    {
      params: {
        id: "corrie-melton",
      },
    },
    {
      params: {
        id: "banks-yates",
      },
    },
  ];
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Fetch necesary data for the sponsor using params id.
  console.log(params.id);
  return {
    props: {
      foo: true,
    },
  };
}
