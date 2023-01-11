const { createClient } = require("next-sanity");
module.exports = createClient({
  projectId: "01ptukrd",
  dataset: "production",
  apiVersion: "2023-01-10",
  token: "", // or leave blank to be anonymous user
  useCdn: false, // `false` if you want to ensure fresh data
});
