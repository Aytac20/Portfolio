import Header from "@/components/shared/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-[#f3eadd]">
      <Header />
      <div className="">{children}</div>
    </div>
  );
}
