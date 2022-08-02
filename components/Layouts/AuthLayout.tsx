const AuthLayout :React.FC<any> = ({ children }) =>{
  return (
    <div className="bg-theater h-screen w-screen">
      <main className="flex flex-col items-center justify-center">{children}</main>
    </div>
  );
}
export default AuthLayout;