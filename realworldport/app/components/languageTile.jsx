"use client";

function LanguageTile({ name, bgColor, textColor }) {
  return (
    // <button style={{ borderColor: bgColor, color: textColor }} className={`font-normal border-baseGray bg-darkBlue p-1 border-[1px] rounded-md hover:scale-95 duration-100 mr-2 mt-2 shadow-lg`}>
    //     {name}
    // </button>
    <button className={`font-normal text-white border-black bg-blue-700 p-1 border-[1px] rounded-md hover:scale-95 duration-100 mr-2 mt-2 shadow-lg`}>
        {name}
    </button>
    // <div style={{ borderColor: bgColor }} className="ml-2 p-2 min-w-32 h-24 flex items-end rounded-lg border-[1px] hover:scale-95 duration-100">
    //   <button
    //     style={{  color: textColor }}
    //     className={`font-normal rounded-md mr-2 mt-2 shadow-lg`}
    //   >
    //     {name}
    //   </button>
    // </div>
  );
}

export default LanguageTile;
