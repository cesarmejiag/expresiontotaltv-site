import PropTypes from "prop-types";
import { NextSeo } from "next-seo";
import imageUrlBuilder from "@sanity/image-url";
import Layout from "../../components/layout";
import client from "../../client";
import RenderSections from "../../components/renderSections";
import { getHostBySlug, getHosts } from "../../lib/api";

const builder = imageUrlBuilder(client);

export default function Host({
  title,
  description,
  disallowRobots,
  openGraphImage,
  content = [],
  config = {},
  slug,
}) {
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
        titleTemplate={`${config.title} | %s`}
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

/* Host.getInitialProps = async function ({ query }) {
  const { slug } = query;
  if (!query) {
    console.error("no query");
    return;
  }

  const res = await client.fetch(pageQuery, { slug });
  console.log(res);
  return { ...res.page, slug };
}; */

export async function getStaticProps({ params }) {
  const { slug } = params;
  const host = await getHostBySlug(slug);
  console.log(host);
  return { props: { foo: true } };
}

export async function getStaticPaths() {
  const hosts = await getHosts();
  return {
    paths: hosts.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  };
}

Host.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  // TODO: improve types
  disallowRobots: PropTypes.any,
  openGraphImage: PropTypes.any,
  content: PropTypes.any,
  config: PropTypes.any,
  slug: PropTypes.any,
};
