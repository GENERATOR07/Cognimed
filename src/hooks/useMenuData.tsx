import { researchTopicList, userList } from "@/dummy/menu-data"
import { useUserMode } from "./useMode"


export const useMenuData=(searchValue:string)=>{
const {userMode}=useUserMode()

let result
if(userMode)result=userList.filter(V=>V.name.toLowerCase().includes(searchValue.toLowerCase())|| searchValue===V.id.toString())
else result=researchTopicList.filter(v=>v.topic.toLowerCase().includes(searchValue.toLowerCase())|| searchValue===v.id.toString())
return result

}