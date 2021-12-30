import Image from "next/image";
import {
  SearchIcon,
  PlusCircleIcon,
  MenuIcon,
  PaperAirplaneIcon,
  UserGroupIcon,
  HeartIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useRecoilState, useRecoilValue } from "recoil";
import { modalState } from "../atoms/ModalAtom";
function Header() {
  const { data: session } = useSession();
  // session coming from google directly
  // console.log(session);
  const router = useRouter();
  const [open, setOpen] = useRecoilState(modalState);
  // const open = useRecoilValue(); read only version
  return (
    <div className="shadow-sm top-0 z-50 sticky bg-white border-b">
      <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
        {/* Left: Insta logo */}
        {/* On Large screen */}
        <div className="relative hidden lg:inline-grid  h-24 w-24  cursor-pointer">
          <Image
            onClick={() => router.push("/")}
            src="/2880px-Instagram_logo.svg.png"
            layout="fill"
            objectFit="contain"
          />
        </div>
        {/* On mobile Screen */}
        <div className="relative lg:hidden h-10 w-10  flex-shrink-0 cursor-pointer mt-3.5">
          <Image
            src="/insta-logo.png"
            layout="fill"
            objectFit="contain"
            onClick={() => router.push("/")}
          />
        </div>

        {/* Middle: Search bar input */}
        <div className="max-w-xs">
          <div className="relative mt-1 p-3 rounded-md ">
            <div className="absolute inset-y-0 pl-3 flex pointer-events-none items-center">
              <SearchIcon className="h-5 w-5 text-gray-500 " />
            </div>
            <input
              type="text"
              className="bg-gray-50 block w-full pl-10 rounded-md sm:text-sm border-gray-300 focus:ring-black focus:border-black"
              placeholder="Search"
            />
          </div>
        </div>
        {/* Right */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon onClick={() => router.push("/")} className="navButton" />
          <MenuIcon className="h-6 w-10 md:hidden cursor-pointer" />
          {session ? (
            <>
              <div className="relative navButton">
                <PaperAirplaneIcon className="rotate-45 navButton" />
                <div className="absolute -top-2 -right-2 text-xs w-5 bg-red-500 rounded-full flex items-center h-5 animate-pulse justify-center text-white">
                  5
                </div>
              </div>
              <PlusCircleIcon
                onClick={() => setOpen(true)}
                className="navButton"
              />
              <UserGroupIcon className="navButton" />
              <HeartIcon className="navButton" />
              <img
                src={session?.user?.image}
                alt="profile pic"
                className="h-10 w-10 rounded-full cursor-pointer"
                onClick={signOut}
              />
            </>
          ) : (
            <button onClick={signIn}>Sign in</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
