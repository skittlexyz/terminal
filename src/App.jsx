import { useState } from "react"
import Window from "./components/Window"
import Taskbar from "./components/Taskbar";

function App() {
  const windows = ["terminal1", "terminal2", "terminal3"];
  
  const [lastInteracted, setLastInteracted] = useState(windows[0])

  const handleWindowMove = (key) => {
    setLastInteracted(key);
  };

  return (
    <>
      {windows.map((title, index) => (
        <Window
          title={title}
          key={index}
          isLastInteracted={index === lastInteracted}
          onInteraction={() => handleWindowMove(index)}
          isMinimized={false}
        />
      ))}
      <Taskbar windows={windows}/>
    </>
  )
}

export default App