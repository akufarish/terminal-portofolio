import {RiArrowRightSLine} from "react-icons/ri";
import {commands, historyCommands, results} from "../atom/common.ts";
import {useAtom} from 'jotai'
import {useEffect, useRef, useState} from "react";
import {Result} from "../models/Result.ts";
import {AnimatePresence, motion} from "framer-motion";
import WindowControl from "./WindowControl.tsx";


export default function Terminal() {
    const [command, setCommand] = useAtom(commands)
    const [historyCommand, setHistoryCommand] = useAtom(historyCommands);
    const [result, setResult] = useAtom(results);
    const [isClicked, setIsClicked] = useState("");
    const dummy = useRef<HTMLInputElement>(null)

    useEffect(() => {
        function handleKeyDown(e: KeyboardEvent) {
            if (e.altKey && e.shiftKey) {
                setIsClicked("A")
            }
        }

        document.addEventListener('keydown', handleKeyDown);
    }, []);

    function closeTerminal() {
        setIsClicked("B")
        setHistoryCommand([])
        setCommand("")
    }

    const variants = {
        A: {
            hidden: {opacity: 0, y: "-100%"},
            visible: {opacity: 1, y: 0},
        },
        B: {
            hidden: {opacity: 1, y: 0},
            visible: {opacity: 0, y: "100%"},
        }
    };

    async function printCommand(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log(command)
        const riwayat: Result = {
            commands: command,
            hasil: result,
        }
        setHistoryCommand([...historyCommand, riwayat]);
        setCommand("")

        switch (command) {
            case "clear":
                setHistoryCommand([])
                break;
            case "neofetch":
                setResult("Mantap")
                break
            case "sudo":
                setResult("Sorry try again")
                break
            default:
                setResult("Error: command not found")
        }
    }

    return (
        <AnimatePresence>
            <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={variants[isClicked]}
                transition={{duration: 0.5}}
                className="flex flex-col justify-center items-center w-full h-full ">
                <WindowControl closeButton={closeTerminal} minimizeButton={closeTerminal}/>
                <section
                    className="bg-tertiary w-[70%] h-[70vh] overflow-auto max-h-[70vh] min-h-[70vh] pb-3">
                    <div className="pt-5 pl-2 text-text-primary">
                        {historyCommand.map((command, index) => (
                            <div key={index}>
                                <label className="relative">
                                    <RiArrowRightSLine className="w-5 h-5 text-red-400 absolute bottom-0.5"/>
                                    <h1 className="px-6">{command.commands}</h1>
                                </label>
                                <p className="text-text-primary px-2">{command.hasil}</p>
                                <div ref={dummy}></div>
                            </div>
                        ))}
                    </div>
                    <form onSubmit={printCommand} className="pl-2">
                        <label htmlFor="" className="relative">
                            <RiArrowRightSLine className="w-5 h-5 text-green-400 absolute -bottom-0.5"/>
                            <input
                                value={command}
                                onChange={(e) => setCommand(e.target.value)}
                                autoFocus={true}
                                type="text"
                                className="w-full px-6 bg-transparent focus:outline-none focus:border-none text-text-primary"/>
                        </label>
                    </form>
                </section>
            </motion.div>
        </AnimatePresence>
    )
}