import Image from "next/image";
import { JSX, SVGProps } from "react";  
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function Home() {
  return (
    <main className="p-7">
    <div className="flex flex-col min-h-dvh">
      <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <BoxIcon className="h-8 w-8" />
          <span className="text-xl font-bold">Sullivan County Boxing Gym</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#" className="hover:underline" prefetch={false}>
            Classes
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Trainers
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Contact
          </Link>
        </nav>
        <Button variant="outline" className="bg-black">Join Now</Button>
      </header>
      <main className="flex-1">
        <section className="bg-muted py-12 md:py-24 lg:py-32">
          <div className="container grid lg:grid-cols-2 gap-8 items-center">
            <img
              src="/fighter.webp"
              width={1000}
              height={800}
              alt="Boxer"
              className="rounded-xl object-cover aspect-[4/3]"
            />
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter">Unleash Your Inner Champion</h1>
              <p className="text-muted-foreground">
                Experience the ultimate boxing workout at our state-of-the-art gym. Train with our expert coaches and
                join a community of passionate fighters.
              </p>
              <Button>Get Started</Button>
            </div>
          </div>
        </section>
        <section id="classes" className="py-12 md:py-24 lg:py-32">
          <div className="container">
            <div className="space-y-4 mb-8">
              <h2 className="text-3xl font-bold">Our Classes</h2>
              <p className="text-muted-foreground">
                Explore our wide range of boxing classes to find the perfect fit for your fitness goals.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Beginner Boxing</CardTitle>
                  <CardDescription>Learn the fundamentals of boxing in a supportive environment.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="h-5 w-5 text-muted-foreground" />
                      <span>Mon, Wed, Fri - 6:00 PM</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ClockIcon className="h-5 w-5 text-muted-foreground" />
                      <span>1 hour</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Intermediate Boxing</CardTitle>
                  <CardDescription>
                    Take your boxing skills to the next level with our intermediate class.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="h-5 w-5 text-muted-foreground" />
                      <span>Tue, Thu, Sat - 7:00 PM</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ClockIcon className="h-5 w-5 text-muted-foreground" />
                      <span>1.5 hours</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Advanced Boxing</CardTitle>
                  <CardDescription>
                    Challenge yourself with our advanced boxing class for experienced fighters.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="h-5 w-5 text-muted-foreground" />
                      <span>Mon, Wed, Fri - 8:00 PM</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ClockIcon className="h-5 w-5 text-muted-foreground" />
                      <span>2 hours</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="trainers" className="py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container">
            <div className="space-y-4 mb-8">
              <h2 className="text-3xl font-bold">Meet Our Trainers</h2>
              <p className="text-muted-foreground">
                Our expert trainers are dedicated to helping you reach your fitness goals.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              
              <Card>
                <CardHeader>
                  <img
                    src="/winner.webp"
                    width={300}
                    height={300}
                    alt="Trainer 2"
                    className="rounded-t-xl object-cover aspect-square"
                  />
                </CardHeader>
                <CardContent className="text-center">
                  <h3 className="text-xl font-bold">Jane Smith</h3>
                  <p className="text-muted-foreground">Boxing Instructor</p>
                  <p className="text-sm">
                    Jane is a former professional boxer who now shares her expertise with our members, helping them
                    improve their technique and fitness.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <img
                    src="/girl.webp"
                    width={300}
                    height={300}
                    alt="Trainer 3"
                    className="rounded-t-xl object-cover aspect-square"
                  />
                </CardHeader>
                <CardContent className="text-center">
                  <h3 className="text-xl font-bold">Michael Johnson</h3>
                  <p className="text-muted-foreground">Strength and Conditioning Coach</p>
                  <p className="text-sm">
                    Michael is a certified strength and conditioning coach who helps our members build the power and
                    endurance needed for boxing.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="contact" className="py-12 md:py-24 lg:py-32">
          <div className="container">
            <div className="space-y-4 mb-8">
              <h2 className="text-3xl font-bold">Contact Us</h2>
              <p className="text-muted-foreground">
                Get in touch with us for more information or to schedule a trial class.
              </p>
            </div>
            <form className="max-w-md mx-auto space-y-4">
              <Input type="text" placeholder="Name" />
              <Input type="email" placeholder="Email" />
              <Textarea placeholder="Message" />
              <Button type="submit">Submit</Button>
            </form>
          </div>
        </section>
        <section className="py-12 md:py-24 lg:py-32 flex justify-center items-center">
  <div className="container mx-auto flex flex-col items-center">
    <div className="space-y-4 mb-8 text-center">
      <h2 className="text-3xl font-bold">Our Trophies</h2>
      <p className="text-muted-foreground">Check out the trophies we&rsquo;ve won over the years.</p>
    </div>
    <Carousel className="w-full max-w-md">
      <CarouselContent>
        <CarouselItem>
          <img
            src="/trophy.webp"
            width={448}
            height={452}
            alt="Trophy 1"
            className="aspect-video object-cover rounded-md"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            src="/trophy.webp"
            width={448}
            height={452}
            alt="Trophy 2"
            className="aspect-video object-cover rounded-md"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            src="/jumps.webp"
            width={448}
            height={452}
            alt="Trophy 3"
            className="aspect-video object-cover rounded-md"
          />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </div>
</section>

      </main>
      <footer className="bg-primary text-primary-foreground py-6 px-4 md:px-6">
        <div className="container flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2">
            <BoxIcon className="h-6 w-6" />
            <span className="text-lg font-bold">Sullivan County Boxing Gym</span>
          </div>
          <nav className="flex items-center gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:underline" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
    </main>
  )
}

function BoxIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  )

}
function CalendarIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


function ClockIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}