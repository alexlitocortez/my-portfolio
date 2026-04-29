import Image from "next/image";
import { inter } from "./layout";
import Link from "next/link";
import GearLoader from "../components/GearLoader";
import GithubIcon from "../../public/images/github.svg";
import LinkedIcon from "../../public/images/linkedin.svg";
import About from "../sections/about/about";

export default function Home() {
  return (
    <div className="bg-background backdrop-blur-xl border border-white/20 shadow-xl min-h-screen">
      <nav className="p-1 flex justify-between">
        <div className="flex font-semibold p-3 gap-2 m-3">
          <h3>
            Alex
          </h3>
          <h3 className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
            Cortez
          </h3>
        </div>
        <div className="flex items-center gap-6">
          <Link href="#about">
            <button className="cursor-pointer hover:text-gray-500">
              About
            </button>
          </Link>
          <Link href="/blog">
            <button className="p-3 cursor-pointer hover:text-gray-500">
              Blog
            </button>
          </Link>
        </div>
      </nav>
      <div className="flex flex-1 items-center justify-center gap-2 p-5">
        <h1 className="flex flex-col sm:flex-row items-center justify-center gap-2 text-6xl font-semibold tracking-tight">
          <span>Alex</span>
          <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
            Cortez
          </span>
        </h1>
      </div>
      <div className="flex flex-col flex-1 items-center justify-center font-sans shadow-xl rounded-2xl p-8">
        <main className="flex flex-col justify-center w-full max-w-3xl items-center py-32 px-16 sm:items-start">
          <div className="flex flex-col justify-center items-center gap-4 w-full">
            <GearLoader />
            <div className="flex justify-center items-center gap-4 p-5 max-[600px]:flex-col">
              <Link href="/projects">
                <button
                  className="bg-accent flex h-12 w-full items-center justify-center rounded-full px-5 cursor-pointer hover:bg-violet-600"
                >
                  Projects
                </button>
              </Link>
              <Link href="https://github.com/alexlitocortez">
                <div className="h-12 w-12 flex items-center justify-center bg-secondary rounded-full">
                  <Image
                    width={5}
                    height={5}
                    src={GithubIcon}
                    alt="Github icon"
                    className="w-full object-contain cursor-pointer"
                  />
                </div>
              </Link>
              <Link href="https://www.linkedin.com/in/alexlitocortez/">
                <div className="h-13 w-13 flex items-center justify-center bg-secondary rounded-full">
                  <Image
                    width={5}
                    height={5}
                    src={LinkedIcon}
                    alt="Linkedin icon"
                    className="w-full object-contain cursor-pointer"
                  />
                </div>
              </Link>
            </div>
          </div>
        </main>
      </div>
      <About />
    </div>
  );
}


// Adjust text size for "Alex" "Cortez" near nav when it goes mobile
// Make skills section
// Make experience section
// Work on first blog
