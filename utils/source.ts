import { map } from "@/.map";
import { createMDXSource } from "fumadocs-mdx";
import { loader } from "fumadocs-core/source";
import { PageTree } from "fumadocs-core/server";
import { type BaseLayoutProps } from "fumadocs-ui/layout";
import { Code2, Layout as IconLayout } from "lucide-react";
import { HomeIcon } from 'lucide-react';

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
        { type: "page", name: "Shiny Card", url: "/docs/folder-2/card" },
        { type: "page", name: "Text Cloud", url: "/docs/folder-2/cloud" },

        { type: "separator", name: "Buttons" },
        { type: "page", name: "Squeezy Button", url: "/docs/folder-2/button" },
        { type: "page", name: "Rolling Button", url: "/docs/folder-2/button1" },
      ],
    },
    {
      type: "folder",
      name: "Folder 3",
      root: true,
      defaultOpen: false,
      children: [
        { type: "separator", name: "Get Started" },
        { type: "page", name: "Introduction", url: "/docs/folder-3/intro" },
        { type: "page", name: "How to Use", url: "/docs/folder-3/how2" },
        { type: "page", name: "Quick Links", url: "/docs/folder-3/quick" },

        { type: "separator", name: "Templates" },
        { type: "separator", name: "Portfolio" },
        { type: "page", name: "Portfolio1", url: "/docs/folder-3/portfolio" },
        { type: "page", name: "Portfolio2", url: "/docs/folder-3/portfolio1"},
        { type: "separator", name: "Saas Platforms" },
        { type: "page", name: "SmartNotes", url: "/docs/folder-3/saas" },
        { type: "page", name: "BloxUI", url: "/docs/folder-3/saas1" },
        { type: "page", name: "Streamlit", url: "/docs/folder-3/saas2" },
        { type: "page", name: "VsCode", url: "/docs/folder-3/saas3" },
        { type: "page", name: "OneTask", url: "/docs/folder-3/saas4" },
        { type: "page", name: "SpendIn", url: "/docs/folder-3/saas5" },
        { type: "page", name: "NextLand", url: "/docs/folder-3/saas6" },
      ],
    },
    {
      type: "folder",
      name: "Folder 4",
      root: true,
      defaultOpen: false,
      children: [
        { type: "separator", name: "Get Started" },
        { type: "page", name: "Introduction", url: "/docs/folder-4/intro" },
        { type: "page", name: "How to Use", url: "/docs/folder-4/how2" },
        { type: "page", name: "Quick Links", url: "/docs/folder-4/quick" },

        { type: "separator", name: "Hero Section" },
        { type: "page", name: "Hero 1", url: "/docs/folder-4/hero" },
        { type: "page", name: "Hero 2", url: "/docs/folder-4/hero2" },
        { type: "page", name: "Hero 3", url: "/docs/folder-4/hero3" },
        { type: "page", name: "Hero 4", url: "/docs/folder-4/hero4" },
        { type: "page", name: "Hero 5", url: "/docs/folder-4/hero5" },
        { type: "page", name: "Hero 6", url: "/docs/folder-4/hero6" },
        { type: "page", name: "Hero 7", url: "/docs/folder-4/hero7" },

        { type: "separator", name: "About Section" },
        { type: "page", name: "About 1", url: "/docs/folder-4/about" },
        
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
      text: "Buy Premium",
      url: "/",  
    },
  ],
};



