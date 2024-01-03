import Image from "next/image";
import { useState } from "react";
type WasherStep =
  | "Detergent"
  | "Softener"
  | "Bleach"
  | "INPUT 4"
  | "INPUT 5"
  | "INPUT 6";
const Dashboard = () => {
  const [washerStep, setWasherStep] = useState<WasherStep>("Detergent");
  const mockPumpStatus = [1, 3, 4, 6];
  const mockFluidLeve = [
    {
      name: "PUMP 1",
      status: "FULL",
    },
    {
      name: "PUMP 2",
      status: "LOW",
    },
    {
      name: "PUMP 3",
      status: "FULL",
    },
    {
      name: "PUMP 4",
      status: "FULL",
    },
    {
      name: "PUMP 5",
      status: "LOW",
    },
    {
      name: "PUMP 6",
      status: "FULL",
    },
  ];
  const mockWashCycleData = {
    daily: 6,
    weekly: 36,
    monthly: 144,
  };
  return (
    <div className=" w-full h-[1000px]  flex flex-col text-base gap-y-[4.75rem]">
      <div className=" flex flex-col gap-y-[.85rem]">
        <h1 className=" heading">INPUT STATUS</h1>
        <div className=" flex gap-x-2">
          {[
            "Detergent",
            "Softener",
            "Bleach",
            "INPUT 4",
            "INPUT 5",
            "INPUT 6",
          ].map((e, index) => {
            return (
              <div
                key={index}
                className={` ${
                  washerStep === e
                    ? "bg-[#06DE1C] text-white"
                    : "bg-[#F5F5F5] text-black"
                } py-2 w-[10rem] font-bold rounded-[.25rem]  flex items-center justify-center`}
              >
                {e}
              </div>
            );
          })}
        </div>
        <div className=" flex gap-x-4">
          <div className=" w-[7.2rem]  h-[7.2rem] flex items-center justify-center p-4 bg-[#F5F5F5] rounded-full">
            <div className=" w-full h-full bg-[#06DE1C] rounded-full text-base font-bold flex items-center justify-center">
              <p className="flashing-text">START</p>
            </div>
          </div>
          <div className=" w-[7.2rem]  h-[7.2rem] flex items-center justify-center p-4 bg-[#F5F5F5] rounded-full">
            <div className=" w-full h-full bg-[#F00] text-white text-opacity-50 rounded-full text-base font-bold flex items-center justify-center">
              <p>END</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col gap-y-[.85rem]">
        <h1 className="heading">PUMP STATUS</h1>
        <div className=" flex gap-x-2">
          {["PUMP 1", "PUMP 2", "PUMP 3", "PUMP 4", "PUMP 5", "PUMP 6"].map(
            (e, index) => {
              return (
                <div
                  key={index}
                  className=" flex flex-col gap-y-[1.4rem] items-center"
                >
                  <div
                    className={`  ${
                      mockPumpStatus.includes(index + 1)
                        ? "bg-[#06DE1C] text-white"
                        : "bg-[#F5F5F5] text-black"
                    } py-2 w-[10rem] font-bold rounded-[.25rem] flex items-center justify-center`}
                  >
                    {e}
                  </div>
                  <div className=" flex-1 flex items-center justify-center">
                    {mockPumpStatus.includes(index + 1) ? (
                      <Image
                        className=" animate-spin"
                        src="/pump.png"
                        alt="pump"
                        width={71}
                        height={71}
                        priority
                      />
                    ) : (
                      <div className=" w-[1.2rem] h-[1.2rem] bg-black rounded-full"></div>
                    )}
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
      <div className=" flex flex-col gap-y-[.85rem]">
        <h1 className="heading">FLUID LEVEL</h1>
        <div className=" flex gap-x-2">
          {mockFluidLeve.map((e, index) => {
            return (
              <div
                key={index}
                className={`${
                  e.status === "FULL" ? "bg-[#06DE1C]" : "bg-[#FF0404]"
                } py-2 w-[10rem] gap-y-2 text-white flex-col  font-bold rounded-[.25rem]  flex items-center justify-center`}
              >
                <p>{e.name}</p>
                <p>{e.status}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className=" flex flex-col gap-y-[.85rem]">
        <h1 className=" heading">WASH CYCLE</h1>
        <div className=" flex gap-x-2">
          {[{ tpye: "daily" }, { tpye: "weekly" }, { tpye: "monthly" }].map(
            (e, index) => {
              return (
                <div
                  key={index}
                  className={` py-2 w-[10rem] gap-y-2 text-black flex-col  font-bold rounded-[.25rem] bg-[#F5F5F5] flex items-center justify-center`}
                >
                  <p className=" uppercase">{e.tpye}</p>
                  {/* @ts-ignore */}
                  <p>{mockWashCycleData[e.tpye]}</p>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
