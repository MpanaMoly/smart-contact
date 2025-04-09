import {
  CodeBracketIcon,
  PaintBrushIcon,
  ArrowPathRoundedSquareIcon,
} from "@heroicons/react/20/solid";
import { CheckCircleIcon } from "@heroicons/react/16/solid";
import { inter, roboto } from "@/app/ui/fonts";
import Nav from "@/app/ui/home/nav";
import ServiceContainer from "@/app/ui/service-container";
import ServicePackages from "@/app/ui/service-packages";

export default function Home() {
  return (
    <div className="flex flex-col grow">
      <Nav />
      <main className="flex flex-col grow min-h-full  justify-items-center pt-10">
        <div className="flex flex-col grow p-4 pb-6 pt-6">
          <h1
            className={`${inter.className}  text-3xl font-medium font-stretch-extra-condensed tracking-tight text-gray-950 mt-10`}
          >
            {" "}
            Build your website with confidence
          </h1>
          <p className={`${inter.className}  text-base/7 text-gray-700 mt-6`}>
            We create professional websites for businesses and individuals. We
            also provide expert redesign services for outdated websites.
          </p>
          <p className={`${inter.className}  text-base/7 text-gray-700 mt-6`}>
            Our company specialises in creating, redesigning, maintaining and
            hosting websites for small businesses, sole traders and individuals.
            <br />
            We also offer web content writing and SEO Optimization.
          </p>
          <p className={`${inter.className}  text-base/7 text-gray-700 mt-6`}>
            It could be a showcase site, an e-commerce site or just a blog, we
            take care of it with efficiency and professionalism.
          </p>
        </div>

        {/* {<ServiceContainer />} */}
        {<ServicePackages />}

      </main>
    </div>
  );
}
