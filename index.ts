import { VariavelInterface } from '@designliquido/delegua';
import { CreateNodeOptions, DocumentOptions, parse, ParseOptions, SchemaOptions, stringify, ToStringOptions } from 'yaml';

export function yamlParaDicionario(conteudoYaml: string) {
    const resultadoObjeto = parse(
        conteudoYaml
    );
    return resultadoObjeto;
}

export function objetoDeleguaParaYaml(objetoDelegua: any) {
    // Se tem `tipo`, muito provavelmente é literal ou variável.
    const opcoes: DocumentOptions & SchemaOptions & ParseOptions & CreateNodeOptions & ToStringOptions = {
        toStringDefaults: {
            defaultKeyType: 'PLAIN',
            defaultStringType: 'QUOTE_SINGLE'
        }
    };

    if (objetoDelegua.hasOwnProperty('tipo')) {
        switch ((objetoDelegua as VariavelInterface).tipo) {
            case 'dicionário':
                const resultadoYaml = stringify(
                    objetoDelegua.valor,
                    opcoes
                );

                return resultadoYaml;
        }
    }

    const resultadoYaml = stringify(
        objetoDelegua, opcoes
    );

    return resultadoYaml;
}
