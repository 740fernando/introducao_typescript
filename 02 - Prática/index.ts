// Generic types

function adicionaApendiceLista<T>(array : T[], value: T){
    return array.map(() => value);
}

adicionaApendiceLista(["1","2","3"],'D');

// Devolvendo a partir de parâmetros

interface Usuario {
    id: string;
    email: string;
}

interface IAdmin extends IUsuario{
    cargo: 'gerente' | 'coordenador' | 'supervisor';
}

function redirecione(usuario : IUsuario | IAdmin) {
     if('cargo' in usuario){
        // redirecionar para a área de adminisração
     }
       // redirecionar para a área do usuário  
}