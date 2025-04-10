'use client';
 // import {
// //
//    CheckCircleIcon,
// //   PaintBrushIcon,
// //   CodeBracketIcon,
// //   ArrowPathRoundedSquareIcon,
//  } from "@heroicons/react/20/solid";
import { roboto, inter, lusitana } from "@/app/ui/fonts";
import { Card, CardContent } from "@/components/ui/card";
import {
  Paintbrush,
  ShoppingCart,
  Briefcase,
  GraduationCap,
  Users,
  Code,
  RefreshCcw,
  Puzzle,
} from "lucide-react";



  export default function ServicePackages() {
    const bundles = [
        {
          package: "Starter Website Package",
          icon: Paintbrush,
          price: "$500",
          description: "For individuals, freelancers, and small local businesses.",
          assets: [
            "Custom homepage + 2-3 subpages",
            "Responsive design",
            "Basic SEO setup",
            "Contact form integration",
            "Google Maps + Social links",
          ],
        },
        {
          package: "E-Commerce Package",
          icon: ShoppingCart,
          price: "$1000",
          description: "For online shops and product sellers.",
          assets: [
            "Store setup (Cart, Checkout, Products)",
            "Payment gateways (Stripe, PayPal)",
            "Inventory management",
            "Order alerts & coupons",
            "Mobile-optimized",
          ],
        },
        {
          package: "Business Pro Package",
          icon: Briefcase,
          price: "$700",
          description: "For growing businesses and professionals.",
          assets: [
            "5 to 10 custom pages",
            "Advanced forms",
            "Booking system",
            "Testimonials & blog",
            "Google Analytics + SEO",
          ],
        },
        {
          package: "Learning Platform Package",
          icon: GraduationCap,
          price: "$700",
          description: "For instructors and eLearning platforms.",
          assets: [
            "Course pages & quizzes",
            "User login",
            "Video & doc support",
            "Course payments",
            "Certificates & tracking",
          ],
        },
        {
          package: "Community/Membership Site",
          icon: Users,
          price: "$700",
          description: "For communities, clubs, and forums.",
          assets: [
            "User profiles & messages",
            "Members-only content",
            "Forums & groups",
            "Membership payments",
            "Event calendars",
          ],
        },
        {
          package: "Custom Web App",
          icon: Code,
          price: "Custom Quote",
          description: "For SaaS, tools, and full web applications.",
          assets: [
            "Full-stack development",
            "User dashboards & login",
            "Admin panel",
            "API integrations",
            "Real-time features",
          ],
        },
        {
          package: "Website Redesign",
          icon: RefreshCcw,
          price: "$700+",
          description: "For modernizing and revamping old sites.",
          assets: [
            "UI/UX audit",
            "Modern design",
            "Speed & SEO boost",
            "Content restructuring",
          ],
        },
        {
          package: "Add-on & Extras",
          icon: Puzzle,
          price: "Varies",
          description: "Available with any package.",
          assets: [
            "Logo & branding",
            "Copywriting",
            "SEO strategy",
            "Hosting & maintenance",
            "Speed & security setup",
          ],
        },
      ];
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {bundles.map((bundle) => {
          const Icon = bundle.icon;
          return (
            <Card key={bundle.package} className="rounded-2xl shadow-md">
              <CardContent className="p-6 space-y-4">
                
              <div className="flex items-center justify-items-center ring-1 ring-gray-500 rounded-md gap-2 p-2 mb-2">
                  <Icon className="w-6 h-6 text-sky-400" />
                  <h3 className={`${inter.className} text-lg font-semibold  text-gray-950`}>{bundle.package}</h3>
                </div>
                
                <p className="text-sm text-muted-foreground">{bundle.description}</p>
                <ul className="list-disc list-inside text-sm">
                  {bundle.assets.map((item) => { return ( <li key={item}>{item}</li> );})}
                </ul>
                <div className="text-right text-lg font-medium text-blue-700">{bundle.price}</div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    );
  }

// export default function ServiceContainer() {


//   function handleClick() {
//     redirect("/package");
//   }
//   return (
//     <div className="flex flex-col md:flex-row ">
//       {bundles.map((bundle) => {
//         const ServiceIcon = bundle.icon;
//         return (
//           <div
//             key={bundle.package}
//             className="flex flex-col items-center justify-items-center rounded-2xl ring-1 ring-gray-500 p-4 mx-2"
//           >
//             <div className="flex items-center justify-items-center ring-1 ring-gray-500 rounded-md px-2 mb-2">
//               <ServiceIcon className="w-6 text-sky-400" />
//               <h2
//                 className={`${inter.className} text-lg font-semibold  text-gray-950`}
//               >
//                 {bundle.package}
//               </h2>
//             </div>
//             <div className="flex flex-col grow pl-4">
//               <div className="flex flex-row items-end justify-items-end justify-end grow">
//                 <div className="flex flex-col">
//                   <div className={`${inter.className} text-gray-70`}>
//                     {bundle.description}
//                   </div>
//                   <div
//                     className={`${roboto.className} text-3xl text-gray-950 font-medium `}
//                   >
//                     {bundle.price}
//                   </div>
//                 </div>
//                 <ul className="flex flex-col gap-4 mt-2">
//                   {bundle.assets.map((asset) => {
//                     return (
//                       <li
//                         key={asset}
//                         className="flex flex-row items-center justify-items-center"
//                       >
//                         <CheckCircleIcon className="w-6 h-6 text-sky-400" />
//                         <p
//                           className={`${inter.className}  text-gray-700 text-base font-medium`}
//                         >
//                           {asset}
//                         </p>
//                       </li>
//                     );
//                   })}
//                 </ul>
//               </div>

//               <button
//                 onClick={handleClick}
//                 className="p-2 pr-4 pl-4 mt-2 bg-blue-400 rounded-2xl text-base text-white hover:shadow-md hover:bg-blue-500"
//               >
//                 {"Get started"}
//               </button>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }
