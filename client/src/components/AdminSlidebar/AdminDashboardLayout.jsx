import React from "react";
import AdminSlidebar from "./AdminSlidebar";

function AdminDashboardLayout({ children }) {
  return (
    <div className="flex flex-row">
      <AdminSlidebar />

      
      <div className="bg-slate-100 w-full h-screen  p-4">
        <div>{children}</div>
      </div>
    </div>
  );
}

export default AdminDashboardLayout;
