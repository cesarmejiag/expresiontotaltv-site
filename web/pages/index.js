import PropTypes from "prop-types";
import NextSeo from "next-seo";
import imageUrlBuilder from "@sanity/image-url";
import client from "../client";
import Layout from "../components/layout";
import RenderSections from "../components/renderSections";

const builder = imageUrlBuilder(client);
const pageQuery = `
  *[_id == "global-config"][0] {
    frontpage -> {
      ...,
      content[] {
        ...,
        cta {
          ...,
          route->
        },
        ctas[] {
          ...,
          route->
        }
      }
    }
  }
`;

export default function Home({ config, content }) {
  return (
    <Layout config={config}>
      {content && <RenderSections sections={content} />}
    </Layout>
  );
}

Home.getInitialProps = async function () {
  const res = await client.fetch(pageQuery);
  return { ...res.frontpage, slug: "/" };
};

Home.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  // TODO: improve types
  disallowRobots: PropTypes.any,
  openGraphImage: PropTypes.any,
  content: PropTypes.any,
  config: PropTypes.any,
  slug: PropTypes.any,
};
