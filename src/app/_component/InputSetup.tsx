import { Modal } from "antd";

import { useState } from "react";
import { InputType, useStatus } from "../_swr/useStatus";
import axios from "axios";
import { useInput } from "../_swr/useInput";

const InputSetup = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const initialInput = {
    inputName: "",
    inputMl: 0,
    inputId: null,
  };
  const [seletedInput, setSelectedInput] = useState<InputType>(initialInput);
  const { data } = useInput();

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedInput(initialInput);
  };
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleEditInput = async (inputData: InputType) => {
    // call post edit api here
    try {
      const res = await axios.post(
        `/api/v1/input/${inputData.inputId}`,
        inputData
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
    handleCloseModal();
  };
  return (
    <div className=" w-full h-[1000px]  flex flex-col text-base gap-y-[4.75rem]">
      <Modal
        title=""
        open={isModalOpen}
        closeIcon={null}
        centered
        footer={null}
        className=" !w-[75rem] !"
        closable={false}
        onCancel={handleCloseModal}
        bodyStyle={{ height: "100%" }}
      >
        <div className=" flex h-full w-full flex-col items-center justify-center  gap-y-[1.35rem] py-5 ">
          <div className=" w-full flex items-center text-base font-bold px-[7.3rem] flex-col gap-y-10 ">
            <div className=" flex flex-col  w-full gap-y-3">
              <p className=" text-[1.2rem]">Input Name</p>
              <input
                type="text"
                value={seletedInput.inputName}
                onChange={(e) => {
                  setSelectedInput((p) => {
                    return { ...p, inputName: e.target.value };
                  });
                }}
                className=" w-full pl-[1.65rem] py-4 bg-[#D9D9D9]"
              />
            </div>
            <div className=" flex flex-col  w-full gap-y-3">
              <p className=" text-[1.2rem]">ml</p>
              <input
                type="number"
                value={seletedInput.inputMl}
                onChange={(e) => {
                  setSelectedInput((p) => {
                    return {
                      ...p,
                      inputMl: Number(e.target.value),
                    } as InputType;
                  });
                }}
                className=" w-full pl-[1.65rem] py-4 bg-[#D9D9D9]"
              />
            </div>
          </div>
          <div className=" flex items-center text-[1.4rem] font-bold text-white w-full justify-center gap-x-[9rem] mt-[2.45rem]">
            <button
              onClick={handleCloseModal}
              className=" w-[8rem] h-[3.2rem] bg-black "
            >
              CANCEL
            </button>
            <button
              onClick={() => {
                handleEditInput(seletedInput);
              }}
              className=" w-[8rem] h-[3.2rem] bg-black "
            >
              OK
            </button>
          </div>
        </div>
      </Modal>
      <div className=" flex flex-col gap-y-[.85rem]">
        <h1 className=" heading">INPUT SETUP</h1>
        <div className=" flex gap-x-2">
          {data?.map((input: InputType) => {
            return (
              <div
                key={input.inputId}
                className=" flex flex-col items-center gap-y-5"
              >
                <div className=" flex flex-col items-center gap-y-2">
                  {" "}
                  <p className=" font-bold text-[1.2rem]">Input name</p>
                  <div
                    className={`  py-2 bg-[#F5F5F5] text-black w-[10rem] font-medium rounded-[.25rem]  flex flex-col items-center justify-center`}
                  >
                    <p>{input.inputName}</p>
                  </div>
                </div>
                <div className=" flex flex-col items-center gap-y-2">
                  <p className=" font-bold text-[1.2rem]">ml</p>
                  <div
                    className={`  py-2 bg-[#F5F5F5] text-black w-[10rem] font-medium rounded-[.25rem]  flex flex-col items-center justify-center`}
                  >
                    <p>{input.inputMl}</p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    handleOpenModal();
                    setSelectedInput(input);
                  }}
                  className=" cursor-pointer gap-x-[.3rem] py-2 w-[10rem] font-bold rounded-[.25rem] button-primary text-black flex items-center justify-center"
                >
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
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default InputSetup;
