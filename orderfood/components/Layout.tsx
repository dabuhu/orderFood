import React, { ReactElement } from "react";
import Head from "next/head";
import Header from '../components/header/Header';

export interface LayoutProps {
  children: ReactElement,
}

export default function Layout({children}: LayoutProps) {
  return (
    <>
      <Head>
        <title>Datbui eat</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main className='marginHeader'>{children}</main>
    </>
  );
}