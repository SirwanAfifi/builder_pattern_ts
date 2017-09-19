import { Computer } from './models/Computer';
import { IComputerBuilder } from './models/IComputerBuilder';
import { ComputerParts } from './models/ComputerParts';
import { ComputerType } from './models/ComputerType';
import { SeedData } from './seed/seedService';


export class ComputerBuilder implements IComputerBuilder {
    private seed_data : Array<Computer>;
    private computer: Computer;
    constructor(public type: ComputerType) {
        this.computer = new Computer();
        this.computer.parts = new Array<ComputerParts>();
        this.seed_data = SeedData.init();
    }

    addCPU() {
        let toBeAdded = this.seed_data.filter(computer => computer.useType === this.type)[0].parts.filter(part => part.part === 'CPU');
        this.computer.parts.push(toBeAdded[0]);
    }
    addCabinet() {
        let toBeAdded = this.seed_data.filter(computer => computer.useType === this.type)[0].parts.filter(part => part.part === 'Cabinet');
        this.computer.parts.push(toBeAdded[0]);
    }
    addMouse() {
        let toBeAdded = this.seed_data.filter(computer => computer.useType === this.type)[0].parts.filter(part => part.part === 'Mouse');
        this.computer.parts.push(toBeAdded[0]);
    }
    addKeyboard() {
        let toBeAdded = this.seed_data.filter(computer => computer.useType === this.type)[0].parts.filter(part => part.part === 'Keyboard');
        this.computer.parts.push(toBeAdded[0]);
    }
    addMonitor() {
        let toBeAdded = this.seed_data.filter(computer => computer.useType === this.type)[0].parts.filter(part => part.part === 'Monitor');
        this.computer.parts.push(toBeAdded[0]);
    }
    getComputer(): Computer {
        return this.computer;
    }
}