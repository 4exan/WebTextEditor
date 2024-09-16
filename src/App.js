import { useState } from "react";
import TopMenu from "./components/common/TopMenu";

function App() {
  const [text, setText] = useState();
  const [rows, setRows] = useState();

  const textFile = () => {
    const element = document.createElement("a");
    const file = new Blob([document.getElementById("textarea").value], {
      type: "text/plaun",
    });
    element.href = URL.createObjectURL(file);
    element.download = "TextFile.txt";
    document.body.appendChild(element);
    element.click();
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    console.log(url);
    return url;
  };

  return (
    <div>
      <TopMenu setText={setText} setRows={setRows} />
      <form
        className="p-4"
        onSubmit={(e) => {
          handleFormSubmit(e);
        }}
      >
        +
        <textarea
          className="w-full h-full"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          id="textarea"
          rows={rows}
        />
        <button>Generate</button>
        <a onClick={textFile}>Save</a>
      </form>
    </div>
  );
}

export default App;
