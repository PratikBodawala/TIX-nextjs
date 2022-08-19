import Head from "next/head";
import type {FC} from "react"
const AuthLayout: FC<any> = ({ children }) => {
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
