import "./App.css";
import { Layout, WelcomeHero } from "./components/layout";
import { PostList } from "./components/post-list";
import {Api} from "./api.ts";

function App() {
  const posts = new Api().postList();
  return (
    <Layout>
      <WelcomeHero></WelcomeHero>
      <div className="divider"></div>
      <PostList posts={posts}></PostList>
    </Layout>
  );
}

export default App;
