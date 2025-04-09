import { lusitana, inter, roboto } from "@/app/ui/fonts";

export default function Page() {
const paragraphs = [{title : "1. Introduction", content :`Welcome to Smart-contact.pro. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.

By using our website, you agree to the collection and use of information in accordance with this Privacy Policy.`},
    {title : "2. Information We Collect", content : `When you interact with our website, we may collect the following personal information:

Full Name,

Country,

Phone Number,

Email Address

`},
    {title : "3. How We Use Your Information", content : `We use your information to:

Provide and manage our services

Respond to inquiries or support requests

Send important updates or notifications

Improve our website and user experience

Maintain security and prevent fraud

We do not sell or rent your personal data to third parties.`},
    {title : "4. How We Store and Protect Your Data", content : `Your data is stored securely, and we implement appropriate technical and organizational measures to protect it. Passwords are encrypted using industry-standard hashing algorithms.`},
    {title : "5. Sharing Your Information", content : `We may share your information with:

Service providers who help us operate the website (e.g., hosting, email services)

Legal authorities when required to comply with applicable laws or regulations

All third parties are required to keep your information confidential.`},
    {title : "6. Your Data Rights", content : `Depending on your location, you may have the right to:

Access the personal data we hold about you

Request correction or deletion of your information

Withdraw your consent at any time

To make any requests, please contact us at support@smart-contact.pro.`},
    {title : "7. Cookies & Tracking", content : `We may use cookies or similar tracking technologies to enhance your experience. You can control cookie preferences through your browser settings.`},
    {title : "8. Changes to This Policy", content : `We may update this Privacy Policy from time to time. When we do, we will revise the "Last Updated" date at the top of this page.`},
    {title : "9. Contact Us", content : `If you have questions or concerns about this Privacy Policy or your data, please contact us:

Email: support@smart-contact.pro`},
    
]



  return (
    <main className="flex flex-col  ml-4 mr-4 mb-4 items-center justify-center">
     <div className="flex flex-col space-y-4 m-4">
     <h1 className={`${lusitana.className} antialiased font-bold text-xl`}>Privacy Policy</h1>
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
