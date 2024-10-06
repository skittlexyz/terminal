import { useState } from "react"
import Window from "./components/Window"
import Taskbar from "./components/Taskbar";

function App() {
  const [minimizedWindows, setMinimizedWindows] = useState([])
  const [activeWindows, setActiveWindows] = useState(["terminal1", "terminal2", "terminal3"]);
  
  const [lastInteracted, setLastInteracted] = useState(activeWindows[0])

  const handleMinimize = (title) => {
    setMinimizedWindows((prev) => [...prev, title]);
    setActiveWindows((prev) => prev.filter((win) => win !== title));
  };

  const handleRestore = (title) => {
    setMinimizedWindows((prev) => prev.filter((win) => win !== title));
    setActiveWindows((prev) => [...prev, title]);
  };

  const handleWindowMove = (key) => {
    setLastInteracted(key);
  };

  return (
    <>
      {activeWindows.map((title, index) => (
        <Window
          title={title}
          key={index}
          isLastInteracted={index === lastInteracted}
          onInteraction={() => handleWindowMove(index)}
          onMinimize={() => handleMinimize(title)}
          isMinimized={minimizedWindows.includes(title)}
        />
      ))}
      <Taskbar minimizedWindows={minimizedWindows} onRestore={handleRestore} />
    </>
  )
}

export default App