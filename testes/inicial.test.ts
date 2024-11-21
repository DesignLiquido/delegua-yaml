import { VariavelInterface } from '@designliquido/delegua';
import { yamlParaDicionario, objetoDeleguaParaYaml } from '../index';

describe('Testes', () => {
    describe('Conversão de YAML para objetos Delégua', () => {
        it('Trivial, objeto tradicional em JS (dicionário em Delégua)', () => {
            const resultado = yamlParaDicionario(
                'openapi: 3.0.0\n' +
                'servers:\n' +
                "  - url: 'https://api.designliquido.com.br'"
            );
            expect(resultado).toBeTruthy();
            expect(resultado.openapi).toBe('3.0.0');
            expect(resultado.servers).toHaveLength(1);
            expect(resultado.servers[0].url).toBe('https://api.designliquido.com.br');
        });
    });

    describe('Conversão de objetos Delégua para YAML', () => {
        it('Trivial', () => {
            const resultado = objetoDeleguaParaYaml(['teste', '123', '456']);
            expect(resultado).toBeTruthy();
            const linhas = resultado.split('\n');
            expect(linhas).toHaveLength(4);
            expect(linhas[0]).toBe('- teste');
            expect(linhas[1]).toBe('- "123"');
            expect(linhas[2]).toBe('- "456"');
        });

        it('Dicionário Delégua, um nível', () => {
            const dicionarioDelegua: VariavelInterface = {
                tipo: 'dicionário',
                imutavel: false,
                valor: { a: 1, b: 2 }
            };

            const resultado = objetoDeleguaParaYaml(dicionarioDelegua);
            expect(resultado).toBeTruthy();
            const linhas = resultado.split('\n');
            expect(linhas).toHaveLength(3);
            expect(linhas[0]).toBe('a: 1');
            expect(linhas[1]).toBe('b: 2');
        });

        it('Dicionário Delégua, complexo', () => {
            const dicionarioDelegua: VariavelInterface = {
                tipo: 'dicionário',
                imutavel: false,
                valor: { openapi: '3.0.0', servers: [{url: 'https://api.designliquido.com.br'}] }
            };

            const resultado = objetoDeleguaParaYaml(dicionarioDelegua);
            expect(resultado).toBeTruthy();
            const linhas = resultado.split('\n');
            expect(linhas).toHaveLength(4);
            expect(linhas[0]).toBe("openapi: '3.0.0'");
            expect(linhas[1]).toBe('servers:');
            expect(linhas[2]).toBe("  - url: 'https://api.designliquido.com.br'");
        });
    });
});
