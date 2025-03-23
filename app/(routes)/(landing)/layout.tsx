import getCurrentUser from "@/app/action/getCurrentUser";
import ClientOnly from "@/app/components/ClientOnly";
import Navbar from "@/app/components/Navbar";
import ToasterProvider from "@/app/provider/ToasterProvider";
import React from "react";

export const dynamic = "force-dynamic";

const layout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const currentUser = await getCurrentUser();
  return (
    <section>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <ClientOnly>
            <ToasterProvider />
            <Navbar currentUser={currentUser} />
          </ClientOnly>
          {children}
        </main>
      </div>
    </section>
  );
};

export default layout;
