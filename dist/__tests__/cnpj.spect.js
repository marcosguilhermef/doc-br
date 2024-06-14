"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
describe('TESTAR GERAÇÃO E VALIDAÇÃO DE CNPJ', () => {
    test('TESTAR VALIDAÇÃO DE CNPJ', () => {
        const cpf = new index_1.CnpjValidator('25.450.139/0001-68');
        console.log(cpf.run());
    });
    test('GERAR CNPJ VALIDO PARA TESTES', () => {
        const cpf = new index_1.CnpjValidator();
        console.log(cpf.falsify());
    });
});
