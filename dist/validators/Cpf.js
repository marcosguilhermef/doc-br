"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validators_1 = require("./Validators");
class CpfValidator extends Validators_1.Validators {
    /**
     * @param {string} parameter - CPF que deve ser validado. Caso você queria apenas gerar um CPF, esse campo pode ser deixado vazio
     */
    constructor(parameter) {
        super();
        this.parameter = parameter;
    }
    asyncRun() {
        throw new Error('Método não implementado para esse validator');
    }
    /**
     * @return {string} - Gera número de CPF falso. No entanto, pode passa por qualquer validador.
     */
    falsify() {
        return {
            res: this.generate()
        };
    }
    /**
     * @return {Sucesso | Erro} - Verifica a validade de qualquer CPF. O CPF deve estar no formato com ou sem mascara.
     */
    run() {
        if (!this.parameter) {
            return {
                mensagem: 'Cpf invalido'
            };
        }
        let cpf = this.parameter.replace(/[^0-9]/g, "");
        const numbers = new Set(cpf);
        if (numbers.size === 1) {
            return {
                mensagem: 'Cpf invalido'
            };
        }
        if (cpf.length !== 11) {
            return {
                mensagem: 'Cpf invalido'
            };
        }
        for (let t = 9; t < 11; t++) {
            let d = 0;
            let c;
            for (c = 0; c < t; c++) {
                d += Number.parseInt(cpf[c]) * ((t + 1) - c);
            }
            d = ((10 * d) % 11) % 10;
            if (Number.parseInt(cpf[c]) != d) {
                return {
                    mensagem: 'Cpf invalido'
                };
            }
        }
        return {
            mensagem: 'Cpf valido'
        };
    }
    gerenateSeed(x) {
        return Math.round(Math.random() * x);
    }
    round(x, y) {
        return Math.round(x - Math.floor(x / y) * y);
    }
    sum(x) {
        return x.slice().reverse().reduce((e, i, a) => e + i * (a + 2), 0);
    }
    generate() {
        const numbers = [];
        while (numbers.length < 9) {
            numbers[numbers.length] = this.gerenateSeed(9);
        }
        while (numbers.length < 11) {
            let last = 11 - this.round(this.sum(numbers), 11);
            if (last > 9) {
                last = 0;
            }
            numbers[numbers.length] = last;
        }
        return numbers.join('');
    }
}
exports.default = CpfValidator;
