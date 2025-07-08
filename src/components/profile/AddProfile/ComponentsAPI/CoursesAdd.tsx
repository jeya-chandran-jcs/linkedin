import FormController from './FromController'
import { courseData } from '../../../../utility/componentsApiEnhanceProfile/courseData'

export default function CoursesAdd() {
  return (
    <FormController formStructure={courseData} title={"Add Course"}/>
  )
}
