import React, { useCallback, useState } from "react";

export default function InfoInput({ setNames }) {
  const [txt, setTxt] = useState("");

  const onChange = (e) => {
    console.log(e.target.value, "value");
    setTxt(e.target.value);
  };
  const onClick = () => {
    setNames((prev) => [...prev, txt]);
    setTxt("");
  };

  const isDisabled = useCallback(() => {
    if (txt.trim() !== "") {
      console.log("enter over here too");
      return false;
    }
    return true;
  }, [txt]);

  return (
    <div className="text-center py-5 mb-10 pb-5">
      {/* <div className='border'> className='border border-blue-500 rounded-lg' */}
      <textarea
        type="text"
        placeholder="fill the list..."
        className="border border-blue-500 rounded-lg p-1"
        value={txt}
        onChange={onChange}
      />
      {/* </div> */}
      {/* <div> className='dark:md:hover:bg-fuchsia-600 rounded-lg bg-purple-500 p-3' */}
      {isDisabled() ? (
        <div className="dark:md:hover:bg-gray-500 bg-gray-600 rounded-lg inline-block pl-2 ml-2 pr-2 phone:text-lg ">
          <button disabled={true} onClick={onClick}>
            shoot
          </button>
        </div>
      ) : (
        <div className="dark:md:hover:bg-lime-700 bg-lime-600 rounded-lg inline-block phone:text-lg pl-2 ml-2 pr-2">
          <button disabled={false} onClick={onClick}>
            shoot
          </button>
        </div>
      )}
      {/* </div> */}
    </div>
  );
}
