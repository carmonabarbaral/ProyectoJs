//Calculador de asistencia media mensual primaria//
// Declaración de variables//

let asistenciaTotal = parseInt (prompt ("Ingrese asistencia total"));
let inasistenciaTotal = parseInt (prompt ("Ingrese inasistencia total"));
let porcentajeDeAsistencia = (asistenciaTotal * 100)/ (asistenciaTotal + inasistenciaTotal  );

//Uso de ciclo do while //
let numeroDeAlumnos= 0
do{
    numeroDeAlumnos= parseInt(prompt("Ingrese cantidad de alumnos inscriptos"));

}while (isNaN(numeroDeAlumnos)=== true);

//Si el porcentaje  es mayor  a 80% fue un mes con buena asistencia//
if (porcentajeDeAsistencia >= 80){
     console.log( "Tuviste buena asistencia");
} else {
    console.log( "Debes motivar a tus estudiantes" );
}
 //Uso de  funcion flecha//
let diasHabiles = parseInt (prompt ("Ingrese cantidad de días hábiles"));
 let asistenciaMedia = ( asistenciaTotal, diasHabiles) => asistenciaTotal / diasHabiles;
console.log ("Tu asistencia media es " + ( asistenciaTotal / diasHabiles))

 
