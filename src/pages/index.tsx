import Head from "next/head";
import { Hero, Pricing, Navbar, Testimonials, Footer, Features } from "@/components";


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <Hero />
        <Testimonials />
        <Pricing />
        <Features />
        <Footer />
      </main>
    </>
  );
}
