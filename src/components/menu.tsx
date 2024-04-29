import { useMenuData } from "@/hooks/useMenuData";
import { useUserMode } from "@/hooks/useMode";
import React, { useState } from "react";
import UserList from "./user-list";
import { ResearchTopic, User } from "@/dummy/menu-data";
import ReasearchList from "./research-list";
import SearchBox from "./search-box";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";

export default function Menu() {
  const { userMode } = useUserMode();
  const [searchValue, setSearchValue] = useState<string>("");
  const [isCollapseable, setIsCollapseable] = useState<boolean>(true);
  const data = useMenuData(searchValue);
  const handelSearch = (value: string) => {
    setSearchValue(value);
  };
  let MenuWidth = isCollapseable ? "w-[300px]" : "w-[0px]";
  let MenuVisibility = isCollapseable ? "visible" : "invisible";

  const handelCollapse = () => {
    setIsCollapseable((pv) => !pv);
  };
  return (
    <div
      className={`bg-gray-950 flex flex-col ${MenuWidth} ${MenuVisibility} relative transition-all ease-linear delay-200`}
    >
      {isCollapseable ? (
        <>
          <SearchBox onSearch={handelSearch} value={searchValue} />
          {userMode ? (
            <UserList data={data as User[]} />
          ) : (
            <ReasearchList data={data as ResearchTopic[]} />
          )}
        </>
      ) : null}
      <button
        onClick={handelCollapse}
        className=" absolute right-[-10px] top-1/2 visible rounded-full border-gray-800 border-2"
      >
        {isCollapseable ? (
          <IoIosArrowDropleftCircle size={20} />
        ) : (
          <IoIosArrowDroprightCircle size={20} />
        )}
      </button>
    </div>
  );
}
