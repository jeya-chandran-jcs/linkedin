import FormController from './controller/FromController'
import { courseData } from '../../../../utility/componentsApiEnhanceProfile/courseData'
import type { NavigationProps } from '../../../../types/action'

export default function CoursesAdd({ goToNext, goToPrev, hasNext, hasPrev }: NavigationProps) {
  return (
    <FormController formStructure={courseData} title={"Add Course"} keyMessage={"course"} 
      goToNext={goToNext} goToPrev={goToPrev} hasNext={hasNext} hasPrev={hasPrev}
    />
  )
}
