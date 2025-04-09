'use client';
import {
  CheckCircleIcon,
  PaintBrushIcon,
  CodeBracketIcon,
  ArrowPathRoundedSquareIcon,
} from "@heroicons/react/20/solid";
import { roboto, inter, lusitana } from "@/app/ui/fonts";
import { redirect } from "next/navigation";

export default function ServiceContainer() {
  const bundles = [
    {
      service: "Web Design ",
      icon: PaintBrushIcon,
      price: "500 $",
      description: "Starts from",
      assets: [
        "Custom layout design",
        "UI/UX planning",
        "Responsive design (mobile/tablet)",
        "Figma or design file handoff",
        "Direct build with Tailwind",
      ],
    },
    {
      service: "Full stack Development ",
      icon: CodeBracketIcon,
      price: "1000 $",
      description: "Starts from",
      assets: [" front-end development", "back-end development", "Deployment"],
    },
    {
      service: "Redesign ",
      icon: ArrowPathRoundedSquareIcon,
      price: "700 $",
      description: "Starts from",
      assets: [
        "Site audit (performance, design, usability)",
        "Revamp UI/UX and layout",
        "Code refactor or rebuild",
        "Responsive/mobile-first upgrade",
      ],
    },
  ];

  function handleClick() {
    redirect("/services");
  }
  return (
    <div className="flex flex-col md:flex-row ">
      {bundles.map((bundle) => {
        const ServiceIcon = bundle.icon;
        return (
          <div
            key={bundle.service}
            className="flex flex-col items-center justify-items-center rounded-2xl ring-1 ring-gray-500 p-4 mx-2"
          >
            <div className="flex items-center justify-items-center ring-1 ring-gray-500 rounded-md px-2 mb-2">
              <ServiceIcon className="w-6 text-sky-400" />
              <h2
                className={`${inter.className} text-lg font-semibold  text-gray-950`}
              >
                {bundle.service}
              </h2>
            </div>
            <div className="flex flex-col grow pl-4">
              <div className="flex flex-row items-end justify-items-end justify-end grow">
                <div className="flex flex-col">
                  <div className={`${inter.className} text-gray-70`}>
                    {bundle.description}
                  </div>
                  <div
                    className={`${roboto.className} text-3xl text-gray-950 font-medium `}
                  >
                    {bundle.price}
                  </div>
                </div>
                <ul className="flex flex-col gap-4 mt-2">
                  {bundle.assets.map((asset) => {
                    return (
                      <li
                        key={asset}
                        className="flex flex-row items-center justify-items-center"
                      >
                        <CheckCircleIcon className="w-6 h-6 text-sky-400" />
                        <p
                          className={`${inter.className}  text-gray-700 text-base font-medium`}
                        >
                          {asset}
                        </p>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <button
                onClick={handleClick}
                className="p-2 pr-4 pl-4 mt-2 bg-blue-400 rounded-2xl text-base text-white hover:shadow-md hover:bg-blue-500"
              >
                {"Get started"}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
