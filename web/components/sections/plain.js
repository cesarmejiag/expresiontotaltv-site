import Section from "../section";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import client from "@/client";

const builder = imageUrlBuilder(client);

const components = {
  types: {
    image: ({ value }) => {
      return (
        <div className="image-wrapper">
          <img src={builder.image(value.asset).url()} />
          <div className="image-alt">{value.alt}</div>
        </div>
      );
    },
  },
};

export default function Plain({ title, body }) {
  return (
    <Section title={title}>
      <PortableText value={body} components={components} />
    </Section>
  );
}
