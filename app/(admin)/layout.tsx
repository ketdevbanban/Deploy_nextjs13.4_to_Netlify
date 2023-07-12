import React from "react";

export const metadata = {
  title: "Admin Page",
  description: "Admin Area",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>admin header</h1>
      {children}
      <h1>Admin footer</h1>
    </div>
  );
}
