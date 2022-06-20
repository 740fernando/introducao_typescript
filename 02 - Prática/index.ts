function soma(a: number , b: number){
    return a+b;
}

// types
// interfaces

interface IAnimal{
    nome: string;
    tipo: 'terrestre' | 'aquático';
    rugir(alturaEmDecibeis: number): void;
}

interface IFelino extends IAnimal{
    visaoNoturna: boolean;
}

const animal: IAnimal = {
    nome: 'Elefante',
    tipo: 'terrestre',
    rugir: (alturaEmDecibeis) => (`${alturaEmDecibeis}dB`)
}

const felino: IFelino = {
    nome: 'Leão',
    tipo: 'terrestre',
    visaoNoturna: true,
    rugir: (alturaEmDecibeis) => (`${alturaEmDecibeis}dB`)
}