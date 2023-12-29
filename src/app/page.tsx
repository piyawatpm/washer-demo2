"use client";
import Image from "next/image";
import { useMemo, useState } from "react";
import Dashboard from "./__component/Dashboard";
import PumpSetup from "./__component/PumpSetup";
type Menu = "DASHBOARD" | "PUMP SETUP" | "PRESET SETUP" | "SOLENOID";
export default function Home() {
  const [currentMenu, setCurrentMenu] = useState("DASHBOARD");
  const renderTab = useMemo(() => {
    switch (currentMenu) {
      case "DASHBOARD":
        return <Dashboard />;
      case "PUMP SETUP":
        return <PumpSetup />;

      default:
        break;
    }
  }, [currentMenu]);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white">
      <div className=" w-full h-[120px] bg-[#1867C0] flex px-[7.5rem] items-center ">
        <Image
          className=""
          src="/logo.png"
          alt="Next.js Logo"
          width={244}
          height={67}
          priority
        />
        <p className=" text-[1.2rem] text-white font-normal mx-auto">
          WASHER MATE
        </p>
        <div className=" flex ml-auto gap-x-[70px] items-center">
          {["DASHBOARD", "PUMP SETUP", "PRESET SETUP", "SOLENOID"].map(
            (e, index) => {
              return (
                <div
                  onClick={() => {
                    setCurrentMenu(e);
                  }}
                  key={index}
                  className={` text-[1.15rem] font-bold cursor-pointer text-white ${
                    currentMenu !== e && "opacity-50"
                  }`}
                >
                  {e}
                </div>
              );
            }
          )}
        </div>
      </div>
      <div className=" flex flex-col w-full flex-1 pt-7 tracking-wide-[.32rem]">
        {renderTab}
      </div>
    </main>
  );
}
