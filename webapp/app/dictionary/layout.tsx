import React from "react";

export default function DictionaryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <>
      <nav>dictionary navbar</nav>
          <main>
              {children}
          </main>


      </>


    )


}