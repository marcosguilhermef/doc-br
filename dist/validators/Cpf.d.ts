import { Validators } from "./Validators";
import { Sucesso } from "./Sucesso";
import { Erro } from "./Erro";
import { Data } from "./Data";
export default class CpfValidator extends Validators {
    parameter?: string;
    /**
     * @param {string} parameter - CPF que deve ser validado. Caso você queria apenas gerar um CPF, esse campo pode ser deixado vazio
     */
    constructor(parameter?: string);
    asyncRun(): Promise<Sucesso | Erro>;
    /**
     * @return {string} - Gera número de CPF falso. No entanto, pode passa por qualquer validador.
     */
    falsify(): Data<String>;
    /**
     * @return {Sucesso | Erro} - Verifica a validade de qualquer CPF. O CPF deve estar no formato com ou sem mascara.
     */
    run(): Sucesso | Erro;
    private gerenateSeed;
    private round;
    private sum;
    private generate;
}
