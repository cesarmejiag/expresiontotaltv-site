import imageUrlBuilder from "@sanity/image-url";
import client from "../client";

const builder = imageUrlBuilder(client);

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

export async function getVisitCount() {
  const endpoint = "https://sonic-platform-375917.uc.r.appspot.com/api/count";

  try {
    const data = await fetch(endpoint);
    if (!data.ok) {
      throw new Error("Can't connecti with endpoint server.");
    }

    const res = await data.json();
    if (!res.success) {
      throw new Error("Can't count. " + res.message);
    }

    return res?.data?.count;
  } catch (err) {
    return 0;
  }
}

export function urlFor(image) {
  if (image) {
    return builder.image(image);
  }
  return false;
}
