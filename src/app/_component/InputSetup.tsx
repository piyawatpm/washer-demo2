import { Modal } from "antd";

import { useState } from "react";
import { useStatus } from "../_swr/useStatus";

const InputSetup = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string>("");
  const { data } = useStatus(false);
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedId("");
  };
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleEditInput = async (id: string) => {
    // call post edit api here
  };
  return (
    <div className=" w-full h-[1000px]  flex flex-col text-base gap-y-[4.75rem]">
      <Modal
        title=""
        open={isModalOpen}
        // onOk={handleOk}
        closeIcon={null}
        // style={{ backgroundColor: 'transparent' }}
        centered
        footer={null}
        // onCancel={handleCancel}
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
                placeholder="DETERGENT"
                className=" w-full pl-[1.65rem] py-4 bg-[#D9D9D9]"
              />
            </div>
            <div className=" flex flex-col  w-full gap-y-3">
              <p className=" text-[1.2rem]">ml per kg</p>
              <input
                type="text"
                placeholder={"1"}
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
                handleEditInput(selectedId);
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
          {data?.inputStatus.map(
            (input: { status: string; inputName: string; inputId: string }) => {
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
                    <p className=" font-bold text-[1.2rem]">ml per kg</p>
                    <div
                      className={`  py-2 bg-[#F5F5F5] text-black w-[10rem] font-medium rounded-[.25rem]  flex flex-col items-center justify-center`}
                    >
                      <p>{1}</p>
                    </div>
                  </div>
                  <button
                    onClick={handleOpenModal}
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
            }
          )}
        </div>
      </div>
    </div>
  );
};
export default InputSetup;
