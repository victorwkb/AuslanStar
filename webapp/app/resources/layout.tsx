import React from "react";

export default function ResourcesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <>
      <nav>resources navbar</nav>
          <main>
              {children}
          </main>


      </>


    )


}