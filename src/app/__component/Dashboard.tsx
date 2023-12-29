import Image from "next/image";
const Dashboard = () => {
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
                className="  py-2 w-[10rem] font-bold rounded-[.25rem] bg-[#F5F5F5] text-black flex items-center justify-center"
              >
                {e}
              </div>
            );
          })}
        </div>
        <div className=" flex gap-x-4">
          <div className=" w-[7.2rem]  h-[7.2rem] flex items-center justify-center p-4 bg-[#F5F5F5] rounded-full">
            <div className=" w-full h-full bg-[#06DE1C] rounded-full text-base font-bold flex items-center justify-center">
              <p>START</p>
            </div>
          </div>
          <div className=" w-[7.2rem]  h-[7.2rem] flex items-center justify-center p-4 bg-[#F5F5F5] rounded-full">
            <div className=" w-full h-full bg-[#F00] rounded-full text-base font-bold flex items-center justify-center">
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
                  <div className=" py-2 w-[10rem] font-bold rounded-[.25rem] bg-[#F5F5F5] text-black flex items-center justify-center">
                    {e}
                  </div>
                  <Image
                    className=""
                    src="/pump.png"
                    alt="pump"
                    width={71}
                    height={71}
                    priority
                  />
                </div>
              );
            }
          )}
        </div>
      </div>
      <div className=" flex flex-col gap-y-[.85rem]">
        <h1 className="heading">FLUID LEVEL</h1>
        <div className=" flex gap-x-2">
          {["PUMP 1", "PUMP 2", "PUMP 3", "PUMP 4", "PUMP 5", "PUMP 6"].map(
            (e, index) => {
              return (
                <div
                  key={index}
                  className={`${
                    index % 2 == 0 ? "bg-[#FF0404]" : "bg-[#06DE1C]"
                  } py-2 w-[10rem] gap-y-2 text-white flex-col  font-bold rounded-[.25rem] bg-[#F5F5F5] flex items-center justify-center`}
                >
                  <p>{e}</p>
                  <p>FULL</p>
                </div>
              );
            }
          )}
        </div>
      </div>
      <div className=" flex flex-col gap-y-[.85rem]">
        <h1 className=" heading">WASH CYCLE</h1>
        <div className=" flex gap-x-2">
          {[
            { tpye: "daily", value: 6 },
            { tpye: "weekly", value: 36 },
            { tpye: "monthly", value: 114 },
          ].map((e, index) => {
            return (
              <div
                key={index}
                className={` py-2 w-[10rem] gap-y-2 text-black flex-col  font-bold rounded-[.25rem] bg-[#F5F5F5] flex items-center justify-center`}
              >
                <p className=" uppercase">{e.tpye}</p>
                <p>{index}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
