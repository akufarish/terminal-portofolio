import Terminal from "./components/Terminal.tsx";
import {IoHeart} from "react-icons/io5";

export default function App() {
    return (
        <>
            <div className="flex flex-col h-screen justify-between">
                <div className="grid place-items-center min-h-screen w-full">
                    <Terminal/>
                </div>
                <footer className="text-text-primary p-12 flex gap-2 justify-center items-center text-center">
                    Made with <IoHeart className="text-red-500 w-5 h-5"/>
                    by Farish
                </footer>
            </div>
        </>
    )
}