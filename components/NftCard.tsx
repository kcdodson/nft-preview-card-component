import Image from "next/image";
import { HiClock, HiEye } from "react-icons/hi";
import { SiEthereum } from "react-icons/si";
import avatar from "../public/media/image-avatar.png";
import nft from "../public/media/image-equilibrium.jpg";

type Props = {};

export default function NftCard({}: Props) {
  return (
    <>
      <div className="flex flex-col w-full min-h-screen justify-center items-center bg-[#0d1a2d] mx-auto px-20">
        <div className="flex flex-col justify-center items-center p-6 bg-[#15273f] rounded-xl gap-4 shadow-2xl">
          <div className="relative flex overflow-hidden">
            <div className="absolute group flex h-full w-full justify-center items-center hover:bg-[#01fefc]/50 rounded-lg ease-in-out duration-200 cursor-pointer">
              <HiEye
                size={50}
                className="opacity-0 group-hover:opacity-100 ease-in-out duration-200"
              />
            </div>
            <Image
              alt="nft image"
              src={nft}
              width={300}
              height={300}
              className="inset-0 aspect-square object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col max-w-fit justify-center items-start gap-4">
            <h1 className="text-left font-bold text-2xl hover:text-[#01fefc] cursor-pointer ease-in-out duration-200">
              Equilibrium #3429
            </h1>
            <p className="text-[#8daedc]">
              Our Equilibrium collection promotes balance and calm.
            </p>
          </div>
          <div className="flex flex-row w-full justify-between items-center">
            <div className="flex flex-row items-center gap-1">
              <SiEthereum color="#01fefc" />
              <p className="text-[#01fefc]">0.041 ETH</p>
            </div>
            <div className="flex flex-row items-center gap-1">
              <HiClock color="#8daedc" />
              <p className="text-[#8daedc]">3 days left</p>
            </div>
          </div>
          <div className="w-full h-[1px] bg-[#8daedc]/20" />
          <div className="flex flex-row w-full items-center gap-4">
            <Image
              alt="avatar"
              src={avatar}
              width={35}
              className="inset-0 object-cover ring-1 ring-white rounded-full"
            />
            <p className="text-[#8daedc]">
              Creation of{" "}
              <span className="text-white hover:text-[#01fefc] cursor-pointer ease-in-out duration-200">
                Jules Wyvern
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
