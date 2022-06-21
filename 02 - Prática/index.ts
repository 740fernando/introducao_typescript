// Generic types

function adicionaApendiceLista<T>(array : T[], value: T){
    return array.map(() => value);
}

adicionaApendiceLista(["1","2","3"],'D');