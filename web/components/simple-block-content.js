import PropTypes from "prop-types";
import BlockContent from "@sanity/block-content-to-react";
import client from "../client";
import serializers from "serializers";

const { projectId, dataset } = client.config();

export default function SimpleBlockContent({ blocks }) {
  return blocks ? (
    <BlockContent
      blocks={blocks}
      serializers={serializers}
      projectId={projectId}
      dataset={dataset}
    />
  ) : undefined;
}

SimpleBlockContent.propTypes = {
  blocks: PropTypes.arrayOf(PropTypes.object),
};
