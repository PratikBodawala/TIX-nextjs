import Head from "next/head";
const AuthLayout: React.FC<any> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Login</title>
        <meta
          name="description"
          content="Login to TIX for booking movie ticket to your favorite theater."
        />
      </Head>
      <main>{children}</main>
    </>
  );
};
export default AuthLayout;
