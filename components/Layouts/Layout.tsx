import NavBar from './NavBar';
import Footer from './Footer';
import type {FC} from 'react';
import Head from "next/head";

const Layout: FC<any> = ({ children })=> {
  return (<>
      <Head>
        <title>TIX ID</title>
        <meta name="description" content="TIX: booking movie ticket to your favorite theater."/>
      </Head>
    <div className="bg-theater">
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div></>
  );
}
export default Layout;