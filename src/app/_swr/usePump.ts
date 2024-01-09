import axios from "axios";
import useSWR from "swr";
export type PumpData = {
  pumpId: string;
  inputId: string;
  inputName: string;
  pumpNumber: number;
  isFlush: boolean;
  stepPerSecond: number;
  stepPerMl: number;
  mlPerKg: number;
  pumpName: string;
};
export type PumpApiData = PumpData[];

export function usePump() {
  const getMockData = async (url: string) => {
    return [
      {
        pumpId: "1",
        inputId: "1",
        inputName: "Detergent",
        pumpNumber: 1,
        isFlush: true,
        stepPerSecond: 320,
        stepPerMl: 320,
        mlPerKg: 1,
        pumpName: "p name 1",
      },
      {
        pumpId: "2",
        inputId: "2",
        inputName: "Softener",
        pumpNumber: 2,
        isFlush: true,
        stepPerSecond: 320,
        stepPerMl: 320,
        mlPerKg: 2,
        pumpName: "p name 2",
      },
      {
        pumpId: "3",
        inputId: "3",
        inputName: "Detergent",
        pumpNumber: 3,
        isFlush: false,
        stepPerSecond: 320,
        stepPerMl: 320,
        mlPerKg: 3,
        pumpName: "p name 3",
      },
      {
        pumpId: "4",
        inputId: "4",
        inputName: "INPUT 4",
        pumpNumber: 4,
        isFlush: true,
        stepPerSecond: 320,
        stepPerMl: 320,
        mlPerKg: 4,
        pumpName: "p name 4",
      },
      {
        pumpId: "5",
        inputId: "5",
        inputName: "INPUT 5",
        pumpNumber: 5,
        isFlush: false,
        stepPerSecond: 320,
        stepPerMl: 320,
        mlPerKg: 5,
        pumpName: "pump name 5",
      },
      {
        pumpId: "6",
        inputId: "6",
        inputName: "INPUT 6",
        pumpNumber: 6,
        isFlush: true,
        stepPerSecond: 320,
        stepPerMl: 320,
        mlPerKg: 6,
        pumpName: "pump name 6",
      },
    ] as PumpApiData;
  };

  const fetcher = async (url: string) => {
    return axios
      .get(url)
      .then((res) => res.data)
      .catch((error) => {
        return getMockData(url);
      });
  };

  console.log("call");
  return useSWR<PumpApiData>("/api/v1/pump", fetcher);
}
