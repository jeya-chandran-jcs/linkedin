import { auth } from "../config/google"
import type { MockDataProps } from "../types/mockDataApi"


export default function getCurrentUserId(data:MockDataProps[]) {
    const myUid=auth.currentUser?.uid
    const user=data.find((user:MockDataProps)=>user.uid===myUid)
    return user
}
