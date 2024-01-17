import Image from "next/image";
import { Key } from "react";
import { WashCycleType, useStatus } from "../_swr/useStatus";
import { InputType } from "../_swr/useInput";

const Dashboard = () => {
  const { data: StatusData } = useStatus(true);

  return (
    <div className=" w-full h-[1000px]  flex flex-col text-base gap-y-[4.75rem]">
      <div className=" flex flex-col gap-y-[.85rem]">
        <h1 className=" heading">INPUT STATUS</h1>
        <div className=" flex gap-x-2">
          {StatusData?.inputStatus.map((inputData: InputType, index: Key) => {
            return (
              <div
                key={index}
                className={` ${
                  inputData?.status === "active"
                    ? "bg-[#06DE1C] text-white"
                    : "bg-[red] text-white"
                } py-2 w-[10rem] font-bold rounded-[.25rem]  flex items-center justify-center`}
              >
                {inputData?.inputName}
              </div>
            );
          })}
        </div>
        <div className=" flex gap-x-4">
          <div className=" w-[7.2rem]  h-[7.2rem] flex items-center justify-center p-4 bg-[#F5F5F5] rounded-full">
            <div
              className={` ${
                StatusData?.status != "start" && " opacity-50"
              } w-full h-full bg-[#06DE1C] rounded-full text-base font-bold flex items-center justify-center`}
            >
              <p
                className={`${
                  StatusData?.status == "start" && " flashing-text"
                }`}
              >
                START
              </p>
            </div>
          </div>
          <div
            className={`${
              StatusData?.status != "end" && " opacity-50"
            } w-[7.2rem]  h-[7.2rem] flex items-center justify-center p-4 bg-[#F5F5F5] rounded-full`}
          >
            <div
              className={` ${
                StatusData?.status != "end" && " opacity-50"
              } w-full h-full bg-[red] rounded-full text-base font-bold flex items-center justify-center`}
            >
              <p
                className={`${StatusData?.status == "end" && " flashing-text"}`}
              >
                END
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col gap-y-[.85rem]">
        <h1 className="heading">PUMP STATUS</h1>
        <div className=" flex gap-x-2">
          {StatusData?.pumpStatus.map((pumpData, index: Key) => {
            return (
              <div
                key={index}
                className=" flex flex-col gap-y-[1.4rem] items-center"
              >
                <div
                  className={`  ${
                    pumpData.status === "active"
                      ? "bg-[#06DE1C] text-white"
                      : "bg-[red] text-white"
                  } py-2 w-[10rem] font-bold rounded-[.25rem] flex items-center justify-center`}
                >
                  {pumpData.pumpName}
                </div>
                <div className=" flex-1 flex items-center justify-center">
                  {pumpData.status === "active" ? (
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
          {StatusData?.fluidLevel.map((FluidLevelData, index: Key) => {
            return (
              <div
                key={index}
                className={`${
                  FluidLevelData.status === "HIGH" ? "bg-[#06DE1C]" : "bg-[#FF0404]"
                } py-2 w-[10rem] gap-y-2 text-white flex-col  font-bold rounded-[.25rem]  flex items-center justify-center`}
              >
                <p>{FluidLevelData.pumpName}</p>
                <p>{FluidLevelData.status}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className=" flex flex-col gap-y-[.85rem]">
        <h1 className=" heading">WASH CYCLE</h1>
        <div className=" flex gap-x-2">
          {StatusData?.washCycle &&
            Object.keys(StatusData.washCycle).map((key, index) => {
              return (
                <div
                  key={index}
                  className={`py-2 w-[10rem] gap-y-2 text-black flex-col font-bold rounded-[.25rem] bg-[#F5F5F5] flex items-center justify-center`}
                >
                  <p className="uppercase">{key}</p>

                  <p>{StatusData?.washCycle[key as keyof WashCycleType]}</p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
