import Image from "next/image";
import { Switch } from "antd";

const Solenoid = () => {
  return (
    <div className=" w-full h-[1000px]  flex flex-col text-base gap-y-[2rem]">
      <h1 className="heading">SOLENOID</h1>
      <div className=" flex flex-col gap-y-16">
        <div className=" w-full flex items-center bg-[#F5F5F5] py-[1.65rem] px-[3.25rem]">
          <h1 className=" text-[2rem] text-[#868686] font-black ">Flush</h1>
          <div className=" flex-1 pl-[10rem] flex items-center justify-between">
            <div className=" flex items-center gap-x-[1.65rem]">
              <p className=" text-[1.2rem] font-black">First Trigger Time</p>
              <input className=" w-[10rem] h-[3.7rem] border px-4 border-black"></input>
            </div>
            <div className=" flex items-center gap-x-[1.65rem]">
              <p className=" text-[1.2rem] font-black">Second Trigger Time</p>
              <input className=" w-[10rem] h-[3.7rem] border px-4 border-black"></input>
            </div>
            <Switch defaultChecked />
          </div>
        </div>
        <div className=" w-full flex items-center bg-[#F5F5F5] py-[1.65rem] px-[3.25rem]">
          <h1 className=" text-[2rem] text-[#868686] font-black ">Trigger</h1>
          <div className=" flex-1 pl-[10rem] flex items-center justify-between">
            <div className=" flex items-center gap-x-[1.65rem]">
              <p className=" text-[1.2rem] font-black">First Trigger Time</p>
              <input className=" w-[10rem] h-[3.7rem] border px-4 border-black"></input>
            </div>
            <div className=" flex items-center gap-x-[1.65rem]">
              <p className=" text-[1.2rem] font-black">Second Trigger Time</p>
              <input className=" w-[10rem] h-[3.7rem] border px-4 border-black"></input>
            </div>
            <Switch defaultChecked />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Solenoid;
