import Layout from "../components/Layout";

export default function CustomApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <style jsx global>{`
        @import url("https://unpkg.com/papercss@1.9.1/dist/paper.css");
      `}</style>
    </Layout>
  );
}
