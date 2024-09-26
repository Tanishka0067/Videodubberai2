import React,{useState} from "react";
import img from "./image.png";
import { BiMenuAltLeft } from "react-icons/bi";
import Image from "next/image";
import Sidebar from "./Sidebar";
const HomePage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div>
      <div className=" p-2 fixed">
        <button
          className=" text-white text-6xl"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}

        >
          <BiMenuAltLeft />
        </button>
        {isSidebarOpen && <Sidebar />}
      </div>
      <div className="p-20 text-white flex flex-col items-center">
        <div className="flex flex-row justify-center gap-12 text-lg font-semibold">
          <div>HOW IT WORKS</div>
          <div>DONATE</div>
        </div>

        <div>
          <h1 className="text-4xl font-bold text-center p-4">
            Vocal Remover and Isolation
          </h1>
          <h3 className="text-center text-lg">
            Separate voice from music out of a song free with powerful AI
            algorithms
          </h3>
          <Image src={img} alt="" className="w-9/12 p-6 mx-auto " />
        </div>
        <div>
          <button className="border-indigo-700 border-2 p-3 rounded-full">
            Browse my files
          </button>
        </div>
        <div className=" mt-40">
          <h1 className="text-5xl font-medium hover:bg-indigo-500 p-4 ">
            Remove vocals from a song
          </h1>
          <p className="bg-gray-800/50 border-l-4 border-indigo-500 p-4 px-8 text-2xl mt-4">
            This free online application will help remove vocals from a song by
            creating karaoke.
            <br />
            <br />
            Once you choose a song, artificial intelligence will separate the
            vocals from the instrumental ones. You will get two tracks - a
            karaoke version of your song (no vocals) and acapella version
            (isolated vocals).
            <br />
            <br />
            Despite the complexity and high cost of service, you can use it
            absolutely free. Processing usually takes about 10 seconds.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
