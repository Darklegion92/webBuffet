import React from "react";
import getSeoTitle from '@/util/getSeoTitle'
import Head from 'next/head'
import Carusel from "@/components/carusel";

const Home = () => {
  return (
    <>
      <Head>
        <title>{getSeoTitle('home')}</title>
      </Head>
      <Carusel />
    </>
  );

}
export default Home;