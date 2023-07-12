import React from "react";

export const metadata = {
  title: "User Page",
  description: "User Area",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>User header</h1>
      {children}
      <h1>User footer</h1>
    </div>
  );
}
