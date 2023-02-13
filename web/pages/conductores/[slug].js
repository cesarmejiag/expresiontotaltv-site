import { useEffect } from "react";
import { useContext } from "react";
import { Globals } from "@/context/context";
import PropTypes from "prop-types";
import { NextSeo } from "next-seo";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import Layout from "../../components/layout";
import client from "../../client";
import RenderSections from "../../components/renderSections";
import { getHostBySlug, getHosts } from "../../lib/api";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";

const builder = imageUrlBuilder(client);

export default function Host({
  image,
  title,
  intro,
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
      <Container maxWidth="lg">
        <Box sx={{ py: 5 }}>
          <Box
            sx={{
              border: "2px solid white",
              borderRadius: "50%",
              boxShadow: "0px 2px 6px rgb(0 0 0 / 40%)",
              maxWidth: 150,
              margin: "0 auto",
              mb: 2,
              overflow: "hidden",
            }}
          >
            <div className="rounded-image">
              <Image
                alt={title}
                src={builder.image(image).height(500).width(500).url()}
                fill="cover"
              />
            </div>
          </Box>
          <Box>
            <Typography align="center" component="h1" variant="h5">
              {title}
            </Typography>
            <Typography align="center" component="h3" variant="body2">
              {intro}
            </Typography>
          </Box>
        </Box>
        <Divider />
      </Container>

      {content && <RenderSections sections={content} />}
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const host = await getHostBySlug(slug);
  return { props: { ...host } };
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
