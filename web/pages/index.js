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
    name: "Golden Tanner",
    desc: "Lorem tempor aliquip labore magna. Nulla irure irure voluptate nulla nostrud anim est consequat consectetur voluptate. Ullamco incididunt.",
    url: "/about",
  },
  {
    name: "Rose Oneal",
    desc: "Eu cupidatat ipsum exercitation consectetur ipsum fugiat minim reprehenderit fugiat incididunt duis sunt labore. Ullamco incididunt incididunt tempor dolor.",
    url: "/about",
  },
  {
    name: "Corrine Melton",
    desc: "Velit fugiat consequat esse sint irure irure elit proident sit occaecat mollit reprehenderit pariatur. Incididunt enim officia aute elit elit anim cillum magna culpa do.",
    url: "/about",
  },
  {
    name: "Banks Yates",
    desc: "Sit tempor nulla minim esse nulla officia sunt esse commodo duis pariatur. Commodo dolor in consectetur qui Lorem cillum reprehenderit nisi et.",
    url: "/about",
  },
];

export default function Home() {
  return (
    <Layout>
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
        <SponsorsCarousel />
      </Section>
      <Section title="Conductores" bgColor="#eeeeee">
        <List items={hosts} component={Host} />
      </Section>
    </Layout>
  );
}
