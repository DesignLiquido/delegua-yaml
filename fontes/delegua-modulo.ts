import { yamlParaDicionario, objetoDeleguaParaYaml } from "./index";


export const DeleguaModuloYaml = {
    yamlParaDicionario: {
        tipoRetorno: 'dicionário',
        funcao: yamlParaDicionario,
        argumentos: [
            {
                nome: 'conteudoYaml',
                tipo: 'texto'
            }
        ]
    },
    objetoDeleguaParaYaml: {
        tipoRetorno: 'texto',
        funcao: objetoDeleguaParaYaml,
        argumentos: [
            {
                nome: 'objeto',
                tipo: 'qualquer'
            }
        ]
    }
}
