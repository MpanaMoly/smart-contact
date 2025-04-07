'use client'
import Image from "next/image";
import { redirect } from "next/navigation";
import {
  CodeBracketIcon,
  PaintBrushIcon,
  ArrowPathRoundedSquareIcon,
} from "@heroicons/react/20/solid";
import { CheckCircleIcon } from "@heroicons/react/16/solid";
import { lusitana, inter, roboto } from "@/app/ui/fonts";
import React from "react";
export default function Home() {
  function handleClick(){
    redirect("/checkout");
  }
  return (
    <main className="flex flex-row  ml-4 mr-4 mb-4">
      <div className="flex flex-col grow ">
        <div className="flex flex-row">
          <div className="flex flex-col grow p-4 shadow-md rounded-2xl">
            <div className="flex flex-row">
              <h1 className={`${lusitana.className} antialiased text-5xl text-zinc-900`}>
                {" "}
                Build your Website with confidence
              </h1>
            </div>
            <div className="flex flex-row">
              <div className="flex flex-col grow ">
                <p className={`${inter.className} antialiased text-zinc-500`}>
                  We create professional websites for businesses and
                  individuals. We also provide expert redesign services for
                  outdated websites.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-2 md:flex md:flex-row justify-around space-x-4 p-4 ">
          
          <div className="flex flex-col items-center justify-items-center rounded-2xl shadow-md p-4">
            <div className="flex flex-col items-center justify-items-center">
              <PaintBrushIcon className="h-20 w-20 text-blue-400" />
              <p className={`${lusitana.className} antialiased text-2xl texxt-zinc-900`}>
                {" "}
                Web Design
              </p>
            </div>
            <div
              className="flex items-center justify-center justify-items-center
              p-2"
            >
              <span className={`${inter.className} antialiased text-center text-zinc-600`}>
                Craft visually stunning, user-friendly websites tailored to your
                brand. We focus on layout, color schemes, typography, and user
                experience to ensure your visitors stay engaged and your message
                stands out.
              </span>
            </div>
            <div className="flex flex-col grow pl-4">
              <h2 className={`${roboto.className} antialiased`}>
                Price : $500{" "}
              </h2>
              <div>
              <ul className="text-sm">
                <li className={`${roboto.className} antialiased text-zinc-500 text-sm flex items-center justify-items-center`}>
                  <CheckCircleIcon className="w-6 text-blue-400" />
                  Custom layout design
                </li>
                <li className={`${roboto.className} antialiased text-zinc-500 text-sm flex items-center justify-items-center`}>
                  <CheckCircleIcon className="w-6 text-blue-400" />
                  UI/UX planning
                </li>
                <li className={`${roboto.className} antialiased text-zinc-500 text-sm flex items-center justify-items-center`}>
                  <CheckCircleIcon className="w-6 text-blue-400" />
                  Responsive design (mobile/tablet)
                </li>
                <li className={`${roboto.className} antialiased text-zinc-500 text-sm flex items-center justify-items-center`}>
                  <CheckCircleIcon className="w-6 text-blue-400" />
                  Figma or design file handoff (or direct build with Tailwind)
                </li>
              </ul>
              <button onClick={handleClick} className="p-2 pr-4 pl-4 mt-2 bg-blue-400 rounded-2xl text-base text-white hover:shadow-md hover:bg-blue-500">
                Get started
              </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-items-center rounded-2xl shadow-md p-4">
            <div className="flex flex-col items-center justify-items-center">
              <CodeBracketIcon className="h-20 w-20 text-blue-400" />
              <p className={`${lusitana.className} antialiased text-2xl texxt-zinc-900`}>
                Development
              </p>
            </div>
            <div
              className="flex items-center justify-center justify-items-center
              p-2"
            >
              <span className={`${inter.className} antialiased text-center text-zinc-600`}>
                We build high-performing, responsive websites using modern
                technologies. From simple landing pages to complex platforms,
                our development services turn your ideas into functional,
                scalable digital solutions.
              </span>
            </div>
            <div className="flex flex-col grow pl-4">
              <h2 className={`${roboto.className} antialiased`}>
                Price : $1000{" "}
              </h2>
              <div>
              <ul className="text-sm">
                <li className={`${roboto.className} antialiased text-zinc-500 text-sm flex items-center justify-items-center`}>
                  <CheckCircleIcon className="w-6 text-blue-400" />
                  Full front-end and back-end development
                </li>
                <li className={`${roboto.className} antialiased text-zinc-500 text-sm flex items-center justify-items-center`}>
                  <CheckCircleIcon className="w-6 text-blue-400" />
                  Next.js + Tailwind setup
                </li>
                <li className={`${roboto.className} antialiased text-zinc-500 text-sm flex items-center justify-items-center`}>
                  <CheckCircleIcon className="w-6 text-blue-400" />
                  Contact forms, dynamic content, CMS integration (optional)
                </li>
                <li className={`${roboto.className} antialiased text-zinc-500 text-sm flex items-center justify-items-center`}>
                  <CheckCircleIcon className="w-6 text-blue-400" />
                  Deployment (Vercel, Netlify, etc.)
                </li>
              </ul>
              <button onClick={handleClick} className="p-2 pr-4 pl-4 mt-2 bg-blue-400 rounded-2xl text-base text-white hover:shadow-md hover:bg-blue-500">
                Get started
              </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-items-center rounded-2xl shadow-md p-4">
            <div className="flex flex-col items-center justify-items-center">
              <ArrowPathRoundedSquareIcon className="h-20 w-20 text-blue-400" />
              <p className={`${lusitana.className} antialiased text-2xl texxt-zinc-900`}>
                {" "}
                Redesign{" "}
              </p>
            </div>
            <div
              className="flex items-center justify-center justify-items-center
              p-2"
            >
              <span className={`${inter.className} antialiased text-center text-zinc-600`}>
                Give your existing site a fresh, modern look. We evaluate your
                current website’s structure, design, and performance, then
                revamp it to improve usability, aesthetics, and functionality—so
                you can re-engage your audience and boost results.
              </span>
            </div>
            <div className="flex flex-col grow">
              <h2 className={`${roboto.className} antialiased`}>
                Price : $700{" "}
              </h2>
              <div>
              <ul className="text-sm">
                <li className={`${roboto.className} antialiased text-zinc-500 text-sm flex items-center justify-items-center`}>
                  <CheckCircleIcon className="w-6 text-blue-400" />
                  Site audit (performance, design, usability)
                </li>
                <li className={`${roboto.className} antialiased text-zinc-500 text-sm flex items-center justify-items-center`}>
                  <CheckCircleIcon className="w-6 text-blue-400" />
                  Revamp UI/UX and layout


                </li>
                <li className={`${roboto.className} antialiased text-zinc-500 text-sm flex items-center justify-items-center`}>
                  <CheckCircleIcon className="w-6 text-blue-400" />
                  Code refactor or rebuild
                </li>
                <li className={`${roboto.className} antialiased text-zinc-500 text-sm flex items-center justify-items-center`}>
                  <CheckCircleIcon className="w-6 text-blue-400" />
                  Responsive/mobile-first upgrade
                </li>
              </ul>
              <button onClick={handleClick} className="p-2 pr-4 pl-4 mt-2 bg-blue-400 rounded-2xl text-base text-white hover:shadow-md hover:bg-blue-500">
                Get started
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
