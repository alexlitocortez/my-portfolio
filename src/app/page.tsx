import Image from "next/image";
import { inter } from "./layout";
import Link from "next/link";
import GearLoader from "../components/GearLoader";
import GithubIcon from "../../public/images/github.svg";

export default function Home() {
  return (
    <div className="bg-cyan-400/10 backdrop-blur-xl border border-white/20 shadow-xl min-h-screen">
      <nav className="p-1 flex justify-end">
        <Link href="/blog">
          <button className="p-3 cursor-pointer">
            Blog
          </button>
        </Link>
      </nav>
      <div className="flex flex-col flex-1 items-center justify-center">
        <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight font-s">
          Alex
        </h1>
        <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight bg-gradient-to-r from-blue-900 via-indigo-700 to-purple-700 bg-clip-text text-transparent">
          Cortez
        </h1>
      </div>
      <div className="flex flex-col flex-1 items-center justify-center font-sans shadow-xl rounded-2xl p-8">
        <main className="flex flex-col justify-center w-full max-w-3xl items-center py-32 px-16 sm:items-start">
          <div className="flex flex-col justify-center items-center gap-4 w-full">
            <GearLoader />
            <div className="flex justify-center p-5">
              <Link href="/projects">
                <button
                  className="flex h-12 w-full items-center justify-center rounded-full border border-solid px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] cursor-pointer"
                >
                  Projects
                </button>
              </Link>
              <Link href="/">
                <Image
                  width={200}
                  height={200}
                  src={GithubIcon}
                  alt="Github icon"
                  className="w-full h-full object-contain cursor-pointer"
                />
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

// Center projects button