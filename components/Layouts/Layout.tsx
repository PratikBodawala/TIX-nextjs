import NavBar from './NavBar';
import Footer from './Footer';
import React from "react";
import Head from "next/head";

const Layout: React.FC<any> = ({ children })=> {
  return (<>
      <Head>
        <title>TIX ID</title>
        <meta name="description" content="TIX: booking movie ticket to your favorite theater."/>
      </Head>
    <div className="bg-theater">
      <NavBar />
      <main className="flex flex-col items-center justify-center">{children}</main>
      <Footer />
    </div></>
  );
}
export default Layout;