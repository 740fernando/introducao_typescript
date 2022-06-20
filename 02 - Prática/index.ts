function soma(a: number , b: number){
    return a+b;
}

// types
// interfaces

interface IAnimal{
    nome: string;
    tipo: 'terrestre' | 'aquático';
    rugir(alturaEmDecibeis: number): void;
    domestico: boolean
}

interface IFelino extends IAnimal{
    visaoNoturna: boolean;
}

const animal: IAnimal = {
    nome: 'Elefante',
    tipo: 'terrestre',
    rugir: (alturaEmDecibeis) => (`${alturaEmDecibeis}dB`),
    domestico: true
}

const felino: IFelino = {
    nome: 'Leão',
    tipo: 'terrestre',
    visaoNoturna: true,
    rugir: (alturaEmDecibeis) => (`${alturaEmDecibeis}dB`),
    domestico: true
}

interface ICanino extends IAnimal{
     porte: 'pequeno' | 'medio' | 'grande';
}

type IDomestico = IFelino | ICanino; // tipos são usados para fazer juncoes

const animalMultiplasInterfaces : IDomestico = {
    domestico: true,
    nome: 'cachorro',
    porte: 'medio',
    tipo: 'terrestre',
    rugir: (alturaEmDecibeis) => (`${alturaEmDecibeis}dB`)
}