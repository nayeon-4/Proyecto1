class User{
    nombre:string;
    edad: number;
    constructor(nombre: string, edad: number){
        this.nombre = nombre;
        this.edad = edad;
    }
}

class Gamer extends User{
    game: string;
    constructor(nombre: string, edad: number, game:string){
        super(nombre, edad);
        this.game = game;
    }
    mostrarinfo(): void {
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}, Juego: ${this.game}`);
    }
}
let gamer1 = new Gamer("tatin", 67, "maincra");
gamer1.mostrarinfo();