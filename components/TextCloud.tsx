import TextCloud from "./ui/TextCloud";

const slugs = [
  "Tailwind",
  "SCSS",
  "Axios",
  "Tanstack",
  "Cloudinary",
  "Redux",
  "Zustand",
  "Zod",
  "Bootstrap",
  "React Native",
  "Next",
  "MongoDB",
  "Mongoose",
  "MySQL",
  "Postgres",
  "Prisma",
  "Firebase",
  "Git",
  "cPanel",
  "Heroku",
  "JSON",
  "VS Code",
  "REST API",
  "Stripe",
];

export default function TextCloudDemo() {
  return (
    <div className="relative h-[86vh] w-full">
      <div className="absolute border rounded-lg bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="flex mt-14 justify-center items-center">
          <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background px-20 py-10 ">
            <TextCloud iconSlugs={slugs} />
          </div>
        </div>
      </div>
    </div>
  );
}