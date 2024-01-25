"use client";
import Image from "next/image";
import { useMemo, useState } from "react";
import Dashboard from "./_component/Dashboard";
import PumpSetup from "./_component/PumpSetup";
import Solenoid from "./_component/Solenoid";
import InputSetUp from "./_component/InputSetup";
import PresetSetup from "./_component/PresetSetup";
import Network from "./_component/Network";

enum Menu {
  DASHBOARD = "DASHBOARD",
  PUMP_SETUP = "PUMP SETUP",
  PRESET_SETUP = "PRESET SETUP",
  SOLENOID = "SOLENOID",
  INPUT_SETUP = "INPUT SETUP",
  NETWORK = "NETWORK",
}
export default function Home() {
  const [currentMenu, setCurrentMenu] = useState<Menu>(Menu.DASHBOARD);

  const renderTab = useMemo(() => {
    switch (currentMenu) {
      case Menu.DASHBOARD:
        return <Dashboard />;
      case Menu.INPUT_SETUP:
        return <InputSetUp />;
      case Menu.PUMP_SETUP:
        return <PumpSetup />;
      case Menu.PRESET_SETUP:
        return <PresetSetup />;
      case Menu.SOLENOID:
        return <Solenoid />;
      case Menu.NETWORK:
        return <Network />;
      default:
        return null; // or handle the unknown case appropriately
    }
  }, [currentMenu]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white">
      <div className="w-full h-[120px] bg-[#1867C0] flex items-center px-[5.5rem]">
        <div className="flex items-center gap-x-3">
          <Image
            src="/logo.png"
            alt="Washer Mate Logo" // Provide a meaningful alt tag
            width={244}
            height={67}
            priority
          />
          <p className="text-[1.2rem] text-white font-normal mx-auto">
            WASHERMATE
          </p>
        </div>
        <div className="flex ml-auto gap-x-[30px] items-center">
          {Object.values(Menu).map((menuOption, index) => (
            <button
              key={index}
              onClick={() => setCurrentMenu(menuOption)}
              className={`flex flex-col text-[1.15rem] font-bold cursor-pointer text-white ${
                currentMenu !== menuOption && "opacity-50"
              }`}
            >
              <p>{menuOption}</p>
              <div
                className={`w-full h-[.45rem] bg-white transition-all ${
                  currentMenu !== menuOption && "opacity-0"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col w-full flex-1 pt-7 tracking-wide-[.32rem] px-[5.5rem]">
        {renderTab}
      </div>
    </main>
  );
}
