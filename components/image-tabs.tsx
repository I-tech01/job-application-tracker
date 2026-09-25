 "use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
 {/* hero images section with tabs */}
 
export default function ImageTabs() {
     const [activeTab, setActiveTab] = useState("Organize"); //organize hired board
     return (
        <section className="border-t bg-white py-16">
          <div>
            <div>
              {/* tabs */}
              <div className="flex gap-2 justify-center mb-8">
                <Button
                  onClick={() => setActiveTab("organize")}
                  className={`rounded-lg px-6 py-3 text-sm font-medium transition-colors ${activeTab === "organize" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
                >
                  Organize Application
                </Button>
                <Button
                  onClick={() => setActiveTab("hired")}
                  className={`rounded-lg px-6 py-3 text-sm font-medium transition-colors ${activeTab === "hired" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
                >
                  Get Hired
                </Button>
                <Button
                  onClick={() => setActiveTab("board")}
                  className={`rounded-lg px-6 py-3 text-sm font-medium transition-colors ${activeTab === "board" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
                >
                  Manage Board
                </Button>
              </div>
              <div className="relative mx-auto max-w-5xl overflow-hidden rounded-lg border-gray-200 shadow-xl">
                {" "}
                {activeTab === "organize" && (
                  <Image
                    src="/hero_images/hero1.jpg"
                    alt="Organize Application"
                    width={1200}
                    height={800}
                  />
                )}{" "}
                {activeTab === "hired" && (
                  <Image
                    src="/hero_images/hero3.jpg"
                    alt="get hired"
                    width={1200}
                    height={800}
                  />
                )}
                {activeTab === "board" && (
                  <Image
                    src="/hero_images/hero2.jpg"
                    alt="manage board"
                    width={1200}
                    height={800}
                  />
                )}
              </div>
            </div>
          </div>
        </section>
)}