import { useEffect } from "react";
import { Inter } from "next/font/google";
import { getAllAccount, getSelectedAccount } from "@/api/services";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    getSelectedAccount("farrelyf");
  }, []);

  return (
    <main className={`flex min-h-screen max-w-2xl m-auto flex-col items-center p-4 pt-24 ${inter.className}`}>
      {/* <div className="flex flex-col items-center gap-2 w-full mb-12">
        <h3 className="font-bold text-2xl">Name</h3>
        <p className="text-xl">Description</p>
      </div>
      <div className="flex flex-col items-center gap-8 w-full">
        <div className="p-5 h-full w-full bg-gray-300 rounded-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100/30 hover:scale-105 transition-all ease-in-out cursor-pointer">
          <p>Test GlassMorphism</p>
        </div>
        <div className="p-5 h-full w-full bg-gray-300 rounded-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100/30 hover:scale-105 transition-all ease-in-out cursor-pointer">
          <p>Test GlassMorphism</p>
        </div>
        <div className="p-5 h-full w-full bg-gray-300 rounded-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100/30 hover:scale-105 transition-all ease-in-out cursor-pointer">
          <p>Test GlassMorphism</p>
        </div>
        <div className="p-5 h-full w-full bg-gray-300 rounded-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100/30 hover:scale-105 transition-all ease-in-out cursor-pointer">
          <p>Test GlassMorphism</p>
        </div>
      </div> */}
    </main>
  );
}
