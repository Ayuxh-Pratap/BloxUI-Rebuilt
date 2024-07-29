/* eslint-disable @next/next/no-img-element */
import Logo from "@/components/logo";
import DesktopExtentions from "@/components/pages/home/desktop-extensions";
import DownloadButton from "@/components/pages/home/download-button";
import FeatureCard from "@/components/pages/home/feature-card";
import Footer from "@/components/pages/home/footer";
import PhoneExtentions from "@/components/pages/home/phone-extentions";
import ReviewCard from "@/components/pages/home/review-card";
import { ParallaxText } from "@/components/ui/scroll-vallocity";
import {
  BarChart2Icon,
  CornerRightUpIcon,
  DownloadIcon,
  SearchIcon,
  SlidersVerticalIcon,
} from "lucide-react";

export default function Home() {
  return (
    <main className="text-white scrollbar">
      <div className="relative">
        <div className="container relative z-0">

          {/* Hero */}
          <section className="grid grid-cols-12 items-center md:pb-16 md:pt-12 xl:pb-24 xl:pt-16">
            <div className="relative col-span-full from-zinc-500 via-blue-300 to-blue-100 pb-6 pt-4 shadow md:col-span-3 md:hidden z-[50]">
              <img src="/images/hero-editor-flat.png" alt="" />
            </div>

            <div className="col-span-full md:col-span-6 z-0">
              <h1 className="text-4xl font-bold leading-tight 2xl:text-6xl">
                The most-optimised Library on the planet.
              </h1>

              <p className="pt-5 text-xl text-white/60">
                Free. Built on open source. Runs everywhere.
              </p>

              <div className="pt-5 xl:pt-10">
                <DownloadButton />
                <p className="pt-4 text-white opacity-60">
                  By using BloxUI, you agree to its{"  "}
                  <a className="text-blue-200" href="#">
                    license and privacy statements
                  </a>
                  .
                </p>
              </div>
            </div>

            <div className="relative col-span-6 hidden from-zinc-500 via-blue-300 to-blue-100 md:block md:pl-6">
              <img src="/images/hero-editor.png" alt="" />
              <img
                className="absolute -bottom-10 right-0"
                src="/images/hero-copilot.png"
                alt=""
              />
            </div>
          </section>
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