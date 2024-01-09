import axios from "axios";
import useSWR from "swr";
export type SolenoidData = {
 flush:{
    isOn:boolean
    firstTriggerTime:number
    secondTriggerTime:number
 }
 trigger:{
    isOn:boolean
    firstTriggerTime:number
    secondTriggerTime:number
 }
};
export function useSolenoid() {
  const getMockData = async (url: string) => {
    return {
        flush: {
            isOn: true,
            firstTriggerTime: 1,
            secondTriggerTime: 2
        },
        trigger: {
            isOn: true,
            firstTriggerTime: 1,
            secondTriggerTime: 2
        }
    }as SolenoidData;
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
  return useSWR<SolenoidData>("/api/v1/status", fetcher);
}
