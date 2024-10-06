import TaskbarItem from "./TaskbarItem"

function Taskbar({ minimizedWindows, onRestore }) {
    return (
        <footer className="h-10 w-screen flex taskbar bottom-0 absolute z-[99]">
            {minimizedWindows.map((title, index) => (
                <TaskbarItem key={index} title={title} onClick={onRestore(title)}/>
            ))}
        </footer>
    )
}

export default Taskbar