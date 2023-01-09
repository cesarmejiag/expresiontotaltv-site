import PropTypes from "prop-types";
import NextSeo from "next-seo";
import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";
import client from "../client";

import Host from "../components/host";
import Layout from "../components/layout";
import List from "../components/list";
import Section from "../components/section";
import { Grid } from "@mui/material";
import Counter from "../components/counter";
import Video from "../components/video";
import Sponsor from "../components/sponsor";
import SponsorsCarousel from "../components/sponsors-carousel";

const hosts = [
  {
    id: "golden-tanner",
    name: "Golden Tanner",
    desc: "Lorem tempor aliquip labore magna. Nulla irure irure voluptate nulla nostrud anim est consequat consectetur voluptate. Ullamco incididunt.",
    url: "/sponsors/golden-tanner",
  },
  {
    id: "rose-oneal",
    name: "Rose Oneal",
    desc: "Eu cupidatat ipsum exercitation consectetur ipsum fugiat minim reprehenderit fugiat incididunt duis sunt labore. Ullamco incididunt incididunt tempor dolor.",
    url: "/sponsors/rose-oneal",
  },
  {
    id: "corrine-melton",
    name: "Corrine Melton",
    desc: "Velit fugiat consequat esse sint irure irure elit proident sit occaecat mollit reprehenderit pariatur. Incididunt enim officia aute elit elit anim cillum magna culpa do.",
    url: "/sponsors/corrine-melton",
  },
  {
    id: "banks-yates",
    name: "Banks Yates",
    desc: "Sit tempor nulla minim esse nulla officia sunt esse commodo duis pariatur. Commodo dolor in consectetur qui Lorem cillum reprehenderit nisi et.",
    url: "/sponsors/banks-yates",
  },
];

const sponsors = [
  {
    alt: "Sponsor 1",
    src: "assets/images/sponsor-1.svg",
  },
  {
    alt: "Sponsor 2",
    src: "assets/images/sponsor-2.svg",
  },
  {
    alt: "Sponsor 4",
    src: "assets/images/sponsor-4.svg",
  },
  {
    alt: "Sponsor 5",
    src: "assets/images/sponsor-5.svg",
  },
  {
    alt: "Sponsor 6",
    src: "assets/images/sponsor-1.svg",
  },
  {
    alt: "Sponsor 7",
    src: "assets/images/sponsor-2.svg",
  },
];

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

export default function LandingPage({ config, content }) {
  console.log(content);
  return (
    <Layout config={config}>
      <Counter />
      <Section bgColor="#ffffff">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={9}>
            <Video src="https://play.afreecatv.com/ettv1336/dashboard" />
          </Grid>
          <Grid item xs={12} sm={3}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Sponsor src="assets/images/sponsor-1.svg" />
              </Grid>
              <Grid item xs={12}>
                <Sponsor src="assets/images/sponsor-2.svg" />
              </Grid>
              <Grid item xs={12}>
                <Sponsor src="assets/images/sponsor-4.svg" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Section>
      <Section bgColor="#ffffff">
        <SponsorsCarousel items={sponsors} />
      </Section>
      <Section title="Conductores" bgColor="#eeeeee">
        <List items={hosts} component={Host} />
      </Section>
    </Layout>
  );
}

LandingPage.getInitialProps = async function ({ query }) {
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

LandingPage.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  // TODO: improve types
  disallowRobots: PropTypes.any,
  openGraphImage: PropTypes.any,
  content: PropTypes.any,
  config: PropTypes.any,
  slug: PropTypes.any,
};