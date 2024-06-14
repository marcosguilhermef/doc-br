import {Validators} from "./Validators";
import {Sucesso} from "./Sucesso";
import {Erro} from "./Erro";
import {Data} from "./Data";

export default class CpfValidator extends Validators {
    parameter?: string;

    constructor(parameter?: string){
        super();
        this.parameter = parameter;
    }

    asyncRun(): Promise<Sucesso | Erro> {
        throw new Error('Método não implementado para esse validator');
    }

    falsify(): Data<String> {
        return {
            res: this.generate()
        }
    }

    run(): Sucesso | Erro {

        if(!this.parameter){
            return {
                mensagem: 'Cpf invalido'
            }
        }

        let cpf = this.parameter.replace(/[^0-9]/g, "");

        const numbers = new Set(cpf)

        if (numbers.size === 1) {
            return {
                mensagem: 'Cpf invalido'
            }
        }

        if (cpf.length !== 11) {
            return {
                mensagem: 'Cpf invalido'
            }
        }

        for (let t = 9; t < 11; t++) {
            let d = 0;
            let c;
            for (c = 0; c < t; c++) {
                d += Number.parseInt(cpf[c]) * ((t + 1) - c)
            }

            d = ((10 * d) % 11) % 10;

            if (Number.parseInt(cpf[c]) != d) {
                return {
                    mensagem: 'Cpf invalido'
                }
            }
        }

        return {
            mensagem: 'Cpf valido'
        }
    }

    private gerenateSeed(x: number) : number{
        return Math.round(Math.random() * x);
    }

    private round(x: number, y: number): number{
        return Math.round(x - Math.floor(x / y) * y)
    }

    private sum(x: number[]){
        return x.slice().reverse().reduce((e, i, a) => e + i * (a + 2), 0);
    }

    private generate() : string{
        const numbers = [];

        while (numbers.length < 9) {
            numbers[numbers.length] = this.gerenateSeed(9);
        }

        while (numbers.length < 11) {
            let last: number = 11 - this.round(this.sum(numbers), 11);

            if (last > 9) {
                last = 0;
            }

            numbers[numbers.length] = last;
        }

        return numbers.join('');
    }

}