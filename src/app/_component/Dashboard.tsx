import Image from "next/image";
import { Key, useState } from "react";
import { useStatus } from "../_swr/useStatus";

type WasherStep =
  | "Detergent"
  | "Softener"
  | "Bleach"
  | "INPUT 4"
  | "INPUT 5"
  | "INPUT 6";
const Dashboard = () => {
  const { data } = useStatus();
  
  return (
    <div className=" w-full h-[1000px]  flex flex-col text-base gap-y-[4.75rem]">
      <div className=" flex flex-col gap-y-[.85rem]">
        <h1 className=" heading">INPUT STATUS</h1>
        <div className=" flex gap-x-2">
          {data?.inputStatus.map((e: { status: string; inputName: string}, index: Key) => {
            return (
              <div
                key={index}
                className={` ${
                  e.status === "active"
                    ? "bg-[#06DE1C] text-white"
                    : "bg-[red] text-white"
                } py-2 w-[10rem] font-bold rounded-[.25rem]  flex items-center justify-center`}
              >
                {e.inputName}
              </div>
            );
          })}
        </div>
        <div className=" flex gap-x-4">
          <div className=" w-[7.2rem]  h-[7.2rem] flex items-center justify-center p-4 bg-[#F5F5F5] rounded-full">
            <div
              className={` ${
                data?.status != "start" && " opacity-50"
              } w-full h-full bg-[#06DE1C] rounded-full text-base font-bold flex items-center justify-center`}
            >
              <p className="flashing-text">START</p>
            </div>
          </div>
          <div
            className={`${
              data?.status != "end" && " opacity-50"
            } w-[7.2rem]  h-[7.2rem] flex items-center justify-center p-4 bg-[#F5F5F5] rounded-full`}
          >
            <div className=" w-full h-full bg-[#F00] text-white opacity-50 rounded-full text-base font-bold flex items-center justify-center">
              <p>END</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col gap-y-[.85rem]">
        <h1 className="heading">PUMP STATUS</h1>
        <div className=" flex gap-x-2">
          {data?.pumpStatus.map((e: { status: string; pumpName: string}, index: Key) => {
            return (
              <div
                key={index}
                className=" flex flex-col gap-y-[1.4rem] items-center"
              >
                <div
                  className={`  ${
                    e.status === "active"
                      ? "bg-[#06DE1C] text-white"
                      : "bg-[red] text-white"
                  } py-2 w-[10rem] font-bold rounded-[.25rem] flex items-center justify-center`}
                >
                  {e.pumpName}
                </div>
                <div className=" flex-1 flex items-center justify-center">
                  {e.status === "active" ? (
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
          })}
        </div>
      </div>
      <div className=" flex flex-col gap-y-[.85rem]">
        <h1 className="heading">FLUID LEVEL</h1>
        <div className=" flex gap-x-2">
          {data?.fluidLevel.map((e: { status: string; pumpName: string}, index: Key) => {
            return (
              <div
                key={index}
                className={`${
                  e.status === "FULL" ? "bg-[#06DE1C]" : "bg-[#FF0404]"
                } py-2 w-[10rem] gap-y-2 text-white flex-col  font-bold rounded-[.25rem]  flex items-center justify-center`}
              >
                <p>{e.pumpName}</p>
                <p>{e.status}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className=" flex flex-col gap-y-[.85rem]">
        <h1 className=" heading">WASH CYCLE</h1>
        <div className=" flex gap-x-2">
          {data?.washCycle &&
            Object.keys(data.washCycle).map((e, index) => {
              return (
                <div
                  key={index}
                  className={`py-2 w-[10rem] gap-y-2 text-black flex-col font-bold rounded-[.25rem] bg-[#F5F5F5] flex items-center justify-center`}
                >
                  <p className="uppercase">{e}</p>
                  {/* @ts-ignore */}
                  <p>{data.washCycle[e]}</p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
