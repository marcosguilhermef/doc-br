"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
describe('TESTAR GERAÇÃO E VALIDAÇÃO DE CPF', () => {
    test('TESTAR VALIDAÇÃO DE CPF', () => {
        const cpf = new index_1.CpfValidator('00000000000');
        console.log(cpf.run());
    });
    test('GERAR CPF VALIDO PARA TESTES', () => {
        const cpf = new index_1.CpfValidator();
        console.log(cpf.falsify());
    });
});
