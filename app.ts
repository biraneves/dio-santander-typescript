const pessoa = {
    nome: 'Mariana',
    idade: 28,
    profissao: 'desenvolvedora'
};

pessoa.idade = 29;

const andre: {nome: string, idade: number, profissao: string} = {
    nome: 'André',
    idade: 25,
    profissao: 'pintor'
};

const paula: {nome: string, idade: number, profissao: string} = {
    nome: 'Paula',
    idade: 25,
    profissao: 'desenvolvedora'
};

enum Profissao {
    Professora,
    Desenvolvedora,
    Atriz,
    JogadoraDeFutebol
};

interface IPessoa {
    nome: string,
    idade: number,
    profissao?: Profissao
};

interface IEstudante extends IPessoa {
    materias: string[]
};

const vanessa: IPessoa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Desenvolvedora
};

const maria: IPessoa = {
    nome: 'Maria',
    idade: 23,
    profissao: Profissao.Desenvolvedora
};

const jessica: IEstudante = {
    nome: 'Jéssica',
    idade: 28,
    profissao: Profissao.Desenvolvedora,
    materias: ['Matemática Discreta', 'Programação']
};

const monica: IEstudante = {
    nome: 'Mônica',
    idade: 28,
    materias: ['Matemática Discreta', 'Programação']
};

function listar(lista: string[]) {
    for (const item of lista)
        console.log('-', item);
}

listar(monica.materias);