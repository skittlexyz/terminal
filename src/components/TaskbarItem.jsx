function TaskbarItem({ title, onRestore }) {
    return (
        <div className={"opacity-100 h-10 w-auto flex justify-between px-2 py-1 gap-6 border-[1px] border-amber-500"}>
            {title}
            <span onClick={onRestore} className="ml-auto cursor-pointer hover:text-white">^</span>
        </div>
    )
}

export default TaskbarItem