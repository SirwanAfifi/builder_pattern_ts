import { ComputerParts } from './../models/ComputerParts';
import { ComputerType } from './../models/ComputerType';
export class Computer {
    useType: ComputerType;
    parts: Array<ComputerParts>;
}