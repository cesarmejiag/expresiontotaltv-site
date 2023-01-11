/** @type {import('next').NextConfig} */
const client = require("./client");
const isProduction = process.env.NODE_ENV === "production";
const query = `
  {
    "routes": *[_type == "route"] {
      ...,
      disallowRobot,
      includeInSitemap,
      page -> {
        _id,
        title,
        _createdAt,
        _updatedAt
      }
    }
  }
`;

const reduceRoutes = (obj, route) => {
  const { page = {}, slug = {} } = route;
  const { _createdAt, _updatedAt } = page;
  const { includeInSitemap, disallowRobot } = route;
  const path =
    route["slug"]["current"] === "/" ? "/" : `/${route["slug"]["current"]}`;
  obj[path] = {
    query: {
      slug: slug.current,
    },
    includeInSitemap,
    disallowRobot,
    _createdAt,
    _updatedAt,
    page: "/landing",
  };
  return obj;
};

const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  exportPathMap: async function () {
    const res = await client.fetch(query);
    const { routes = [] } = res;
    const nextRoutes = {
      // Rotues imported from sanity
      ...routes.filter(({ slug }) => slug.current).reduce(reduceRoutes, {}),
      "/custom-page": { page: "/custom" },
    };
    return nextRoutes;
  },
};

module.exports = nextConfig;
