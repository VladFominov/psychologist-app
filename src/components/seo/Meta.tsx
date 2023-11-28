import React, { FC, PropsWithChildren } from "react";
import { IMeta } from "./meta.interface";
import Head from "next/head";

const getTitle = (title: string) => `${title} | Psychologist`;

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
        <meta name="og:title" content={getTitle(title)} />
        <meta name="og:description" content={description} />
      </Head>
      {children}
    </>
  );
};

export default Meta;
