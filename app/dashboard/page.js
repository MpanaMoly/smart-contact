import Nav from "@/app/ui/dashboard/nav";

export default function Page() {
  return (
    <div>
      <Nav />
      <main className="flex flex-col  ml-4 mr-4 mb-4 items-center justify-center">
        <div>
          <p>
            {" "}
            Thank you for choosing us, we will contact you as immediately via
            email, to set up a meeting
          </p>
        </div>
      </main>
    </div>
  );
}
