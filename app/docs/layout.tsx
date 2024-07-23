import { DocsLayout } from "fumadocs-ui/layout";
import type { ReactNode } from "react";
import { docsOptions } from "../layout.config";
import { pageTree } from "../../utils/source";
import { RootToggle } from "fumadocs-ui/components/layout/root-toggle";
import { Code2, Layout as IconLayout } from "lucide-react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      nav={{ title: "BloxUI." }}
      githubUrl="https://github.com/"
      sidebar={{
        banner: (
          <RootToggle
            options={[
              {
                title: "Get Started",
                icon: (
                  <div className="size-9 shrink-0 rounded-md bg-gradient-to-t from-background/80 p-1.5"
                  style={{
                    backgroundColor: `hsl( 250 100% 80%/.3)`,
                    color: `hsl( 250 100% 80%)`,
                  }}>
                    <Code2 />
                   </div>
                ),
                description: "Docs for Initialisation",
                url: "/docs/folder-1/overview",
              
              },
              {
                title: "Code Ground",
                icon: (
                  <div className="size-9 shrink-0 rounded-md bg-gradient-to-t from-background/80 p-1.5"
                  style={{
                    backgroundColor: `hsl( 250 100% 80%/.3)`,
                    color: `hsl( 250 100% 80%)`,
                  }}><IconLayout />
                  </div>
                ),
                description: "Play with Built Code",
                url: "/docs/folder-2/intro",
              },
              {
                title: "CLI Components",
                icon: (
                  <div className="size-9 shrink-0 rounded-md bg-gradient-to-t from-background/80 p-1.5"
                  style={{
                    backgroundColor: `hsl( 250 100% 80%/.3)`,
                    color: `hsl( 250 100% 80%)`,
                  }}><IconLayout />
                  </div>
                ),
                description: "Components through CLI",
                url: "/docs/folder-4/intro",
              },
              {
                title: "CLI Templates",
                icon: (
                  <div className="size-9 shrink-0 rounded-md bg-gradient-to-t from-background/80 p-1.5"
                  style={{
                    backgroundColor: `hsl( 250 100% 80%/.3)`,
                    color: `hsl( 250 100% 80%)`,
                  }}><IconLayout />
                  </div>
                ),
                description: "Templates through CLI",
                url: "/docs/folder-3/intro",
              },
            ]}
          />
        ),
      }}
      {...docsOptions}
      tree={pageTree}
    >
      {children}
    </DocsLayout>
  );
}
