import { ChevronDown } from "lucide-react";

export default function DownloadButton() {
  return (
    <div className="flex w-fit items-center justify-center rounded bg-accent">
      <a href="/docs/folder-1/overview" className="px-4 py-2 pr-2.5">Explore BloxUI </a>
      <span className="border-l border-black p-2">
        <ChevronDown />
      </span>
    </div>
  );
}
