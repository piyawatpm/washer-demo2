import axios from "axios";
import useSWR from "swr";
export type PresetType =  {
  // for case add new if "F" = edit preset
  isNew?:boolean
  presetId: string;
  isFlush: "T" | "F";
  isTrigger: "T" | "F";
  sequenceData: {
    pumpId: string | null;
    order: number;
    inputId: string | null;
    inputName: string | null;
    pumpNumber: number | null;
    delay: number;
    ml: number;
  }[];
}
type PresetData =PresetType[];

export function usePreset() {
  const getMockData = async (url: string) => {
    return [
      {
        presetId: "1",
        isFlush: "T",
        isTrigger: "F",
        sequenceData: [
          {
            pumpId: "1",
            order: 1,
            inputId: "1",
            inputName: "Detergent",
            pumpNumber: 1,
            delay: 2,
            ml: 0,
          },
          {
            pumpId: "2",
            order: 2,
            inputId: "2",
            inputName: "Softener",
            pumpNumber: 2,
            delay: 0,
            ml: 1,
          },
          {
            pumpId: "3",
            order: 3,
            inputId: "3",
            inputName: "Detergent",
            pumpNumber: 3,
            delay: 0,
            ml: 2,
          },
          {
            pumpId: "4",
            order: 4,
            inputId: "4",
            inputName: "INPUT 4",
            pumpNumber: 4,
            delay: 5,
            ml: 3,
          },
          {
            pumpId: "5",
            order: 5,
            inputId: "5",
            inputName: "INPUT 5",
            pumpNumber: 5,
            delay: 0,
            ml: 4,
          },
          {
            pumpId: "6",
            order: 6,
            inputId: "6",
            inputName: "INPUT 6",
            pumpNumber: 6,
            delay: 5,
            ml: 5,
          },
          {
            pumpId: null,
            order: 7,
            inputId: null,
            inputName: null,
            pumpNumber: null,
            delay: 0,
            ml: 6,
          },
          {
            pumpId: null,
            order: 8,
            inputId: null,
            inputName: null,
            pumpNumber: null,
            delay: null,
            ml: null,
          },
          {
            pumpId: null,
            order: 9,
            inputId: null,
            inputName: null,
            pumpNumber: null,
            delay: null,
            ml: null,
          },
          {
            pumpId: null,
            order: 10,
            inputId: null,
            inputName: null,
            pumpNumber: null,
            delay: 0,
            ml: 9,
          },
        ],
      },
    ] as PresetData;
  };

  const fetcher = async (url: string) => {
    return await axios
      .get(url)
      .then((res) => res.data)
      .catch((error) => {
        console.log(error)
        console.log('use mock data')
        return getMockData(url);
      });
  };

  return useSWR<PresetData>("/api/v1/preset", fetcher);
}
