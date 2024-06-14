import { Sucesso } from "./Sucesso";
import { Erro } from "./Erro";
import { Data } from "./Data";
export declare abstract class Validators {
    abstract run(): Sucesso | Erro;
    abstract asyncRun(): Promise<Sucesso | Erro>;
    abstract falsify(): Data<unknown>;
}
