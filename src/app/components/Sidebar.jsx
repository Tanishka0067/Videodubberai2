import { useRouter } from "next/navigation"; 
import { TbPrismLight } from "react-icons/tb";
import { FaMicrophone } from "react-icons/fa6";
import { CgArrowsMergeAltH } from "react-icons/cg";
import { PiArrowsMerge } from "react-icons/pi";
import { RiScissors2Line } from "react-icons/ri";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";
import { TbTriangleOff } from "react-icons/tb";
import { BsFillRecordCircleFill } from "react-icons/bs";
const Sidebar = () => {
  const router = useRouter();
  return (
    <>
      <div className="font-thin text-gray-400 text-xl p-2 flex flex-col gap-5 items-center justify-center ">
        <a href="">
          <div className="items-center flex flex-col gap-2">
            {" "}
            <HiOutlineDotsCircleHorizontal />
            <p className="text-xs">Remover</p>
          </div>
        </a>{" "}
        <a href="">
          <div className="items-center flex flex-col gap-2" x>
            <TbPrismLight />
            <p className="text-xs">Splitter</p>
          </div>
        </a>
        <a href="">
          <div className="items-center flex flex-col gap-2">
            {" "}
            <PiArrowsMerge />
            <p className="text-xs">Pitch</p>
          </div>
        </a>
        <a href="">
          <div className="items-center flex flex-col gap-2">
            <TbTriangleOff />
            <p className="text-xs">
              Key BPM <br /> Finder
            </p>
          </div>
        </a>
        <a href=""
        onClick={(e) => {
          e.preventDefault(); 
          router.push("/audio-cutter"); 
        }}>
          <div className="items-center flex flex-col gap-2">
            {" "}
            <RiScissors2Line />
            <p className="text-xs">Cutter</p>
          </div>
        </a>
        <a href="">
          <div className="items-center flex flex-col gap-2">
            {" "}
            <CgArrowsMergeAltH />
            <p className="text-xs">Joiner</p>
          </div>
        </a>
        <a href="">
          <div className="items-center flex flex-col gap-2">
            {" "}
            <FaMicrophone />
            <p className="text-xs">Recorder</p>
          </div>
        </a>
        <a href="">
          <div className="items-center flex flex-col gap-2">
            <BsFillRecordCircleFill />
            <p className="text-xs">Karaoke</p>
          </div>
        </a>
      </div>
    </>
  );
};

export default Sidebar;
