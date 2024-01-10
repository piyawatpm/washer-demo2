import { Switch } from "antd";
import { useEffect, useState } from "react";
import { SolenoidData, useSolenoid } from "../_swr/useSolenoid";
import axios from "axios";

const Solenoid = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [solenoid, setSolenoid] = useState<SolenoidData>({
    flush: {
      isOn: false,
      firstTriggerTime: 0,
      secondTriggerTime: 0,
    },
    trigger: {
      isOn: false,
      firstTriggerTime: 0,
      secondTriggerTime: 0,
    },
  });
  const { data: solenoidData } = useSolenoid();
  useEffect(() => {
    if (solenoidData) {
      setSolenoid(solenoidData);
    }
    console.log("solenoidData", solenoidData);
  }, [solenoidData]);
  const handleSaveSolenoid = async () => {
    try {
      const res = await axios.post("/api/v1/solenoid", solenoid);
    } catch (error) {
      console.log(error);
    }
  };
  const handleCancel = () => {
    console.log("call");
    if (solenoidData) {
      setSolenoid(solenoidData);
    }
    setIsEdit(false);
  };
  return (
    <div className=" w-full h-[1000px]  flex flex-col text-base gap-y-[2rem]">
      <h1 className="heading">SOLENOID</h1>
      <div className=" flex flex-col gap-y-16">
        <div className=" w-full flex items-center bg-[#F5F5F5] py-[1.65rem] px-[3.25rem]">
          <h1 className=" text-[2rem] text-[#868686] font-black w-[6rem] ">
            Flush
          </h1>
          <div className=" flex-1 pl-[10rem] flex items-center justify-between">
            <div className=" flex items-center gap-x-[1.65rem]">
              <p className=" text-[1.2rem] font-black">First Trigger Time</p>
              <input
                value={solenoid?.flush?.firstTriggerTime}
                type="number"
                onChange={(e) => {
                  // @ts-ignore
                  setSolenoid((p) => {
                    return {
                      ...p,
                      flush: { ...p?.flush, firstTriggerTime: e.target.value },
                    };
                  });
                }}
                className=" w-[10rem] h-[3.7rem] border px-4 border-black"
              ></input>
            </div>
            <div className=" flex items-center gap-x-[1.65rem]">
              <p className=" text-[1.2rem] font-black">Second Trigger Time</p>
              <input
                value={solenoid?.flush?.secondTriggerTime}
                type="number"
                onChange={(e) => {
                  // @ts-ignore
                  setSolenoid((p) => {
                    return {
                      ...p,
                      flush: { ...p?.flush, secondTriggerTime: e.target.value },
                    };
                  });
                }}
                className=" w-[10rem] h-[3.7rem] border px-4 border-black"
              ></input>
            </div>
            <Switch
              checked={solenoid?.flush?.isOn}
              onChange={(e) =>
                setSolenoid((p) => {
                  return { ...p, flush: { ...p?.flush, isOn: e } };
                })
              }
            />
          </div>
        </div>
        <div className=" w-full flex items-center bg-[#F5F5F5] py-[1.65rem] px-[3.25rem]">
          <h1 className=" text-[2rem] text-[#868686] font-black w-[6rem] ">
            Trigger
          </h1>
          <div className=" flex-1 pl-[10rem] flex items-center justify-between">
            <div className=" flex items-center gap-x-[1.65rem]">
              <p className=" text-[1.2rem] font-black">First Trigger Time</p>
              <input
                value={solenoid?.trigger?.firstTriggerTime}
                type="number"
                onChange={(e) => {
                  // @ts-ignore
                  setSolenoid((p) => {
                    return {
                      ...p,
                      trigger: {
                        ...p?.trigger,
                        firstTriggerTime: e.target.value,
                      },
                    };
                  });
                }}
                className=" w-[10rem] h-[3.7rem] border px-4 border-black"
              ></input>
            </div>
            <div className=" flex items-center gap-x-[1.65rem]">
              <p className=" text-[1.2rem] font-black">Second Trigger Time</p>
              <input
                value={solenoid?.trigger?.firstTriggerTime}
                type="number"
                onChange={(e) => {
                  // @ts-ignore
                  setSolenoid((p) => {
                    return {
                      ...p,
                      trigger: {
                        ...p?.trigger,
                        firstTriggerTime: e.target.value,
                      },
                    };
                  });
                }}
                className=" w-[10rem] h-[3.7rem] border px-4 border-black"
              ></input>
            </div>
            <Switch
              checked={solenoid?.trigger?.isOn}
              onChange={(e) =>
                setSolenoid((p) => {
                  return { ...p, trigger: { ...p?.trigger, isOn: e } };
                })
              }
            />
          </div>
        </div>
      </div>
      <div className=" flex gap-x-5">
        {!isEdit ? (
          <button
            onClick={() => {
              setIsEdit((p) => !p);
            }}
            className={` cursor-pointer gap-x-[.3rem] py-2 w-[10rem] font-bold rounded-[.25rem] button-primary text-black flex items-center justify-center`}
          >
            {" "}
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
          </button>
        ) : (
          <>
            <button
              onClick={handleSaveSolenoid}
              className={` !bg-green-500 !text-white  cursor-pointer gap-x-[.3rem] py-2 w-[10rem] font-bold rounded-[.25rem] button-primary flex items-center justify-center`}
            >
              {" "}
              <p>Save</p>
            </button>
            <button
              onClick={handleCancel}
              className={`  cursor-pointer gap-x-[.3rem] py-2 w-[10rem] font-bold rounded-[.25rem] button-primary text-black flex items-center justify-center`}
            >
              <p>Cancel</p>
            </button>
          </>
        )}
      </div>
    </div>
  );
};
export default Solenoid;
