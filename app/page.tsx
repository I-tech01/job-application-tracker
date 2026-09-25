import ImageTabs from "@/components/image-tabs";
import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, TrendingUp, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-1">
        {/* hero section */}
        <section className="container mx-auto px-4 py-32">
          <div className="mx-auto max-w-4xl text-center">
            {" "}
            <h1 className="text-black mb-6 text-6xl font-bold">
              A better way to track job applications.
            </h1>
            <p className="text-gray-700 mb-10 text-xl">
              Capture, organize, and manage all your job applications in one
              place.
            </p>
            <div>
              <Link href="/sign-up">
                <Button className="h-12 px-8 text-lg font-medium" size="lg">
                  Get Started for Free <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <p className="text-sm text-gray-500">
                No credit card required. Start your free trial today.
              </p>
            </div>
          </div>
        </section>
        {/* image tabs section client component */}
        <ImageTabs />
        <div className="flex flex-col">
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center">
            <Briefcase className="h-6 w-6 text-primary" />
          </div>
          <h3 className="mb-3 text-2xl font-semibold text-black">
            Organize Applications
          </h3>
          <p className="text-muted-foreground">
            Create custom boards and columns to track your job applications at
            every stage of the process.
          </p>
        </div>
        <div className="flex flex-col">
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center">
            <TrendingUp className="h-6 w-6 text-primary" />
          </div>
          <h3 className="mb-3 text-2xl font-semibold text-black">
            Track Application Progress
          </h3>
          <p className="text-muted-foreground">
            monitor the status of your applications and receive notifications
            for updates, interviews, and follow-ups.
          </p>
        </div>
        <div className="flex flex-col">
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center">
            <CheckCircle2 className="h-6 w-6 text-primary"/>
          </div>
          <h3 className="mb-3 text-2xl font-semibold text-black">
         Stay Organized and Get Hired
          </h3>
          <p className="text-muted-foreground">
           never miss a deadline or opportunity with our intuitive interface and
            powerful features designed to help you stay on top of your job search.
          </p>
        </div>
      </main>
    </div>
  );
}
