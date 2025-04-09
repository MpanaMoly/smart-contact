import { lusitana, inter, roboto } from "@/app/ui/fonts";

export default function Page() {
const paragraphs = [{title:"1. Consent and Acceptance",
    content: `By checking the consent box presented on our website forms, you:

Confirm that you are authorized to provide personal data

Acknowledge that you have read and agree to this Data Processing Agreement

Give your explicit consent to the collection and processing of your data as outlined

This digital consent replaces the need for physical or electronic signatures.`
},{title : "2. Subject Matter and Duration", 
    content :`This Agreement governs the processing of personal data by the Processor on behalf of the Controller in connection with the services provided via the website smart-contact.pro.

The Agreement remains in effect as long as we continue processing your data in relation to the services.`},
    {title : "3. Nature and Purpose of Processing",
        content : `The Processor processes personal data solely to:

Deliver web design, development, and redesign services

Manage user registrations and communications

Secure accounts and platform access

Improve service quality and user experience



`},
    {title : "4. Types of Personal Data and Data Subjects", 
        content : `Personal Data Collected:

Full Name

Country

Phone Number

Email Address

Encrypted Password

Data Subjects:

Users who submit data through our website`},
    {title : "5. Processor Obligations",
     content : `We commit to:

Processing personal data only as instructed by you

Implementing strong security and encryption measures

Ensuring that only authorized personnel access your data

Notifying you promptly in case of a data breach

Deleting or anonymizing your data upon request or service termination`},
    {title : "6. Sub-Processors", 
    
    content : `We may use trusted third-party service providers (e.g., hosting, email services) to help deliver our services. All sub-processors are contractually bound to follow the same data protection standards.

A current list of sub-processors is available upon request.`},
    {title : "7. International Data Transfers", 
        content : `If we transfer personal data outside your country (e.g., to cloud providers), we ensure it’s protected using mechanisms like:

Standard Contractual Clauses (SCCs)

Adequacy decisions from regulatory bodies

Other recognized safeguards`},
    {title : "8. Your Rights", 
        content : `As the data subject, you have the right to:

Access your personal data

Correct or delete your data

Withdraw your consent at any time

To exercise these rights, contact us at support@smart-contact.pro.`},
    {title : "9. Changes to This Agreement", 
        content : `We may update this Agreement from time to time. Material changes will be announced on our website, and continued use of our services after updates signifies your acceptance.`},
    {title : "10. Contact Information", 
        content : `For questions about this Agreement or your personal data, reach out to:

SMART CONTACT
Email: support@smart-contact.pro
Website: smart-contact.pro`},
    
]



  return (
    <main className="flex flex-col  ml-4 mr-4 mb-4 items-center justify-center">
     <div className="flex flex-col space-y-4 m-4">
     <h1 className={`${lusitana.className} antialiased font-bold text-xl`}>Data Processing Agreement (DPA)</h1>
     <h2 className="font-bold">Last updated: April 2, 2025</h2>
     <p>This Data Processing Agreement (&quot;Agreement&quot;) is made between:

Smart-contact.pro, with its principal place of business in Manchester (&quot;Processor&quot;)

and

You, the individual or entity submitting personal information through our website (&quot;Controller&quot;)

This Agreement explains how we handle your personal data when you use our services, and it becomes effective once you give your consent via our online form.</p>
    
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
