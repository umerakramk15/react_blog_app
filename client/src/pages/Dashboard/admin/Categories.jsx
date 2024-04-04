import React from "react";
import AdminDashboardLayout from "../../../components/AdminSlidebar/AdminDashboardLayout";
function Categories() {
  return (
    <AdminDashboardLayout>
      <div className="flex flex-col justify-start w-full h-full gap-y-10">
        <div>All Categories</div>
      </div>
    </AdminDashboardLayout>
  );
}

export default Categories;
