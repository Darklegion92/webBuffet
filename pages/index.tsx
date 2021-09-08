import React from "react";
import getSeoTitle from '@/util/getSeoTitle'
import styles from "@/styles/loading.module.css";
import Head from 'next/head'

const OnLoading = () => {
  return (
    <>
      <Head>
        <title>{getSeoTitle()}</title>
      </Head>
      <div className={`${styles["loadingContainer"]}`}>
        <div id="backgroundFlower" className={`${styles["backgroundFlower"]}`}>
          <img src="/assets/images/florGrande.png" />
        </div>
        <div className={`${styles["loadingContainer"]}`}>
          <div className={`${styles["mainLogo"]}`} >
            <img src="/assets/images/logoBlanco.png" />|
          </div>
          <div className={`${styles["loadingDiv"]}`} >
            <img src="/assets/images/loading.png" />
          </div>
        </div>
      </div>
    </>
  );

}
export default OnLoading;