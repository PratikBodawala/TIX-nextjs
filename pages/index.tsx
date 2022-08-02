import type {NextPage } from 'next'
import Login from "../components/Login/Login";

const Home: NextPage = () => {
  return (
      <div className="bg-theater h-screen w-screen">

        <div className="flex flex-col items-end">
            <section className="bg-white h-[772px] w-[720px] m-16">
                <Login/>
            </section>
        </div>
    </div>
  )
}

export default Home
