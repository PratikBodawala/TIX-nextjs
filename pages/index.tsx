import type {NextPage } from 'next'
import Login from "../components/Login/Login";

const Home: NextPage = () => {
  return (
      <div className="bg-theater"  style={{ backgroundImage: "url('/images/theater-bg-img.webp')",
      backgroundRepeat: 'no-repeat',
        backgroundSize: 'fill',
        // backgroundAttachment: 'fixed'

      }}>

        <div className="flex flex-col items-end">
            <section className="bg-white m-16">
                <Login/>
            </section>
        </div>
    </div>
  )
}

export default Home
