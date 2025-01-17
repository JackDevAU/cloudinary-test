import PostList from "./client-page";
import { client } from "../../tina/__generated__/client";



export default async function Page() {

  const pages = await client.queries.postConnection();

  return <PostList {...pages} />
}