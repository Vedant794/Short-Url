import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import localFont from "next/font/local";

const sour = localFont({
  src: "./fonts/SourGummy_Expanded-BoldItalic.ttf",
  variable: "--font-sour",
  weight: "100 900",
});
export default function Home() {
  return (
    <div
      className={` h-screen`}
      style={{ backgroundImage: `url("/background.avif")` }}
    >
      <main className="h-[90vh] overflow-y-hidden flex justify-evenly items-center">
        <div className="left w-[45%] flex flex-col items-center">
          <span className={`text-2xl text-center ${sour.className} mb-4`}>
            The best place to shorten your links
          </span>
          <span className="text-center text-lg font-serif mb-4">
            We are the most straightfoward URL Shortener in the world. Most of
            the url shorteners will track you or ask you to give your details
            for login. We understand your needs and hence we have created this
            URL shortener
          </span>
          <Link href={"/shorten"}>
            <Button variant={"default"} className="border border-white">
              Try Service
            </Button>
          </Link>
        </div>
        <div className="right w-[45%]">
          <Image
            className="mix-blend-darken"
            src={"/vector.jpg"}
            alt="Short url logo"
            height={900}
            width={1000}
            // fill={true}
          />
        </div>
      </main>
    </div>
  );
}
