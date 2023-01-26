import { NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-black p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-10">
        <span className="font-semibold text-3xl tracking-tight  hover:text-blue-400">
          JXJ GAMES
        </span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-lg lg:flex-grow">
          <a
            href="#"
            className="block mt-6 lg:inline-block lg:mt-0 text-white hover:text-blue-400 mr-8"
          >
            Games
          </a>
          <a
            href="#"
            className="block mt-6 lg:inline-block lg:mt-0 text-white hover:text-blue-400 mr-8"
          >
            News
          </a>
          <a
            href="#"
            className="block mt-6 lg:inline-block lg:mt-0 text-white hover:text-blue-400"
          >
            About us
          </a>
        </div>
        <div>
       
          <a 
          href="#">
          <Image
            src="/images/gato.jpg"
            className="rounded-full"
            width={100}
            height={100}
            alt="Avatar"
          />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Home;
