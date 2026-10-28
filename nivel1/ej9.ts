function ObtenerPrimero<T>(lista: T[]): T {
    return lista[0];
}
let arreglo = [1, 2, 3, 4, 5];
console.log(ObtenerPrimero(arreglo));