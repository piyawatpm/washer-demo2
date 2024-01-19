import axios from "axios";
import useSWR from "swr";
export type FlushType = {
  isOn:"T" |"F"
  firstTriggerTime:number
  secondTriggerTime:number
}
export type TriggerType={
  isOn:"T" |"F"
  firstTriggerTime:number
  secondTriggerTime:number
}
export type SolenoidData = {
 flush:FlushType
 trigger:TriggerType
};
export function useSolenoid() {
  const getMockData = async (url: string) => {
    return {
        flush: {
            isOn: "T",
            firstTriggerTime: 1,
            secondTriggerTime: 2
        },
        trigger: {
            isOn: "T",
            firstTriggerTime: 1,
            secondTriggerTime: 2
        }
    }as SolenoidData;
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

  console.log("call");
  return useSWR<SolenoidData>("/api/v1/solenoid", fetcher);
}
