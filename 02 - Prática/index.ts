interface Cachorro{
    idade: number;
    nome: string;
    parqueFavorito?: string;
}

type CachorroSomenteLeitura = {
    +readonly [K in keyof Cachorro]-?: Cachorro[K];
}

class MeuCachorro implements Cachorro  {
     nome;
     idade;


constructor(nome, idade){
    this.idade = nome;
    this.idade = idade;
 }
}

const cao = new MeuCachorro('Frida', 4);
