import PropTypes from "prop-types";
import NextSeo from "next-seo";
import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";
import client from "../client";
import Layout from "../components/layout";

const builder = imageUrlBuilder(client);
const pageQuery = groq`
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

export default function Landing({ config }) {
  return <Layout config={config}>Landing</Layout>;
}

Landing.getInitialProps = async function ({ query }) {
  const { slug } = query;
  if (!query) {
    console.error("no query");
    return;
  }
  // Internal
  if (slug && slug !== "/") {
    const res = await client.fetch(pageQuery, { slug });
    return { ...res.page, slug };
  }
  // Frontpage
  if (slug && slug === "/") {
    const res = client.fetch(groq`
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
    `);
    return { ...res.frontpage, slug };
  }
  return null;
};

Landing.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  // TODO: improve types
  disallowRobots: PropTypes.any,
  openGraphImage: PropTypes.any,
  content: PropTypes.any,
  config: PropTypes.any,
  slug: PropTypes.any,
};
