import { useState } from "react";
import { SlArrowDown, SlArrowRight } from "react-icons/sl";
import { ObjectLine, type ObjectLineDataParams } from "../../ObjectLine";

export interface ObjectInfoParams {
  name: string,
  interfaceName: string,
  isArray: boolean,
  objectLineData: ObjectLineDataParams[]
}


export const ObjectInfo = ({name, interfaceName, isArray, objectLineData}:ObjectInfoParams) => {
  const [handleInformations, setHandleInformations] = useState(true);
  return (
    <>
        <div>
          <p className="text-2xl group">
            <span className="relative">
              {handleInformations ? (
                <SlArrowDown
                  onClick={() => setHandleInformations(!handleInformations)}
                  className="absolute opacity-0 left-[-25px] top-1.5 text-lg text-[#F8F8F2] group-hover:opacity-100 transition-all delay-100 cursor-pointer"
                />
              ) : (
                <SlArrowRight
                  onClick={() => setHandleInformations(!handleInformations)}
                  className="absolute opacity-0 left-[-25px] top-1.5 text-lg text-[#F8F8F2] group-hover:opacity-100 transition-all delay-100 cursor-pointer"
                />
              )}
            </span>
            <span className="text-[#FF6E9D]">const</span>
            <span className="text-[#BD93F9] lowercase"> {name}</span>
            <span className="text-[#FF6E9D]">:</span>
            <span className="text-[#79E9FD] capitalize">{interfaceName}</span>
            {isArray && <span className="text-[#F8F8F2]">{"[]"}</span>}
            <span className="text-[#FF6E9D]"> = </span>
            {isArray ? (
              <span className="text-[#F8F8F2]">{"["}</span>
            ) : (
              <span className="text-[#F8F8F2]"> {"{"} </span>
            )}
          </p>
          <div>
            {handleInformations && (
              <div className="flex">
                <div className="w-5 bg-[#373937] border-l border-l-[#6B7873]"></div>                
                <div className="w-1/2">
                  {objectLineData.map((info) => <ObjectLine objectLineInfo={info.objectLineInfo} isObject={info.isObject} objectName={info.objectName} />)}
                </div>
              </div>
            )}
          </div>
          <p className="text-2xl">
            {isArray ? (
              <span className="text-[#F8F8F2]">{"]"}</span>
            ) : (
              <span className="text-[#F8F8F2]"> {"}"} </span>
            )}
          </p>
        </div>
    </>
  );
};
