interface WindowControlProps {
    closeButton: () => void;
    minimizeButton: () => void;
}

export default function WindowControl({closeButton, minimizeButton}: WindowControlProps) {
    return (
        <>
            <section className="bg-secondary w-[70%] h-[6%] flex items-center px-5 gap-5">
                <div onClick={() => closeButton()} className="w-5 h-5 rounded-full bg-red-500"></div>
                <div onClick={() => minimizeButton()} className="w-5 h-5 rounded-full bg-yellow-500"></div>
                <div className="w-5 h-5 rounded-full bg-green-500"></div>
            </section>
        </>
    )
}