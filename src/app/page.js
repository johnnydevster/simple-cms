"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
import AddButton from "@/components/AddButton";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <section className="section container">
        <h1 className="heading mb-8">Super simple CMS</h1>
        <div className="flex gap-4">
          <div className="flex-1 max-w-sm">
            <ul className="font-semibold bg-white rounded border">
              <li className="bg-gradient-to-r from-primary-800 to-primary-700 text-white cursor-pointer p-4 rounded-t">
                HeroModule
              </li>
              <li className="hover:bg-gradient-to-r from-gray-100/50 to-gray-50 text-primary-800 cursor-pointer p-4">
                NumbersModule
              </li>
              <li className="hover:bg-gradient-to-r from-gray-100/50 to-gray-50 text-primary-800 cursor-pointer p-4">
                OtherModule
              </li>
            </ul>
            <AddButton className="my-4" />
          </div>
          <div className="bg-white rounded p-4 flex-1 border">Main fields</div>
        </div>
      </section>
    </main>
  );
}
