import React from 'react'
import { Layout } from "fumadocs-ui/layout";
import { BookIcon,Layout as IconLayout,Code } from "lucide-react";

const NavbarProvider = ({children}:{children:React.ReactNode}) => {
  return (
    <Layout
        nav={{
          title: "BloxUI.",
          url: "/",
        }}
        links={[
          {
            icon: <BookIcon />,
            text: "Docs",
            url: "/docs/folder-1/overview",
          },
          {
            icon: <BookIcon />,
            text: "About",
            url: "/docs/folder-1/about",
          },
          {
            type: "menu",
            text: "Menu",
            items: [
              
              {
                text: "Install",

                url: "/docs/folder-1/init",

                icon: <IconLayout />,
              },
              {
                text: "Features",
                url: "/docs/folder-1/codef",
                icon: <Code />,
              },
            ],
          },
          
          {
            text: "Icon",
            type: "icon",
            url: "/docs/folder-1/get-started",
            label: "test",
            icon: <BookIcon />,
          },

          {
            type: "menu",
            text: "Services",
            items: [
              
              {
                text: "Code Ground",

                url: "/docs/folder-2/intro",

                icon: <IconLayout />,
              },
              {
                text: "CLI Components",
                url: "/docs/folder-4/intro",
                icon: <Code />,
              },
              {
                text: "CLI Templates",
                url: "/docs/folder-3/intro",
                icon: <Code />,
              },
            ],
          },
          {
            icon: <BookIcon />,
            text: "Blox Draw",
            url: "/Draw",
          },
        ]}
      >
        {children}
      </Layout>
  )
}

export default NavbarProvider