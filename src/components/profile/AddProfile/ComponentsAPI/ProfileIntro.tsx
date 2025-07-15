import type { NavigationProps } from "../../../../types/action";
import { profileIntroSupport } from "../../../../utility/componentsApiEnhanceProfile/profileIntroData";
import ProfileController from "./controller/ProfileController";


export default function  ProfileIntro({ goToNext, goToPrev, hasNext, hasPrev }: NavigationProps) {
  return (
    <ProfileController formStructure={profileIntroSupport} title={"Add Profile intro"} keyMessage={"profileIntro"}  goToNext={goToNext} goToPrev={goToPrev} hasNext={hasNext} hasPrev={hasPrev}/>
  )
}




