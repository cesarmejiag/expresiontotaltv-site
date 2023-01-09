import PropTypes from "prop-types";
import Layout from "../components/layout";

export default function CustomPage({ config }) {
  return (
    <Layout config={config}>
      <h1>A custom page</h1>
    </Layout>
  );
}

CustomPage.propTypes = {
  config: PropTypes.object,
};
