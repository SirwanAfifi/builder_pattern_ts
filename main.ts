import { ComputerAssembler } from './ComputerAssembler';
import { IComputerBuilder } from './models/IComputerBuilder';
import { ComputerBuilder } from './ComputerBuilder';
import { ComputerType } from './models/ComputerType';
import { Computer } from './models/Computer';

let e = document.getElementById('pc_type') as HTMLSelectElement;
let output = document.getElementById('result');
let btn_assembles = document.getElementById('assembles') as HTMLButtonElement;

btn_assembles.addEventListener('click', (event) => {
    let value = e[e.selectedIndex].value;

    let builder: IComputerBuilder;
    switch (value) {
        case '1':
            builder = new ComputerBuilder(ComputerType.Home);
            break;
        case '2':
            builder = new ComputerBuilder(ComputerType.Office);
            break;
        case '3':
            builder = new ComputerBuilder(ComputerType.Development);
            break;
        default:
            break;
    }

    let assembler: ComputerAssembler = new ComputerAssembler(builder);
    let computer: Computer = assembler.assembleComputer();
    displayResult(computer);
});

function displayResult(computer: Computer) {
    let result = `<h3>Your computer has the following configuration :</h3>`;
    result += "<table class='table'>";
    computer.parts.map(part => {
        result += `
            <tr>
                <td>${part.part}</td>
                <td>${part.model}</td>
            </tr>
        `;
    });
    result += "</table>";
    output.innerHTML = result;
}