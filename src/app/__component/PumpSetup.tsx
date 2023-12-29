import Image from "next/image";
import { Switch } from "antd";

const PumpSetup = () => {
  return (
    <div className=" w-full h-[1000px] px-[6.6rem] flex flex-col text-base gap-y-[2rem]">
      <h1 className=" text-[1.6rem] font-bold text-black">PUMP</h1>
      <div className=" flex w-full items-center justify-between">
        {[1, 2, 3, 4, 5, 6].map((e, i) => {
          return (
            <div key={i} className=" h-[600px] flex flex-col gap-y-2">
              <div className="  py-2 w-[10rem] font-bold rounded-[.25rem] bg-[#F5F5F5] text-black flex items-center justify-center">
                INPUT {i + 1}
              </div>
              <div className=" cursor-pointer gap-x-[.3rem] py-2 w-[10rem] font-bold rounded-[.25rem] bg-[#F5F5F5] text-black flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className=" w-[1.2rem] h-[1.2rem]"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M11.55 3.9L20.1 12.45L8.55 24H0V15.45L11.55 3.9ZM11.55 8.25L3 16.8V21H7.2L15.75 12.45L11.55 8.25ZM15.6 0L24 8.55L21.45 11.1L12.9 2.55L15.6 0Z"
                    fill="black"
                  />
                </svg>
                <p>Edit</p>
              </div>
              <div className=" flex-1 flex flex-col items-center bg-[#F5F5F5] w-full rounded-[.25rem] pt-[.85rem] pb-[1.85rem]">
                <h1 className=" text-[1.2rem] font-black">OUTPUT {i}</h1>
                <div className=" mt-[1.35rem] flex flex-col gap-y-[1.35rem]">
                  <div className=" flex flex-col gap-y-1 items-center">
                    <h2 className=" text-[#868686] text-[2rem] font-black">
                      320
                    </h2>
                    <p className="  text-[.8rem] font-bold">Step Per Second</p>
                  </div>
                  <div className=" flex flex-col gap-y-1 items-center">
                    <h2 className=" text-[#868686] text-[2rem] font-black">
                      320
                    </h2>
                    <p className="  text-[.8rem] font-bold">Numbers of Turns</p>
                  </div>
                  <div className=" flex flex-col gap-y-1 items-center">
                    <h2 className=" text-[#868686] text-[2rem] font-black">
                      320
                    </h2>
                    <p className="  text-[.8rem] font-bold">ml per kg</p>
                  </div>
                </div>
                <div className=" flex flex-col items-center gap-y-3 mt-auto">
                  {" "}
                  <Switch defaultChecked />
                  <p className=" text-[.8rem] font-bold">Flush</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default PumpSetup;
