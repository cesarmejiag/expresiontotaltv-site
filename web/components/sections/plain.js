import Section from "../section";
import { PortableText } from "@portabletext/react";

export default function Plain({ title, body }) {
  return (
    <Section title={title}>
      <PortableText value={body} />
    </Section>
  );
}
