import PropTypes from "prop-types";

export default function EmbedHTML({ node }) {
  const { html } = node;

  return html ? (
    <div dangerouslySetInnerHTML={{ __html: html }}></div>
  ) : undefined;
}

EmbedHTML.propTypes = {
  node: PropTypes.shape({
    html: PropTypes.string,
  }),
};
