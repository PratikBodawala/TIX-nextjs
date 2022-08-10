import logoImage from "/public/images/tix-id.png";
import notificationIcon from "/public/images/bell.svg";
import Image from "next/future/image";
import Link from "next/link";
const NavBar = () => (
  <nav className="flex items-center justify-between flex-wrap bg-white py-5 px-[72px]">
    <div className="flex flex-grow items-center flex-shrink-0 text-white mr-6">
      <Link href={"/"}>
        <a>
          <Image
            src={logoImage}
            alt={"Logo of TIX ID"}
            height={32}
            width={64}
          />
        </a>
      </Link>
    </div>
    <div className="w-full block lg:flex lg:items-center lg:w-auto">
      <div className="text-lg lg:flex-grow space-x-12">
        <Link
          href="#docs"
          className="block mt-4 lg:inline-block lg:mt-0 text-royalBlue hover:text-white mr-4"
        >
          <a className="text-royalBlue">Home</a>
        </Link>
        <Link
          href="#examples"
          className="flex mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
        >
          <a className="text-shade900">movies</a>
        </Link>
        <Link
          href="#blogs"
          className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
        >
          <a className="text-shade900">payments</a>
        </Link>
        <Image
          className="flex mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          height={32}
          width={32}
          src={notificationIcon}
          alt={"Notification icon"}
        />
        <div className="inline-flex overflow-hidden relative justify-center items-center w-10 h-10 bg-orange-200 rounded-full dark:bg-gray-600">
          <span className="font-bold text-white text-lg dark:text-gray-300">
            A
          </span>
        </div>
      </div>
    </div>
  </nav>
);
export default NavBar;
