import { useState } from "react";
import { SlArrowDown, SlArrowRight } from "react-icons/sl";

interface ObjectLineInfo {
  name: string;
  data: string | number | boolean;
  isFinal?: boolean;
}

export interface ObjectLineDataParams {
  objectLineInfo: ObjectLineInfo[];
  objectName?: string;
  isObject: boolean;
}

export const ObjectLine = ({
  objectLineInfo,
  isObject,
  objectName,
}: ObjectLineDataParams) => {
  const [handleInformations, setHandleInformations] = useState(false);

  return (
    <div>
      {isObject && (
        <p className="text-2xl">
          <span className="relative group">
            {handleInformations ? (
              <SlArrowDown
                onClick={() => setHandleInformations(!handleInformations)}
                className="absolute opacity-0 left-[-45px] top-1.5 text-lg text-[#F8F8F2] group-hover:opacity-100 transition-all delay-100 cursor-pointer"
              />
            ) : (
              <SlArrowRight
                onClick={() => setHandleInformations(!handleInformations)}
                className="absolute opacity-0 left-[-45px] top-1.5 text-lg text-[#F8F8F2] group-hover:opacity-100 transition-all delay-100 cursor-pointer"
              />
            )}
          </span>
          <span className="text-[#F8F8F2] group">{objectName}: </span>
          <span className="text-[#FF6E9D]">
            {"["}
            <br />
          </span>
          {handleInformations && (
            <div>
              {objectLineInfo.map((info) => (
                <div className="flex">
                  <div className="w-5 bg-[#2E393B] border-l border-l-[#6B7873]"></div>
                  <div>
                    <span className="text-[#79E9FD]">
                      {"{"}
                      <br />
                    </span>
                    <div className="flex">
                      <div className="w-5 bg-[#373044] border-l border-l-[#6B7873]"></div>
                      <div>
                        <span className="text-[#F8F8F2]">{info.name}</span>
                        <span className="text-[#FF6E9D]">:</span>
                        {typeof info.data === "string" && (
                          <span className="text-[#E9F270]"> "{info.data}"</span>
                        )}
                        {typeof info.data === "number" && (
                          <span className="text-[#BD93F9]"> {info.data}</span>
                        )}
                        {typeof info.data === "boolean" && (
                          <span className="text-[#BD93F9]">
                            {info.data ? " true" : " false"}
                          </span>
                        )}
                        {!info.isFinal ? (
                          <span className="text-[#F8F8F2]">
                            , <br />
                          </span>
                        ) : (
                          <br />
                        )}
                      </div>
                    </div>
                    <span className="text-[#79E9FD]">{"}"}</span>
                    <span className="text-[#F8F8F2]">
                      , <br />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
          <span className="text-[#FF6E9D]">{"]"}</span>
        </p>
      )}
      {!isObject && (
        <p className="text-2xl">
          {objectLineInfo.map((info) => (
            <div>
              <span className="text-[#F8F8F2]">{info.name}</span>
              <span className="text-[#FF6E9D]">:</span>
              {typeof info.data === "string" && (
                <span className="text-[#E9F270]"> "{info.data}"</span>
              )}
              {typeof info.data === "number" && (
                <span className="text-[#BD93F9]"> {info.data}</span>
              )}
              {typeof info.data === "boolean" && (
                <span className="text-[#BD93F9]">
                  {info.data ? " true" : " false"}
                </span>
              )}
              {!info.isFinal ? (
                <span className="text-[#F8F8F2]">
                  , <br />
                </span>
              ) : (
                <br />
              )}
            </div>
          ))}
        </p>
      )}
    </div>
  );
};
