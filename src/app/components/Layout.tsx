/* eslint-disable @next/next/no-page-custom-font */
import React from "react";
import Head from "next/head";
// dark:bg-[#292B32]
const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="w-screen h-auto bg-[#F7F7F8] dark:bg-[#292B32]">{children}</div>
    </>
  );
};

export default Layout;
