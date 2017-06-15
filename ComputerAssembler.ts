import { Computer } from './models/Computer';
import { IComputerBuilder } from './models/IComputerBuilder';

export class ComputerAssembler {
    private builder: IComputerBuilder;
    constructor(builder: IComputerBuilder) {
        this.builder = builder;
    }
    assembleComputer(): Computer {
        this.builder.addCPU();
        this.builder.addCabinet();
        this.builder.addMonitor();
        this.builder.addKeyboard();
        this.builder.addMouse();

        return this.builder.getComputer();
    }
}