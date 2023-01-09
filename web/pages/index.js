import Layout from "../components/layout";

export default function Home({ config }) {
  return (
    <Layout config={config}>
      <h1>No route set</h1>
      <h2>Setup automatic routes in sanity or custom routes in next.conf.js</h2>
    </Layout>
  );
}
