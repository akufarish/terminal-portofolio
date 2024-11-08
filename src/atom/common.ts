import {atom} from "jotai";
import {Result} from "../models/Result.ts";

export const historyCommands = atom<Result[]>([])
export const commands = atom<string>("")
export const results = atom<string>("")

export const commandResult = {
    about: "My name is Muhammad Farish Asqalani and I'm a college students at Politeknik Negeri Banjarmasin\n" +
        "\n"
}