import Image from "next/image";
import Layout from "./components/Layout";
import Sports from "./components/Sports";
import { Collection } from "./components/Collection";

export default function Home() {
  return (
    <Layout>
      <Sports/>
      <Collection/>
    </Layout>
  );
}
