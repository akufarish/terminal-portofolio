import {atom} from "jotai";
import {Result} from "../models/Result.ts";

export const historyCommands = atom<Result[]>([])
export const commands = atom<string>("")
export const results = atom<string>("")