interface Task{
    titulo:string
    completado:boolean
}

let tareas: Task[] = [{titulo:`barrer`, completado:true}, {titulo:`resolverhipotesisderiemann`, completado:false}, {titulo:`estudiar`, completado:true}];
tareas.forEach(tarea => console.log(tarea));
for(let i = 0; i < tareas.length; i++){
    if(tareas[i].completado==true){
        console.log(`Tarea ${i + 1}: completada`)
    }
}