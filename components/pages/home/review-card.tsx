import { cn } from "@/lib/utils";

export default function ReviewCard() {
  const randomId = Math.random() * (70 - 1) + 1;

  return (
    <div className={cn(
      "cursor-pointer overflow-hidden rounded-xl border p-4",
      "border-zinc-50/[.1]",
    )}>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum
        laboriosam aperiam veniam, nis, adipisci nisi quia quibusdam dolorum
        cumque perspiciatis est?
      </p>

      <div className="flex items-center justify-between pt-5">
        <div>
          <a
            className="text-sky-400/80"
            href="https://github.com/Ayuxh-Pratap"
            target="_blank"
          >
            @BloxUI
          </a>
          <p className="text-white/60">Unknown User</p>
        </div>
        <img
          src={`https://i.pravatar.cc/64?img=${randomId}`}
          className="size-10 rounded-full"
          alt=""
        />
      </div>
    </div>
  );
}
