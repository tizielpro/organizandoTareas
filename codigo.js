'use strict';
/*
organizar horarios del cada día durante dos semanas las siguientes tareas:
                                                _240 minutos de trabajo.
                                                _10 minutos de descanso.
                                                _100 minutos de estudio.
                                                _10 minutos hacer trabajos practicos.
                                                _30 minutos de tareas de la casa.
mostrar todas las tareas organizadas en la consola.
*/
var trabajo = "240 minutos de trabajo.";
var descanso = "10 minutos de descanso.";
var estudio = "100 minutos de estudio.";
var trabajosPracticos = "100 minutos hacer trabajos practicos.";
var tareasDelHogar = "30 minutos de tareas de la casa.";

console.log("Tareas:")
for(var i = 1; i <= 14; i++){
    if(i == 1){{
        console.groupCollapsed("Semana 1");
    }}
    if(i == 7){
        console.groupEnd()
        console.groupCollapsed("Semana 2");
    }
    
    console.groupCollapsed("dia "+i);
    console.log(trabajo);
    console.log(descanso);
    console.log(estudio);
    console.log(trabajosPracticos);
    console.log(tareasDelHogar);
    console.groupEnd();
}
console.groupEnd();
console.log(":)")