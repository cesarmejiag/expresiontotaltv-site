import { createClient } from "next-sanity";
export default createClient({
  projectId: "01ptukrd",
  dataset: "production",
  token: "", // or leave blank to be anonymous user
  useCdn: false, // `false` if you want to ensure fresh data
});
