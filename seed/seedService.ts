import { Computer } from './../models/Computer';
import { ComputerType } from './../models/ComputerType';

export class SeedData {
    static init(): Array<Computer> {
        return [
            {
                useType: ComputerType.Home,
                parts: [
                    { part: 'CPU', model: 'Intel Core i3-3xxx or equivalent' },
                    { part: 'Memory', model: '4 GB RAM' },
                    { part: 'Keyboard', model: 'logitech' },
                    { part: 'Mouse', model: 'logitech' },
                    { part: 'Storage', model: '500 GB internal hard drive' },
                    { part: 'Monitor', model: '13" LCD monitor' },
                    { part: 'Network Adapter', model: 'Dual-band 802.11a/g - compliant adapter' },
                    { part: 'Cabinet', model: 'Lock, carrying case' }
                ]
            },
            {
                useType: ComputerType.Home,
                parts: [
                    { part: 'CPU', model: 'Intel Core i3-555 or equivalent' },
                    { part: 'Memory', model: '6 GB RAM' },
                    { part: 'Keyboard', model: 'logitech' },
                    { part: 'Mouse', model: 'logitech' },
                    { part: 'Storage', model: '750 GB internal hard drive' },
                    { part: 'Monitor', model: '13" LCD monitor' },
                    { part: 'Network Adapter', model: 'Dual-band 802.11a/g - compliant adapter' },
                    { part: 'Cabinet', model: 'Lock, carrying case' }
                ]
            },
            {
                useType: ComputerType.Office,
                parts: [
                    { part: 'CPU', model: 'Intel Core i5-6xxx or equivalent' },
                    { part: 'Memory', model: '8 GB RAM' },
                    { part: 'Keyboard', model: 'logitech' },
                    { part: 'Mouse', model: 'logitech' },
                    { part: 'Storage', model: '500 GB internal hard drive' },
                    { part: 'Monitor', model: '14" LCD monitor, resolution of 1600 x 900 or better' },
                    { part: 'Network Adapter', model: '802.11ac 2.4/5 GHz wireless adaptor' },
                    { part: 'Cabinet', model: 'Internal or external Webcam, lock, carrying case, external hard drive for backups' }
                ]
            },
            {
                useType: ComputerType.Office,
                parts: [
                    { part: 'CPU', model: 'Intel Core i5 or equivalent' },
                    { part: 'Memory', model: '16 GB RAM' },
                    { part: 'Keyboard', model: 'logitech' },
                    { part: 'Mouse', model: 'logitech' },
                    { part: 'Storage', model: '750 GB internal hard drive' },
                    { part: 'Monitor', model: '14" LCD monitor, resolution of 1600 x 900 or better' },
                    { part: 'Network Adapter', model: '802.11ac 2.4/5 GHz wireless adaptor' },
                    { part: 'Cabinet', model: '-' }
                ]
            },
            {
                useType: ComputerType.Development,
                parts: [
                    { part: 'CPU', model: 'Intel Core i7' },
                    { part: 'Memory', model: '32 GB RAM' },
                    { part: 'Keyboard', model: 'logitech' },
                    { part: 'Mouse', model: 'logitech' },
                    { part: 'Storage', model: '500 SSD' },
                    { part: 'Monitor', model: '21' },
                    { part: 'Network Adapter', model: '802.11ac 2.4/5 GHz wireless adaptor' },
                    { part: 'Cabinet', model: '-' }
                ]
            },
            {
                useType: ComputerType.Development,
                parts: [
                    { part: 'CPU', model: 'Intel Core i7' },
                    { part: 'Memory', model: '64 GB RAM' },
                    { part: 'Keyboard', model: 'logitech' },
                    { part: 'Mouse', model: 'logitech' },
                    { part: 'Storage', model: '750 SSD' },
                    { part: 'Monitor', model: '24' },
                    { part: 'Network Adapter', model: '802.11ac 2.4/5 GHz wireless adaptor' },
                    { part: 'Cabinet', model: '-' }
                ]
            },
            {
                useType: ComputerType.Development,
                parts: [
                    { part: 'CPU', model: 'Intel Core i7' },
                    { part: 'Memory', model: '64 GB RAM' },
                    { part: 'Keyboard', model: 'logitech' },
                    { part: 'Mouse', model: 'logitech' },
                    { part: 'Storage', model: '1TB SSD' },
                    { part: 'Monitor', model: '32' },
                    { part: 'Network Adapter', model: '802.11ac 2.4/5 GHz wireless adaptor' },
                    { part: 'Cabinet', model: '-' }
                ]
            }
        ];
    }
}