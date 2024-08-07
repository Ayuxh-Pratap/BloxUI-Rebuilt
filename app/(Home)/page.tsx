/* eslint-disable @next/next/no-img-element */
import Logo from "@/components/logo";
import ContentButton from "@/components/pages/home/content-button";
import DesktopExtentions from "@/components/pages/home/desktop-extensions";
import DownloadButton from "@/components/pages/home/download-button";
import FeatureCard from "@/components/pages/home/feature-card";
import Footer from "@/components/pages/home/footer";
import PhoneExtentions from "@/components/pages/home/phone-extentions";
import ReviewCard from "@/components/pages/home/review-card";
import BorderBeam from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import { ParallaxText } from "@/components/ui/scroll-vallocity";
import { CoolMode } from "@/components/ui/cool-mode";
import main from "../../public/main.png"
import {
  ArrowRight,
  BarChart2Icon,
  ChevronRight,
  CornerRightUpIcon,
  DownloadIcon,
  SearchIcon,
  SlidersVerticalIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="text-white scrollbar">
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

            <div className="flex flex-col items-center mt-8 max-w-3xl w-11/12 md:w-full">
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

            <div className="relative flex items-center py-10 md:py-20">
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
          </div>
          {/* Hero */}
        </div>
        <div>
          <section id="skills" className="pb-12">
            <ParallaxText baseVelocity={-5}>
              <span className="md:text-6xl text-xl font-semibold uppercase text-white/70" >
                BLOXUI •
              </span>
              <span className="md:text-6xl text-xl font-semibold uppercase text-white/70" >
                SAAS •
              </span>
              <span className="md:text-6xl text-xl font-semibold uppercase text-white/70" >
                PORTFOLIO •
              </span>
              <span className="md:text-6xl text-xl font-semibold uppercase text-white/70" >
                TEMPLATES •
              </span>
            </ParallaxText>
            <ParallaxText baseVelocity={10}>
              <span className="md:text-4xl text-xl font-semibold uppercase text-white/10" >
                BLOXUI🔹
              </span>
              <span className="md:text-4xl text-xl font-semibold uppercase text-white/10" >
                REACT🔹
              </span>
              <span className="md:text-4xl text-xl font-semibold uppercase text-white/10" >
                TAILWIND🔹
              </span>
              <span className="md:text-4xl text-xl font-semibold uppercase text-white/10" >
                CODE🔹
              </span>
              <span className="md:text-4xl text-xl font-semibold uppercase text-white/10" >
                Components🔹
              </span>
            </ParallaxText>
            <ParallaxText baseVelocity={-7}>
              <span className="md:text-6xl text-xl font-semibold uppercase text-white/70" >
                CLI •
              </span>
              <span className="md:text-6xl text-xl font-semibold uppercase text-white/70" >
                BLOXUI •
              </span>
              <span className="md:text-6xl text-xl font-semibold uppercase text-white/70" >
                CUSTOMIZE •
              </span>
              <span className="md:text-6xl text-xl font-semibold uppercase text-white/70" >
                OPENSOURCE •
              </span>
            </ParallaxText>
          </section>
        </div>
      </div>
      <div className="container">
        {/* Copilot */}
        <section className="my-6 mb-10 grid grid-cols-1 rounded bg-[#0d1218] p-4 md:my-8 md:grid-cols-2 md:rounded-[30px] md:p-10 xl:my-12">
          <div className="md:max-w-[430px]">
            <div className="flex w-fit items-center gap-2 rounded-[30px] bg-[#161b21] px-4 py-1">
              <div className="size-1.5 rounded-full bg-accent"></div>
              <span className="text-xs uppercase md:text-sm">New</span>
            </div>

            <h2 className="font-semibomd pt-2.5 text-xl 2xl:text-4xl">
              Web Templates & Components with BloxUI
            </h2>
            <p className="pb-5 pt-5 text-white/80 md:pb-11">
              Build and customize modern web apps. Easily integrate components, templates, and CLI tools to accelerate your development process.
            </p>

            <button className="rounded bg-[#20252a] px-5 py-2.5">
              Learn More
            </button>
          </div>

          <div className="relative hidden md:block">
            <div className="absolute left-32 top-6 z-10 w-60 rounded-md bg-[#152441] p-2.5 text-xs/4">
              How do I build a container that separates child items by exactly
              20px in CSS?
            </div>

            <div className="absolute left-24 top-24 z-10 mr-4 pt-4">
              <div className="pb-1.5 text-xs text-white/60">Copilot</div>
              <div className="w-64 rounded-md bg-[#252d35] p-2.5">
                <p className="pb-4">
                  You can use Flexbox for this! Here’s the code:
                </p>
                <div>Code Editor</div>
              </div>
              <div className="pt-1.5 text-xs text-white/40">
                Copilot is typing...
              </div>
            </div>

            <img
              className="absolute -top-24 right-0"
              src="/images/copilot-ships.png"
              alt=""
            />
          </div>
        </section>

        {/* Maximize */}
        <section className="my-6 grid grid-cols-1 items-center gap-4 md:my-8 md:grid-cols-2 md:rounded-[30px] xl:my-12">
          <div className="col-span-1 hidden lg:block">
            <img src="/images/maximize-productivity.png" alt="" />
          </div>

          <div className="col-span-full lg:col-span-1">
            <div className="inline-block rounded-md bg-[#1b2025] p-2.5">
              <BarChart2Icon className="size-7" />
            </div>
            <h2 className="pt-2.5 text-xl font-semibold 2xl:text-4xl">
              Maximize Development Efficiency
            </h2>
            <p className="pt-5 text-white/60">
              Accelerate your web development with BloxUI. Use pre-built components and full templates to build and customize your projects with ease.
            </p>

            <div className="relative block before:absolute before:top-0 before:h-12 before:w-full before:bg-background/5 before:backdrop-blur-sm after:absolute after:bottom-0 after:h-32 after:w-full after:bg-background/5 after:backdrop-blur-sm lg:hidden">
              <img src="/images/maximize-flat.png" alt="" />
            </div>

            <div className="space-y-2.5 pt-6">
              <FeatureCard
                title="Meet BloxCLI"
                description="From initialization to component addition, streamline your workflow with our custom CLI tool."
                link="#"
                active
              />
              <FeatureCard
                title="Full Website Templates"
                description="Deploy entire website templates quickly and efficiently, ensuring optimal performance and customization."
                link="#"
              />
            </div>
          </div>
        </section>

        {/* Deployment */}
        <section className="my-6 grid grid-cols-1 items-center gap-4 md:my-8 md:grid-cols-2 md:rounded-[30px] xl:my-12">
          <div className="col-span-full lg:col-span-1">
            <div className="inline-block rounded-md bg-[#1b2025] p-2.5">
              <CornerRightUpIcon className="size-7" />
            </div>

            <h2 className="pt-2.5 text-xl font-semibold 2xl:text-4xl">
              Deployment is a breeze
            </h2>
            <p className="pt-5 text-white/60">
              Build, deploy, and optimize your web applications effortlessly with BloxUI. Utilize our advanced components and templates to streamline your development process.
            </p>

            <img
              className="lg:hidden"
              src="/images/deployment-flat.png"
              alt=""
            />

            <div className="space-y-2.5 pt-6">
              <FeatureCard
                title="Meet BloxCLI"
                description="From project initialization to adding complex components, BloxCLI simplifies your development workflow."
                link="#"
              />
              <FeatureCard
                title="Optimized Templates"
                description="Quickly deploy optimized full website templates, ensuring high performance and seamless customization."
                link="#"
              />
            </div>
          </div>
          <div className="col-span-1 hidden lg:block">
            <img src="/images/easy-deployment.png" alt="" />
          </div>
        </section>

        {/* Customize */}
        <section className="grid grid-cols-1 items-center justify-center py-6 md:gap-16 xl:grid-cols-12 xl:py-12">
          <div className="hidden md:block xl:col-span-7">
            <DesktopExtentions />
          </div>

          <div className="xl:col-span-5">
            <div className="inline-block rounded-md bg-[#111213] p-2.5">
              <SlidersVerticalIcon className="size-7" />
            </div>

            <h2 className="pt-2.5 text-xl font-semibold 2xl:text-4xl">
              Customize all you want
            </h2>
            <p className="pt-5 text-white/60">
              Tailor your projects to perfection with BloxUI. Leverage our extensive library of components and customization options to create the perfect user interface.
            </p>

            <div className="block w-full pt-6 md:hidden">
              <PhoneExtentions />
            </div>

            <div className="space-y-2.5 pt-6">
              <FeatureCard
                title="Over 1000+ Components"
                description="Working with our extensive library has never been easier.. ."
                link="#"
              />
              <FeatureCard
                title="Choose your own Design"
                description="With BloxUI, you can deploy and host your React, Vue, Angular, and more."
                link="#"
              />
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="py-16">
          <div className="text-center">
            <h1 className="text-xl font-semibold 2xl:text-4xl">
              Loved by developers of all shapes and sizes
            </h1>
            <p className="pt-5 text-white/60">(Yes, even Java developers)</p>
          </div>

          <div className="pt-16">
            <div className="relative grid grid-cols-1 gap-4 before:absolute before:h-28 before:w-full before:bg-gradient-to-t before:from-transparent before:to-background after:absolute after:bottom-0 after:h-28 after:w-full after:bg-gradient-to-b after:from-transparent after:to-background xl:grid-cols-3 xl:gap-7">
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
            </div>
          </div>
        </section>

        <section className="py-6 pb-24 text-center xl:py-12">
          <p className="text-xl font-semibold 2xl:text-4xl">
            Today could be the best day of your (developer) life.
          </p>

          <div className="flex justify-center pt-12">
            <DownloadButton />
          </div>
          <p className="pt-5 text-xs">
            By using BloxUI, you agree to its{" "}
            <a className="text-blue-200" href="">
              license and privacy statement.
            </a>
          </p>
        </section>

        <Footer />
      </div>
    </main>
  );
}