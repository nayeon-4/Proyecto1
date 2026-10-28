class Player{
    nombre: string;
    nivel: number;
    constructor(nombre: string, nivel: number){
        this.nombre = nombre
        this.nivel = nivel
    }
    mostrarinfo(): void {
        console.log(`Nombre: ${this.nombre}, Nivel: ${this.nivel}`)
    }
}
let player1 = new Player("tatin", 67);
player1.mostrarinfo();