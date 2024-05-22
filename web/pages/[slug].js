import { useEffect } from "react";
import { useContext } from "react";
import { Globals } from "@/context/context";
import PropTypes from "prop-types";
import { NextSeo } from "next-seo";
import imageUrlBuilder from "@sanity/image-url";
import Layout from "../components/layout";
import client from "../client";
import RenderSections from "../components/renderSections";

const builder = imageUrlBuilder(client);
const pageQuery = `
  *[_type == "route" && slug.current == $slug][0]{
    page-> {
      ...,
      content[] {
        ...,
      }
    }
  }
`;

export default function Internal({
  title,
  description,
  disallowRobots,
  openGraphImage,
  content = [],
  config = {},
  slug,
  visitCount,
}) {
  const { setGlobals } = useContext(Globals);
  useEffect(() => {
    setGlobals((globals) => ({ ...globals, visitCount }));
  }, []);
  return "No page.";

  const openGraphImages = openGraphImage
    ? [
        {
          url: builder.image(openGraphImage).width(800).height(600).url(),
          width: 800,
          height: 600,
          alt: title,
        },
        // Facebook recommended size
        {
          url: builder.image(openGraphImage).width(1200).height(630).url(),
          width: 1200,
          height: 630,
          alt: title,
        },
        // Square 1:1
        {
          url: builder.image(openGraphImage).width(600).height(600).url(),
          width: 600,
          height: 600,
          alt: title,
        },
      ]
    : [];
  return (
    <Layout config={config}>
      <NextSeo
        title={title}
        titleTemplate={`%s | ${config.title}`}
        description={description}
        canonical={config.url && `${config.url}/${slug}`}
        openGraph={{
          images: openGraphImages,
        }}
        noindex={disallowRobots}
      />
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
