"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CpfValidator = exports.CnpjValidator = void 0;
var Cnpj_1 = require("./validators/Cnpj");
Object.defineProperty(exports, "CnpjValidator", { enumerable: true, get: function () { return __importDefault(Cnpj_1).default; } });
var Cpf_1 = require("./validators/Cpf");
Object.defineProperty(exports, "CpfValidator", { enumerable: true, get: function () { return __importDefault(Cpf_1).default; } });
