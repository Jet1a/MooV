import ClientOnly from "@/app/components/ClientOnly";
import Navbar from "@/app/components/Navbar";
import ToasterProvider from "@/app/provider/ToasterProvider";
import React from "react";

const layout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <section>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <ClientOnly>
            <ToasterProvider />

            <Navbar />
          </ClientOnly>
          {children}
        </main>
      </div>
    </section>
  );
};

export default layout;
