import { useState } from "react";

export default function TopMenu({ setText, setRows }) {
  const handleSelectedFile = async (e) => {
    e.preventDefault();

    const reader = new FileReader();
    reader.onload = async (e) => {
      const text = e.target.result;
      const rows = text.split("\n").length;
      setText(text);
      setRows(rows);
      console.log(text);
      console.log("Rows: ", rows);
    };
    reader.readAsText(e.target.files[0]);
  };

  return (
    <div>
      <ul className="flex py-4 border-b-2 border-gray-800">
        <li className="inline mx-4">
          <h2 className="">Text Editor</h2>
        </li>
        <li className="inline mx-4">
          <input
            type="file"
            onChange={(e) => {
              handleSelectedFile(e);
            }}
          />
        </li>
      </ul>
    </div>
  );
}
