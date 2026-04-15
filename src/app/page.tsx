import Image from "next/image";
import { inter } from "./layout";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-cyan-400/10 backdrop-blur-xl border border-white/20 shadow-xl min-h-screen">
      <nav className="p-1 flex justify-end">
        <button className="p-3 cursor-pointer">
          Blog
        </button>
      </nav>
      <div className="flex flex-col flex-1 items-center justify-center font-sans shadow-xl rounded-2xl p-8">
        <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50 font-s">
          Alex Cortez
        </h1>
        <main className="flex flex-col justify-center w-full max-w-3xl items-center py-32 px-16 sm:items-start">
          <div className="flex justify-center w-full">
            <Link href="/projects">
              <button
                className="flex h-12 w-full items-center justify-center rounded-full border border-solid px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px] cursor-pointer"
              >
                Projects
              </button>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}

// Put lightning bolt of thunder for lightning to symbolize 