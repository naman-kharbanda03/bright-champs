import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Introduction from "./pages/Introduction";
import Activity from "./pages/Activity";
import Instruction from "./pages/Instruction";
import Result from "./pages/Result";
import bg from "./assests/images/bg-image.png";
import Layout from "./Layout/Layout";
import { useEffect, useState } from "react";

import start from "../src/assests/images/Start Button.png";
import next from "./assests/images/next.png";
import yes from "./assests/images/yes.png";

function App() {
  const [keyState, setKeyState] = useState(1);
  const [ans, setAns] = useState(0);
  let screen;
  const nextKey = (bananas) => {
    if (bananas) setAns(bananas);
    setKeyState((prev) => prev + 1);
  };
  const handleKey = () => {
    setKeyState((prev) => prev - 1);
  };
  const resetKey = () => {
    setKeyState(1);
  };
  switch (keyState) {
    case 1:
      screen = (
        <Introduction
          button={start}
          message={"Welcome Kiddo!"}
          nextKey={nextKey}
        />
      );
      break;
    case 2:
      screen = (
        <Introduction
          button={next}
          message={"Hi ,I am Mizo! and I love bananas"}
          nextKey={nextKey}
        />
      );
      break;
    case 3:
      screen = (
        <Introduction
          button={yes}
          message={"Can you help me get some ?"}
          nextKey={nextKey}
        />
      );
      break;
    case 4:
      screen = <Instruction nextKey={nextKey} />;
      break;
    case 5:
      screen = <Activity nextKey={nextKey} />;
      break;
    case 6:
      screen = <Result ans={ans} resetKey={resetKey} />;
      break;
    default:
      screen = null;
  }
  useEffect(() => console.log(keyState), [keyState]);

  return (
    <div>
      <Layout setKeyState={handleKey} keyState={keyState}>
        {screen}
      </Layout>
    </div>
  );
}

export default App;
