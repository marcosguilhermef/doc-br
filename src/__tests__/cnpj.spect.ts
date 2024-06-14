import {CnpjValidator} from "../index";
describe('TESTAR GERAÇÃO E VALIDAÇÃO DE CNPJ',() => {
    test('TESTAR VALIDAÇÃO DE CNPJ', () => {
        const cpf = new CnpjValidator('25.450.139/0001-68')
        console.log(cpf.run());
    });

    test('GERAR CNPJ VALIDO PARA TESTES', () => {
        const cpf = new CnpjValidator()
        console.log(cpf.falsify());
    });

})