import axios from "axios";
import useSWR from "swr";
import { InputType } from "./useInput";

export type WashCycleType= {
  daily: number;
  weekly: number;
  monthly: number;
}
export type PumpStatusType={
  pumpId: string;
  pumpName: string;
  status: string;
}
export type FluidLevelType={
  pumpId: string;
  pumpName: string;
  status: string;
}
type StatusData = {
  status: string;
  inputStatus: InputType[];
  pumpStatus: PumpStatusType[];
  fluidLevel: FluidLevelType[];
  washCycle:WashCycleType;
};
export function useStatus(isRevalidate: boolean) {
  const getMockData = async (url: string) => {
    return {
      status: "start",
      inputStatus: [
        {
          inputId: "1",
          inputName: "Detergent",
          status: "active",
          inputMl: 1,
        },
        {
          inputId: "2",
          inputName: "Softener",
          status: "inactive",
          inputMl: 1,
        },
        {
          inputId: "3",
          inputName: "Detergent",
          status: "active",
          inputMl: 1,
        },
        {
          inputId: "4",
          inputName: "INPUT 4",
          status: "inactive",
          inputMl: 2,
        },
        {
          inputId: "5",
          inputName: "INPUT 5",
          status: "inactive",
          inputMl: 1,
        },
        {
          inputId: "6",
          inputName: "INPUT 6",
          status: "inactive",
          inputMl: 1,
        },
      ],
      pumpStatus: [
        {
          pumpId: "1",
          pumpName: "PUMP 1",
          status: "active",
        },
        {
          pumpId: "2",
          pumpName: "PUMP 2",
          status: "inactive",
        },
        {
          pumpId: "3",
          pumpName: "PUMP 3",
          status: "active",
        },
        {
          pumpId: "4",
          pumpName: "PUMP 4",
          status: "inactive",
        },
        {
          pumpId: "5",
          pumpName: "PUMP 5",
          status: "inactive",
        },
        {
          pumpId: "6",
          pumpName: "PUMP 6",
          status: "inactive",
        },
      ],
      fluidLevel: [
        {
          pumpId: "1",
          pumpName: "PUMP 1",
          status: "HIGH",
        },
        {
          pumpId: "2",
          pumpName: "PUMP 2",
          status: "LOW",
        },
        {
          pumpId: "3",
          pumpName: "PUMP 3",
          status: "HIGH",
        },
        {
          pumpId: "4",
          pumpName: "PUMP 4",
          status: "HIGH",
        },
        {
          pumpId: "5",
          pumpName: "PUMP 5",
          status: "LOW",
        },
        {
          pumpId: "6",
          pumpName: "PUMP 6",
          status: "HIGH",
        },
      ],
      washCycle: {
        daily: 6,
        weekly: 36,
        monthly: 144,
      },
    } as StatusData;
  };

  const fetcher = async (url: string) => {
    return await axios
      .get(url)
      .then((res) => res.data)
      .catch((error) => {
        console.log('use mock data')
        console.log(error)
        return getMockData(url);
      });
  };

  console.log("call");
  return useSWR<StatusData>("/api/v1/status", fetcher, {
    refreshInterval: isRevalidate ? 1000 : 0,
  });
}
