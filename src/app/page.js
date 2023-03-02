import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <section className="section container">
        <h1 className="heading mb-8">Super simple CMS</h1>
        <div className="flex gap-4">
          <div className="bg-white rounded p-4 flex-1 max-w-sm">
            <ul className="font-semibold">
              <li className="bg-gray-100 cursor-pointer p-4 rounded-t">
                HeroModule
              </li>

              <li className="hover:bg-gray-50 cursor-pointer p-4 rounded-b">
                NumbersModule
              </li>
            </ul>
          </div>
          <div className="bg-white rounded p-4 flex-1">Main fields</div>
        </div>
      </section>
    </main>
  );
}
