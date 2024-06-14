import {CpfValidator} from "../validators/Cpf";

describe('TESTAR GERAÇÃO E VALIDAÇÃO DE CPF',() => {
    test('TESTAR VALIDAÇÃO DE CPF', () => {
        const cpf = new CpfValidator('00000000000')
        console.log(cpf.run());
    });

    test('GERAR CPF VALIDO PARA TESTES', () => {
        const cpf = new CpfValidator()
        console.log(cpf.falsify());
    });

})