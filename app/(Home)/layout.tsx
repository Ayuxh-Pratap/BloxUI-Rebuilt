import NavbarProvider from "@/components/Navbar";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-[100dvh] flex flex-col">
      <NavbarProvider>
        <div className="flex-grow">{children}</div>
      </NavbarProvider>
    </main>
  );
}
