/* eslint-disable @next/next/no-img-element */
import ReviewCard from "@/components/pages/home/review-card";
import BorderBeam from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import { ParallaxText } from "@/components/ui/scroll-vallocity";
import { CoolMode } from "@/components/ui/cool-mode";
import Icons from "../../components/global/icons";
import main from "../../public/main.png"
import {
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/global/container";
import SectionBadge from "@/components/ui/section-badge";
import Wrapper from "@/components/global/wrapper";
import { LampContainer } from "@/components/ui/lamp";
import Footer2 from "@/components/footer";
import { Input } from "@/components/ui/input";

const perks = [
  {
    icon: Icons.auth,
    title: "Explore",
    info: "Get started and explore from a wide variety of components and templates.",
  },
  {
    icon: Icons.customize,
    title: "Customize",
    info: "Choose a template , run CLI command and customize it to fit your needs.",
  },
  {
    icon: Icons.launch,
    title: "Launch",
    info: "Deploy your project locally or Publish your website and share it with the world.",
  },
];

const features = [
  {
    icon: Icons.bolt,
    title: "Fast Setup",
    info: "Get your website up and running in minutes with our intuitive AI-powered builder.",
  },
  {
    icon: Icons.palette,
    title: "Customizable Templates",
    info: "Choose from a variety of stunning templates and customize them to suit your brand.",
  },
  {
    icon: Icons.seo,
    title: "SEO Optimized",
    info: "Built-in SEO features ensure your website ranks well on search engines.",
  },
  {
    icon: Icons.monitor,
    title: "Responsive Design",
    info: "Your website will look great on any device, from desktops to mobile phones.",
  },
  {
    icon: Icons.shop,
    title: "Production Ready",
    info: "Start making presence online with our AI features and integrations.",
  },
  {
    icon: Icons.server,
    title: "Secure Hosting",
    info: "Enjoy peace of mind with secure and reliable hosting for your website.",
  },
];

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
  },
];

