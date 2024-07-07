import React, { FC, PropsWithChildren } from "react";
import { IMeta } from "./meta.interface";
import Head from "next/head";

const getTitle = (title: string) => `${title} | Олексій Більський - Психолог`;

const Meta: FC<PropsWithChildren<IMeta>> = ({
  title,
  description,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{getTitle(title)}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="психолог, Олексій Більський, психологічна допомога, ПТСР, консультація депресії, лікування панічних атак, консультація при алкоголізмі, Україна, Київ, онлайн консультації, військовий психолог, консультації по всій Україні онлайн, психотерапія, аддиктологія, психологічні послуги, психологічна підтримка, терапія, психолог онлайн, лікування стресу, лікування тривожності, допомога при депресії, психологічна консультація, психотерапевт"
        />
        <meta name="og:title" content={getTitle(title)} />
        <meta name="og:description" content={description} />
      </Head>
      {children}
    </>
  );
};

export default Meta;
