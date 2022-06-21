// Utilizando o caracter ? para variaveis opcionais

interface IUsuario {
    id: string;
    email: string;
    cargo?: 'gerente' | 'corrdenador' | 'supervisor' | 'funcionario';
}

function redirecione(usuario : IUsuario){
    if(usuario.cargo){
        //redirecionar(usuario.cargo)
    }

    // redirecionar p/ área do usuário
}