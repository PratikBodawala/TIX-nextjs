import type { NextPage } from 'next'
import Login from "../components/Login/Login";

const Home: NextPage = () => {
  return (
      <div className="bg-theater h-screen w-screen">

        <div className="flex flex-col items-end">
            <div className="bg-white h-[772px] w-[720px] m-16">
                <Login/>
            </div>
        </div>
    </div>
  )
}

export default Home
