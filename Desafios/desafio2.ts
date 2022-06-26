// Como podemos melhorar o esse código usando TS? 
enum Job {
    Atriz,
    Padeiro
}

type person = {
    nome: string,
    idade: number,
    profissao: Job
}

let pessoa1:person = {
    nome: "maria",
    idade: 29,
    profissao: Job.Atriz
};

let pessoa2:person = {
    nome: "roberto",
    idade: 19,
    profissao: Job.Padeiro
};

let pessoa3:person = {
    nome: "laura",
    idade: 32,
    profissao: Job.Atriz
};

let pessoa4:person = {
    nome: "carlos",
    idade: 19,
    profissao: Job.Padeiro
}