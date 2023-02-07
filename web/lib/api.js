import client from "../client";

export async function getHosts() {
  return await client.fetch(`
    *[_type == "host"] {
      ...,
      "slug": slug.current
    }
  `);
}

export async function getHostBySlug(slug) {
  return await client.fetch(`*[_type == "host" && slug.current == $slug][0]`, {
    slug,
  });
}
