import Draggable from "react-draggable"

function Window({ title, isLastInteracted, onInteraction, isMinimized }) {
    return (
        <>
            <Draggable
                handle=".handle"
                bounds="parent"
            >
                <main onMouseDownCapture={onInteraction} className={`${isMinimized ? "opacity-0 w-0 h-0" : "opacity-100 h-64 w-[500px]"} ${isLastInteracted ? "border-2 z-10" : ""} border border-amber-500 absolute bg-gray-950`}>
                    <header className={`${isLastInteracted ? "border-b-2" : ""} handle border-b-[1px] border-b-amber-500 flex justify-between px-2 py-1 h-10 gap-2`}>
                        {title}
                        <span className="ml-auto cursor-pointer hover:text-white">_</span>
                        <span className="cursor-pointer hover:text-white">X</span>
                    </header>
                    <section className="px-2 py-1 flex text-lg">
                        <span className="bold text-white">skittlexyz@thinkpad</span>:~$&nbsp;<input className="focus:outline-0 bg-gray-950 w-full" type="text"></input>
                    </section>
                </main>
            </Draggable>
        </>
    )
}

export default Window