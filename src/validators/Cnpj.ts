import {Validators} from "./Validators";
import {Sucesso} from "./Sucesso";
import {Erro} from "./Erro";
import {Data} from "./Data";

export default class CnpjValidator extends Validators {
    parameter?: string;

    /**
     * @param {string} parameter - CNPJ que deve ser validado. Caso você queria apenas gerar um CNPJ, esse campo pode ser deixado vazio
     */
    constructor(parameter?: string){
        super();
        this.parameter = parameter;
    }

    asyncRun(): Promise<Sucesso | Erro> {
        throw new Error('Método não implementado para esse validator');
    }
    /**
     * @return {string} - Gera número de CNPJ falso. No entanto, pode passa por qualquer validador.
     */
    falsify(): Data<String> {
        return {
            res: this.generate()
        }
    }
    /**
     * @return {Sucesso | Erro} - Verifica a validade de qualquer CNPJ. O CNPJ deve estar no formato com ou sem mascara.
     */
    run(): Sucesso | Erro {

        if(!this.parameter){
            return {
                mensagem: 'Cnpj invalido X'
            }
        }

        if(!(this.parameter.length >= 14 || this.parameter.length <= 18)){
            return {
                mensagem: 'Cnpj invalido Y'
            }
        }

        const numbers : number []= this.parameter.replaceAll(/[.,/-]/g,'').split('').map( e => parseInt(e))

        const items = new Set<number>(numbers)

        if (items.size === 1){
            return {
                mensagem: 'Cnpj invalido'
            }
        }


        const calc = (x: number) => {
            const slice = numbers.slice(0, x)
            let factor = x - 7
            let sum = 0

            for (let i = x; i >= 1; i--) {
                const n = slice[x - i]
                sum += n * factor--
                if (factor < 2) factor = 9
            }

            const result = 11 - (sum % 11)

            return result > 9 ? 0 : result
        }

        const digits = numbers.slice(12)

        const digit0 = calc(12)
        if (digit0 !== digits[0]){
            return {
                mensagem: 'Cnpj invalido'
            }
        }

        const digit1 = calc(13)
        return {
            mensagem: 'Cnpj valido'
        }

    }
    private gerenateSeed(x: number) : number{
        return Math.round(Math.random() * x);
    }
    private round(x: number, y: number): number{
        return Math.round(x - Math.floor(x / y) * y)
    }
    private sum(x: number[]){
        return x.slice().reverse().reduce(
            (e, i, a) => {
                if(a > 7){
                    return (a-6)*i+e
                }
                return (a+2)*i+e
            }, 0);
    }
    private generate() : string{
        let numbers = [];

        while (numbers.length < 8) {
            numbers[numbers.length] = this.gerenateSeed(9);
        }

        while (numbers.length < 14) {
            let last: number = 11 - this.round(this.sum(numbers), 11);
            if(numbers.length == 8 || numbers.length == 9 || numbers.length == 10 ){
                last = 0
            }

            if(numbers.length == 11 ){
                last = 1
            }

            if (last > 9) {
                last = 0;
            }

            numbers[numbers.length] = last;

        }

        const result = numbers.join('');
        return result;
    }
}