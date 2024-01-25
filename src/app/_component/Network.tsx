import { Switch, message } from "antd";
import { useEffect, useState } from "react";
import { SolenoidData, useSolenoid } from "../_swr/useSolenoid";
import axios from "axios";

const Network = () => {
  const mockAvailableWifi = ["My Wi-Fi 123", "My Wi-Fi 456"];

  return (
    <div className=" w-full h-[1000px]  flex flex-col text-base gap-y-[2rem] opacity-20">
      <div className=" flex  items-center justify-between">
        <h1 className="heading">CONNECT TO Wi-Fi</h1>
        <div className=" flex gap-x-8 items-center">
          <div className=" flex gap-x-2 items-center">
            <div className=" rounded-full w-[1.2rem] h-[1.2rem] bg-[#06DE1C]"></div>
            <p className=" text-[1.2rem] font-black">Wi-Fi</p>
          </div>
          <div className=" flex gap-x-2 items-center">
            <div className=" rounded-full w-[1.2rem] h-[1.2rem] bg-[#C4C4C4]"></div>
            <p className=" text-[1.2rem] font-black">ACCESS POINT</p>
          </div>
          <div className=" flex gap-x-2 items-center">
            <div className=" rounded-full w-[1.2rem] h-[1.2rem] bg-[#C4C4C4]"></div>
            <p className=" text-[1.2rem] font-black">3G/4G</p>
          </div>
        </div>
      </div>
      <div className=" flex flex-col gap-y-10">
        <div className=" flex flex-col gap-y-[.7rem]">
          <p className=" text-[1.2rem] font-black">Available Wi-Fi</p>
          <div className=" w-full h-[13rem] border-[1px] border-black  py-3 flex flex-col gap-y-2">
            {mockAvailableWifi.map((e, index) => {
              return (
                <p
                  key={e}
                  className={`${
                    index % 2 != 0 && "bg-black text-white"
                  } text-base font-normal pl-[1.5rem] py-2`}
                >
                  {e}
                </p>
              );
            })}
          </div>
          <div className=" flex gap-x-5">
            <button
              className={` cursor-pointer gap-x-[.3rem] py-2 w-[10rem] font-bold rounded-[.25rem] button-primary text-black flex items-center justify-center`}
            >
              <p>Search</p>
            </button>
          </div>
        </div>
        <div className=" flex flex-col gap-y-[.7rem]">
          <div className=" flex gap-x-5">
            <div className=" flex flex-col gap-y-2 w-1/2">
              <p className=" text-[1.2rem] font-black">
                Selected SSID/Manual SSID
              </p>

              <div className=" w-full  border-[1px] border-black  py-3 flex flex-col gap-y-2">
                <p className="   text-base font-normal pl-[1.5rem] py-2">
                  My Wi-Fi 456
                </p>
              </div>
            </div>
            <div className=" flex flex-col gap-y-2 w-1/2">
              <p className=" text-[1.2rem] font-black">Wi-Fi Key</p>

              <div className=" w-full  border-[1px] border-black  py-3 flex flex-col gap-y-2">
                <p className="   text-base font-normal pl-[1.5rem] py-2">
                  1234
                </p>
              </div>
            </div>
          </div>

          <button
            className={` cursor-pointer gap-x-[.3rem] py-2 w-[10rem] font-bold rounded-[.25rem] button-primary text-black flex items-center justify-center`}
          >
            <p>Join</p>
          </button>
        </div>
        <div className=" flex flex-col gap-y-[.7rem]">
          <h1 className="heading">CREATE ACCESS POINT</h1>
          <div className=" flex gap-x-5">
            <div className=" flex flex-col gap-y-2 w-1/2">
              <p className=" text-[1.2rem] font-black">Wi-Fi SSID</p>

              <div className=" w-full  border-[1px] border-black  py-3 flex flex-col gap-y-2">
                <p className="   text-base font-normal pl-[1.5rem] py-2">
                  My Wi-Fi 456
                </p>
              </div>
            </div>
            <div className=" flex flex-col gap-y-2 w-1/2">
              <p className=" text-[1.2rem] font-black">Wi-Fi Key</p>

              <div className=" w-full  border-[1px] border-black  py-3 flex flex-col gap-y-2">
                <p className="   text-base font-normal pl-[1.5rem] py-2">
                  1234
                </p>
              </div>
            </div>
          </div>

          <button
            className={` cursor-pointer gap-x-[.3rem] py-2 w-[10rem] font-bold rounded-[.25rem] button-primary text-black flex items-center justify-center`}
          >
            <p>Join</p>
          </button>
        </div>
        <div className=" flex flex-col gap-y-[.7rem]">
          <h1 className="heading">3G/4G Settings</h1>
          <div className=" flex gap-x-5">
            <div className=" flex flex-col gap-y-2 w-1/2">
              <p className=" text-[1.2rem] font-black">APN</p>

              <div className=" w-full  border-[1px] border-black  py-3 flex flex-col gap-y-2">
                <p className="   text-base font-normal pl-[1.5rem] py-2">
                  My Wi-Fi 456
                </p>
              </div>
            </div>
          </div>

          <button
            className={` cursor-pointer gap-x-[.3rem] py-2 w-[10rem] font-bold rounded-[.25rem] button-primary text-black flex items-center justify-center`}
          >
            <p>Join</p>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Network;
