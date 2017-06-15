import { Computer } from './../models/Computer';
export interface IComputerBuilder {
    addCPU();
    addCabinet();
    addMouse();
    addKeyboard();
    addMonitor();
    getComputer(): Computer;
}