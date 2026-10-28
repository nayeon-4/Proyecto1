interface User{
    username: string;
    followers: number;
}
function printUser(user: User):void{
    console.log(`Username: ${user.username}\nFollowers: ${user.followers}`);
}
let usuario2:User = {
    username: "juancito",
    followers: 67
}
printUser(usuario2);