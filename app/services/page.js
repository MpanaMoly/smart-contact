import Form from "@/app/ui/create-form";
import Nav from "@/app/ui/home/nav";

export default function Page(){

    return(
        
        <div>
        <Nav/>
        <main  className="flex flex-col  ml-4 mr-4 mb-4 items-center justify-center">
        <Form/>
        <div className="p-4">
            <p> A 30% deposit is required at the time of the order.</p>
            <p> The remaining balance must be paid before the website goes live.</p>
            <p> Payment can be made via bank transfer, credit card, or PayPal</p>
        </div>
        </main>
        </div>
    );
}