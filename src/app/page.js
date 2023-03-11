"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
import Components from "@/components/Components";
import { useState } from "react";
import AddNewComponentButton from "@/components/AddNewComponentButton";
import ComponentFields from "@/components/ComponentFields";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [selectedComponent, setSelectedComponent] = useState();
  return (
    <main>
      <section className="section container">
        <h1 className="heading mb-8">Super simple CMS</h1>
        <div className="flex gap-4">
          <div className="flex-1 max-w-sm">
            <Components
              selectedComponent={selectedComponent}
              setSelectedComponent={setSelectedComponent}
            />
            <AddNewComponentButton className="my-2" />
          </div>
          <div className="bg-white rounded p-4 flex-1 border">
            <ComponentFields selectedComponent={selectedComponent} />
          </div>
        </div>
      </section>
    </main>
  );
}
