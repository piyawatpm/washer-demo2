import { Modal, Select, Switch } from "antd";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { v4 } from "uuid";

import { usePump } from "../_swr/usePump";
import { PresetType, usePreset } from "../_swr/usePreset";
import axios from "axios";

const PresetSetup = () => {
  const [editIds, setEditIds] = useState<string[]>([]);
  const initialPreset = {
    presetId: "1",
    isFlush: false,
    isTrigger: false,
    sequenceData: [
      {
        pumpId: null,
        order: 1,
        inputId: null,
        inputName: null,
        pumpNumber: null,
        delay: 0,
        ml: 0,
      },
      {
        pumpId: null,
        order: 2,
        inputId: null,
        inputName: null,
        pumpNumber: null,
        delay: 0,
        ml: 0,
      },
      {
        pumpId: null,
        order: 3,
        inputId: null,
        inputName: null,
        pumpNumber: null,
        delay: 0,
        ml: 0,
      },
      {
        pumpId: null,
        order: 4,
        inputId: null,
        inputName: null,
        pumpNumber: null,
        delay: 0,
        ml: 0,
      },
      {
        pumpId: null,
        order: 5,
        inputId: null,
        inputName: null,
        pumpNumber: null,
        delay: 0,
        ml: 0,
      },
      {
        pumpId: null,
        order: 6,
        inputId: null,
        inputName: null,
        pumpNumber: null,
        delay: 0,
        ml: 0,
      },
      {
        pumpId: null,
        order: 7,
        inputId: null,
        inputName: null,
        pumpNumber: null,
        delay: 0,
        ml: 0,
      },
      {
        pumpId: null,
        order: 8,
        inputId: null,
        inputName: null,
        pumpNumber: null,
        delay: 0,
        ml: 0,
      },
      {
        pumpId: null,
        order: 9,
        inputId: null,
        inputName: null,
        pumpNumber: null,
        delay: 0,
        ml: 0,
      },
      {
        pumpId: null,
        order: 10,
        inputId: null,
        inputName: null,
        pumpNumber: null,
        delay: 0,
        ml: 0,
      },
    ],
  };
  const [presets, setPresets] = useState<PresetType[]>([initialPreset]);
  const { data: presetData } = usePreset();
  const { data: pumpData } = usePump();

  const filterOption = (
    input: string,
    option?: { label: string; value: string }
  ) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());
  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value: string) => {
    console.log("search:", value);
  };
  const inputOption = useMemo(() => {
    console.log(pumpData);
    if (pumpData) {
      console.log(pumpData);
      const output = pumpData.map((pump) => {
        return {
          value: pump.pumpId,
          label: `${pump.pumpName} - ${pump.inputName}`,
        };
      });
      output.push({
        value: "",
        label: `None`,
      });
      console.log(output);
      return output;
    }
  }, [pumpData]);
  useEffect(() => {
    if (presetData) {
      setPresets(presetData);
    }
  }, [presetData]);
  const handleAddPreset = () => {
    setPresets((p) => {
      return [...p, { ...initialPreset, presetId: v4(), isNew: true }];
    });
  };
  const handleAddNewPreset = async (presetData: PresetType) => {
    try {
      const res = await axios.post("/api/v1/preset", presetData);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  const handleEditPreset = async (presetData: PresetType) => {
    try {
      const res = await axios.post(
        `/api/v1/preset/${presetData.presetId}`,
        presetData
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  const handleRemovePreset = async (presetData: PresetType) => {
    if (presetData.isNew) {
      setPresets((p) =>
        p.filter((preset) => preset.presetId !== presetData.presetId)
      );
    } else {
      try {
        const res = axios.delete(`/api/v1/preset/${presetData.presetId}`);
      } catch (error) {}
      setPresets((p) =>
        p.filter((preset) => preset.presetId !== presetData.presetId)
      );
    }
  };
  return (
    <div className=" w-full h-[1000px]  flex flex-col text-base gap-y-[4.75rem]">
      <div className=" flex flex-col gap-y-[.85rem]">
        <h1 className=" heading">PRESET SETUP</h1>
        <div className=" flex flex-col gap-y-5 w-full">
          {presets?.map((preset, i) => {
            return (
              <div key={preset.presetId} className=" flex flex-col">
                <div className=" bg-[#F5F5F5] w-full p-[1.35rem] flex items-center justify-between">
                  <div className=" flex flex-col gap-y-5">
                    <p className=" text-[1.25rem] text-[#868686] font-black">
                      Sheets
                    </p>
                    {editIds.includes(preset.presetId) ? (
                      <>
                        <button
                          onClick={() => {
                            if (preset.isNew) {
                              handleAddNewPreset(preset);
                            } else {
                              handleEditPreset(preset);
                            }
                          }}
                          className={` !bg-green-500 !text-white  cursor-pointer gap-x-[.3rem] py-2 w-[10rem] font-bold rounded-[.25rem] button-primary flex items-center justify-center`}
                        >
                          {" "}
                          <p>Save</p>
                        </button>
                        <button
                          onClick={() => {
                            setEditIds((p) =>
                              p.filter((id) => id !== preset.presetId)
                            );
                          }}
                          className={`  cursor-pointer gap-x-[.3rem] py-2 w-[10rem] font-bold rounded-[.25rem] button-primary text-black flex items-center justify-center`}
                        >
                          <p>Cancel</p>
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => {
                          setEditIds((p) => [...p, preset.presetId]);
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
                    )}
                  </div>
                  <div className=" flex gap-x-2 overflow-scroll p-5 ">
                    {preset?.sequenceData?.map((sequence, i) => {
                      return (
                        <div
                          key={i}
                          className="  text-[1rem]  w-[12em] font-black flex flex-col items-center justify-center gap-y-4"
                        >
                          <div className="  w-full flex flex-col items-center justify-center gap-y-1">
                            <p>SEQUENCE {sequence.order}</p>
                            <Select
                              className=" preset !w-full !font-bold rounded-[.25rem] !bg-[#F5F5F5] text-black flex items-center justify-center"
                              defaultValue={
                                inputOption?.find(
                                  (e) => e.value === sequence.pumpId
                                )?.label ?? ""
                              }
                              style={{ width: 120 }}
                              onChange={onChange}
                              showSearch
                              onSearch={onSearch}
                              filterOption={filterOption}
                              options={inputOption}
                            />
                            <p>ACTION</p>
                          </div>
                          <div className=" flex flex-col items-center justify-center gap-y-1">
                            <input
                              value={sequence.delay}
                              className=" text-center py-1 border px-4 border-black w-full"
                            ></input>
                            <p>DEALAY</p>
                          </div>
                          <div className=" flex flex-col items-center justify-center gap-y-1">
                            <input
                              value={sequence.ml}
                              className=" text-center py-1 border px-4 border-black w-full"
                            ></input>
                            <p>ML</p>
                          </div>
                        </div>
                      );
                    })}
                    <div className=" flex items-center gap-y-5"></div>
                  </div>
                  <div className=" flex items-center gap-x-5 text-[1.2rem] font-black">
                    <div className=" flex flex-col items-center gap-y-2">
                      <p>FLUSH</p>
                      <Switch checked={preset.isFlush} />
                    </div>
                    <div className=" flex flex-col items-center gap-y-2">
                      <p>TRIGGER</p>
                      <Switch checked={preset.isTrigger} />
                    </div>
                  </div>
                </div>
                <div
                  onClick={() => {
                    handleRemovePreset(preset);
                  }}
                  className=" w-full flex items-center justify-center bg-red-500 font-bold py-3 text-white cursor-pointer "
                >
                  <p>REMOVE</p>
                </div>
              </div>
            );
          })}
        </div>
        <div
          onClick={() => {
            handleAddPreset();
          }}
          className=" hover:border cursor-pointer h-[13rem] w-full bg-[#F5F5F5] flex items-center justify-center gap-x-4"
        >
          <Image
            className=""
            src="/add.png"
            alt="Next.js Logo"
            width={50}
            height={50}
            priority
          />
          <p className=" text-[#868686] text-[1.2rem] font-bold">ADD PRESET</p>
        </div>
      </div>
    </div>
  );
};
export default PresetSetup;
