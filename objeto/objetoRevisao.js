// coleção dinâmica de pares chave/valor

const produto = new Object;
produto.nome = 'Cadeira';
produto ['marca do produto'] = 'Genérica';
produto.preco = 220;

console.log(produto);
delete produto.preco;
delete produto['marca do produto'];
console.log(produto);

const carro = {
    marca: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'ABC',
            numero: 123
        }
    },
    condutores:[{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 43
    }]
}

carro.proprietario.endereco.numero = 1000;
carro['proprietario']['endereco']['logradouro'] = 'Rua gigante';
console.log(carro);

delete carro.condutores;
delete carro.proprietario.endereco;
console.log(carro);