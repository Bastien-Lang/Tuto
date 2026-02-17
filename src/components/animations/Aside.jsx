export default function Aside({children, startOrEnd = "start"}) {
    const side = startOrEnd == "start" ? "left" : "right";


    return(
        <aside className={`bg-gray-200 p-4 h-128 w-1/3 rounded-lg self-${startOrEnd} flex flex-col text-${side} justify-center shadow-md`}>
            <h2 className="text-2xl font-bold mb-4">Aside Component</h2>
            <p className="text-gray-700">{children}</p>
        </aside>
    )


    
}