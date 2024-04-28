import { researchTopicList, userList } from "@/dummy/menu-data"
import { useUserMode } from "./useMode"


export const useMenuData=(searchValue:string)=>{
const {userMode}=useUserMode()
let result=userMode?userList:researchTopicList
return result

}