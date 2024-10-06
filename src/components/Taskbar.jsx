import TaskbarItem from "./TaskbarItem"

function Taskbar({ windows }) {
    return (
        <footer className="h-10 w-screen flex taskbar bottom-0 absolute z-[99]">
            {windows.map((title, index) => (
                <TaskbarItem key={index} title={title}/>
            ))}
        </footer>
    )
}

export default Taskbar