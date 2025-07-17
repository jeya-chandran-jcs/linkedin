import { createContext } from "react";
import type { MockDataProps } from "../../types/mockDataApi";


export const HomeContext=createContext<{homeData:MockDataProps[]}>({
    homeData:[]
})
