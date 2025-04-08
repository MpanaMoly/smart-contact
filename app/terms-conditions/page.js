import { lusitana, inter, roboto } from "@/app/ui/fonts";
import { Pragati_Narrow } from "next/font/google";
export default function Page() {
const paragraphs = [{title : "1. Purpose", content : " These Terms and Conditions of Sale (TCS) define the rights and obligations of Smart Contact and its clients in the context of selling website creation, redesign, and maintenance services." },
    {title : "2. Services Offered", content : `Smart Contact provides the following services: • Website creation
        (business sites, e-commerce, blogs, etc.) • Website redesign and
        optimization • Maintenance and technical support • SEO and digital
        marketing`},
    {title : "3. Pricing and Payment", content : `• Service prices are listed in euros (€)
      and may vary depending on the client’s needs. • A 30% deposit is required
      at the time of order. The remaining balance must be paid before the
      website goes live. • Payment can be made via bank transfer, credit card,
      or PayPal.`},
    {title : "4. Right of Withdrawal & 14-Day Refund Policy", content : `• In accordance
      with Article L221-18 of the French Consumer Code, the client may withdraw
      from the contract within 14 days of signing, except if work has already
      begun with their consent. • If the client exercises their right of
      withdrawal before work starts, a full refund will be issued. • If work has
      already begun, a partial refund may be considered depending on the
      progress made. • No refunds will be issued after the final delivery of the
      website.`},
    {title : "5. Delivery Timeline", content : `• Timelines are agreed upon with the client
      and depend on the complexity of the project. • If Smart Contact is
      responsible for a delay, the client will be informed and may request a
      schedule adjustment.`},
    {title : "6. Responsibilities and Commitments", content : `• Smart Contact commits to
      delivering a high-quality service and providing a fully functional website
      according to the agreed specifications. • The client is responsible for
      supplying the necessary content (text, images, videos, etc.) within the
      agreed timeframe. • Smart Contact is not responsible for data loss due to
      mismanagement of hosting by the client.`},
    {title : "7. Intellectual Property", content : `• The delivered website remains the
      property of Smart Contact until full payment is received. • Once payment
      is completed, the client gains ownership of the website files and content
      unless otherwise stated in the contract.`},
    {title : "8. Maintenance and Support", content : `• Maintenance services can be subscribed to separately to ensure updates
        and security. • Any additional development requests after delivery will
        be subject to a separate quote.`},
    {title : "9. Disputes and Jurisdiction", content : `• In the event of a dispute, an amicable resolution will be sought. • If
        no agreement is reached, the dispute will be handled by the competent
        courts of Manchester.`},
    
]



  return (
    <main className="flex flex-col  ml-4 mr-4 mb-4 items-center justify-center">
     <div className="flex flex-col space-y-4 m-4">
     <h1 className={`${lusitana.className} antialiased font-bold text-xl`}> Terms and Conditions of Services</h1>
     <h2 className="font-bold">Last updated: April 2, 2025</h2>
    
        {paragraphs.map((paragraph) => { return (
            <div key={paragraph.title} className="flex flex-col space-y-2">
                <h2 className={`${roboto.className} antialiased text-lg font-bold pl-2`}>{paragraph.title}</h2>
                <p className={`${inter.className} antialiased text-base p-4`}>{paragraph.content}</p>
            </div>
        );})}
     



      </div>
    </main>
  );
}
