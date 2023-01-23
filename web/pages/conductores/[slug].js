import PropTypes from "prop-types";
import NextSeo from "next-seo";
import imageUrlBuilder from "@sanity/image-url";
import Layout from "../../components/layout";
import RenderSections from "../../components/renderSections";
import client from "../../client";

const builder = imageUrlBuilder(client);
const pageQuery = `
  *[_type == "route" && slug.current == $slug][0]{
    page-> {
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

export default function Internal({ config, content }) {
  return (
    <Layout config={config}>
      {content && <RenderSections sections={content} />}
    </Layout>
  );
}

Internal.getInitialProps = async function ({ query }) {
  const { slug } = query;
  if (!query) {
    console.error("no query");
    return;
  }

  const res = await client.fetch(pageQuery, { slug });
  return { ...res.page, slug };
};

Internal.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  // TODO: improve types
  disallowRobots: PropTypes.any,
  openGraphImage: PropTypes.any,
  content: PropTypes.any,
  config: PropTypes.any,
  slug: PropTypes.any,
};
