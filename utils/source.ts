import { map } from "@/.map";
import { createMDXSource } from "fumadocs-mdx";
import { loader } from "fumadocs-core/source";
import { PageTree } from "fumadocs-core/server";
import { type BaseLayoutProps } from "fumadocs-ui/layout";

export const {
  getPage,
  getPages,
  pageTree: originalTree,
} = loader({
  baseUrl: "/docs",
  rootDir: "docs",
  source: createMDXSource(map),
});

export const pageTree: PageTree.Root = {
  name: "Page Tree Name",
  children: [
    {
      type: "folder",
      name: "Folder 1",
      root: true,
      defaultOpen: false,
      children: [
        { type: "separator", name: "Getting Started" },
        { type: "page", name: "Overview", url: "/docs/folder-1/overview" },
        { type: "page", name: "What's BloxUI", url: "/docs/folder-1/bloxui" },
        { type: "page", name: "About", url: "/docs/folder-1/about" },

        { type: "separator", name: "Installation" },
        { type: "page", name: "Init", url: "/docs/folder-1/init" },
        { type: "page", name: "For React", url: "/docs/folder-1/react" },
        { type: "page", name: "For Vue", url: "/docs/folder-1/vue" },
        { type: "page", name: "For Angular", url: "/docs/folder-1/angular" },
        { type: "separator", name: "Features" },
        { type: "page", name: "Code Playground", url: "/docs/folder-1/codef" },
        { type: "page", name: "CLI Tools", url: "/docs/folder-1/clif" },
        { type: "separator", name: "Community" },
        { type: "page", name: "Contact Us", url: "/docs/folder-1/contact" },
        { type: "page", name: "Supporters", url: "/docs/folder-1/support" },
      ],
    },
    {
      type: "folder",
      name: "Folder 2",
      root: true,
      defaultOpen: false,
      children: [
        { type: "separator", name: "Get Started" },
        { type: "page", name: "Introduction", url: "/docs/folder-2/intro" },
        { type: "page", name: "How to Use", url: "/docs/folder-2/how2" },

        { type: "separator", name: "Components" },
        { type: "page", name: "Button", url: "/docs/folder-2/button" },
      ],
    },
    {
      type: "folder",
      name: "Folder 3",
      root: true,
      defaultOpen: false,
      children: [
        { type: "separator", name: "Folder-3" },
        { type: "page", name: "Home", url: "/docs/folder-3/test4" },
        { type: "page", name: "Code", url: "/docs/folder-3/test5" },
      ],
    },
  ],
};

export const sidebarOptions: BaseLayoutProps = {
  nav: {
    title: "BloxUI Docs",
  },
  links: [
    {
      text: "Documentation",
      url: "/",
      active: "nested-url",
    },
    {
      text: "Porfolio",
      url: "/",  
    },
  ],
};



