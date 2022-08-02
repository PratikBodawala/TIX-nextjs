import NavBar from './NavBar';
import Footer from './Footer';
import React from "react";

const Layout: React.FC<any> = ({ children })=> {
  return (
    <div className="bg-theater h-screen w-screen">
      <NavBar />
      <main className="flex flex-col items-center justify-center">{children}</main>
      <Footer />
    </div>
  );
}
export default Layout;