export default function Home() {

  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);

  return (
    <main className="text-white scrollbar overflow-hidden">
      {/* <div className="absolute top-0 z-[-2] h-screen w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"/> */}
      <div className="absolute inset-0 dark:bg-[linear-gradient(to_right,#_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10 h-[150vh] mt-12" />
      <div className="relative">
        <div className="container relative z-0">
          {/* Hero */}
          <div className="flex flex-col items-center justify-center py-20 h-full">
            <a href="/docs/folder-6/intro">
              <button className="group relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
                <span>
                  <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
                </span>
                <span className="backdrop absolute inset-[1px] rounded-full bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-900" />
                <span className="h-full w-full blur-md absolute bottom-0 inset-x-0 bg-gradient-to-tr from-primary/40"></span>
                <span className="z-10 py-0.5 text-sm text-neutral-100 flex items-center justify-center gap-1.5">
                  <Image src="/fav/sparkles-dark.svg" alt="✨" width={24} height={24} className="w-4 h-4" />
                  Introducing Blox AI
                  <ChevronRight className="w-4 h-4" />
                </span>
              </button>
            </a>

            <Container>
              <div className="flex flex-col items-center justify-center text-center mx-auto mt-8 max-w-3xl w-11/12 md:w-full">
                <h1 className="text-4xl md:text-6xl lg:textxl md:!leading-snug font-semibold text-center bg-clip-text bg-gradient-to-b from-gray-50 to-gray-50 text-transparent">
                  Build your next <CoolMode>
                    <span className="bg-clip-text cursor-pointer select-none bg-gradient-to-b from-blue-200 to-purple-900">
                      idea
                    </span>
                  </CoolMode> and ship your dream site
                </h1>
                <p className="text-base md:text-lg text-foreground/80 mt-6 text-center">
                  Zero code, maximum speed. Make professional sites easy, fast and fun while delivering best-in-class SEO, performance.
                </p>
                <div className="hidden md:flex relative items-center justify-center mt-8 md:mt-12 w-full">
                  <Link href="/docs/folder-1/overview" className="flex items-center justify-center w-max rounded-full border-t border-foreground/30 bg-white/20 backdrop-blur-lg px-2 py-1 md:py-2 gap-2 md:gap-8 shadow-3xl shadow-background/40 cursor-pointer select-none">
                    <p className="text-foreground text-sm text-center md:text-base font-medium pl-4 pr-4 lg:pr-0">
                      ✨ {"  "} Start building your dream website now!
                    </p>
                    <Button size="sm" className="rounded-full hidden lg:flex border border-foreground/20">
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative flex items-center justify-center py-10 md:py-20">
                <div className="absolute  top-1/2 left-1/2 -z-10 gradient w-3/4 -translate-x-1/2 h-3/4 -translate-y-1/2 inset-0 blur-[10rem]"></div>
                <div className="-m-2 rounded-xl p-2 ring-1 ring-inset ring-foreground/20 lg:-m-4 lg:rounded-2xl bg-opacity-50 backdrop-blur-3xl">
                  <Image
                    src={main}
                    alt="banner image"
                    width={1200}
                    height={1400}
                    quality={100}
                    className="rounded-md lg:rounded-xl bg-black/10 shadow-2xl ring-1 ring-border"
                  />

                  <BorderBeam size={250} duration={12} delay={9} />
                </div>
              </div>
            </Container>
          </div>
          <Container>
            <div className="max-w-md mx-auto text-start md:text-center">
              <SectionBadge title="The Process" />
              <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
                Three steps to build your dream website
              </h2>
              <p className="text-muted-foreground mt-6">
                Turn your vision into reality in just 3 simple steps
              </p>
            </div>
          </Container>
          <Wrapper>
            <Container>
              <div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full divide-x-0 md:divide-x divide-y md:divide-y-0 divide-gray-900 first:border-l-2 lg:first:border-none first:border-gray-900">
                  {perks.map((perk) => (
                    <div key={perk.title} className="flex flex-col items-start px-4 md:px-6 lg:px-8 lg:py-6 py-4">
                      <div className="flex items-center justify-center">
                        <perk.icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-lg font-medium mt-4">
                        {perk.title}
                      </h3>
                      <p className="text-muted-foreground mt-2 text-start lg:text-start">
                        {perk.info}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Container>
          </Wrapper>
          <Wrapper className="flex flex-col items-center justify-center py-12 relative">
            <div className="hidden md:block absolute top-0 -right-1/3 w-72 h-72 bg-blue-700 rounded-full blur-[10rem] -z-10"></div>
            <div className="hidden md:block absolute bottom-0 -left-1/3 w-72 h-72 bg-indigo-600 rounded-full blur-[10rem] -z-10"></div>
            <Container>
              <div className="max-w-md mx-auto text-start md:text-center">
                <SectionBadge title="Features" />
                <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
                  Discover our powerful features
                </h2>
                <p className="text-muted-foreground mt-6">
                  BloxUI offers a range of features to help you build a stunning website in no time
                </p>
              </div>
            </Container>
            <Container>
              <div className="flex items-center justify-center mx-auto mt-8">
                <Icons.feature className="w-auto h-80" />
              </div>
            </Container>
            <Container>
              <div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8">
                  {features.map((feature) => (
                    <div key={feature.title} className="flex flex-col items-start lg:items-start px-0 md:px-0">
                      <div className="flex items-center justify-center">
                        <feature.icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-lg font-medium mt-4">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground mt-2 text-start lg:text-start">
                        {feature.info}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Container>
          </Wrapper>


          <div className="flex flex-col items-center justify-center py-12 relative">
            <div className="hidden md:block absolute -top-1/4 -left-1/3 w-72 h-72 bg-indigo-500 rounded-full blur-[10rem] -z-10"></div>
            <Container>
              <div className="max-w-md mx-auto text-start md:text-center">
                <SectionBadge title="Our Customers" />
                <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
                  What people are saying
                </h2>
                <p className="text-muted-foreground mt-6">
                  See how BloxUI empowers businesses of all sizes. Here&apos;s what real people are saying on Twitter
                </p>
              </div>
            </Container>
            <Container>
              <div className="pt-16">
                <div className="relative grid grid-cols-1 gap-4 before:absolute before:h-28 before:w-full before:bg-gradient-to-t before:from-transparent before:to-background after:absolute after:bottom-0 after:h-28 after:w-full after:bg-gradient-to-b after:from-transparent after:to-background xl:grid-cols-3 xl:gap-7">
                  <ReviewCard />
                  <ReviewCard />
                  <ReviewCard />
                  <ReviewCard />
                  <ReviewCard />
                  <ReviewCard />
                </div>
              </div>
            </Container>
          </div>

          <div className="flex flex-col items-center justify-center py-12 relative">
            <Container>
              <LampContainer>
                <div className="flex flex-col items-center justify-center relative w-full text-center">
                  <h2 className="text-4xl lg:text-5xl xl:text-6xl lg:!leading-snug font-semibold mt-8">
                    From Idea to Launch <br /> Faster Than Ever
                  </h2>
                  <p className="text-muted-foreground mt-6 max-w-md mx-auto">
                    Build stunning websites with BloxUI&apos;s intuitive CLI builder and powerful AI assistant
                  </p>
                  <Button className="mt-6" asChild>
                    <Link href="/docs/folder-1/overview">
                      Get started for free
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </LampContainer>
            </Container>
            <Container className="relative z-[999999]">
              <div className="flex items-center justify-center w-full -mt-40">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between w-full px-4 md:px-8 rounded-lg lg:rounded-2xl border border-border/80 py-4 md:py-8">
                  <div className="flex flex-col items-start gap-4 w-full">
                    <h4 className="text-xl md:text-2xl font-semibold">
                      Join our newsletter
                    </h4>
                    <p className="text-base text-muted-foreground">
                      Be up to date with everything about BloxUI
                    </p>
                  </div>
                  <div className="flex flex-col items-start gap-2 md:min-w-80 mt-5 md:mt-0 w-full md:w-max">
                    <form action="#" className="flex flex-col md:flex-row items-center gap-2 w-full md:max-w-xs">
                      <Input
                        required
                        type="email"
                        placeholder="Enter your email"
                        className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:border-primary duration-300 w-full"
                      />
                      <Button type="submit" size="sm" variant="secondary" className="w-full md:w-max">
                        Subscribe
                      </Button>
                    </form>
                    <p className="text-xs text-muted-foreground">
                      By subscribing you agree with our{" "}
                      <Link href="#">
                        Privacy Policy
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </Container>
          </div>
          <Footer2 />
        </div>
      </div>
    </main>
  );
}