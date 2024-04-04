import React from "react";

import AdminDashboardLayout from "../../../components/AdminSlidebar/AdminDashboardLayout";

function Overview() {
  return (
    <AdminDashboardLayout>
      <div className="flex flex-col justify-start w-full h-screen">
        <div>
          <h1 className="text-3xl text-black/80 font-bold">Overview</h1>
          <p className="text-sm font-normal text-black/60">Welcome to your Dashboard</p>
        </div>

        <div className="flex justify-start items-center">
          <div>
            <h1>To</h1>
          </div>
        </div>
      </div>
    </AdminDashboardLayout>
    
  );
}

export default Overview;
