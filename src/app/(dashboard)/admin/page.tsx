import AttendanceChart from "@/components/AttendanceChart";
import CounterChart from "@/components/CounterChart";
import FinanceChart from "@/components/FinanceChart";
import UserCards from "@/components/UserCards";
import React from "react";

const Admin = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row sm:flex-row">
      {/* Left */}
      <div className="w-full md:w-2/3 sm:w-2/3 flex flex-col gap-8">
        {/* UserCards */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCards type="Student" />
          <UserCards type="Parent" />
          <UserCards type="Teacher" />
          <UserCards type="Staff" />
        </div>
        {/* Middle Charts */}
        <div className="flex gap-4 flex-col md:flex-row sm:flex-row">
          {/* Count Chart */}
          <div className="w-full md:w-1/3 sm:w-1/3 h-[450px]">
            <CounterChart />
          </div>
          {/* Attendance Chart */}
          <div className="w-full md:w-2/3 sm:w-2/3 h-[450px]">
            <AttendanceChart />
          </div>
        </div>
        {/* Bottom Charts */}
        <div className="w-full h-[500px]">
          <FinanceChart />
        </div>
      </div>
      {/* Right */}
      <div className="w-full md:w-1/3 sm:w-1/3">right</div>
    </div>
  );
};

export default Admin;
