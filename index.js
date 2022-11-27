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

class Alumno {
    constructor(id,nombre,apellido,edad,grado,calificacion){
    this.id = id ;
    this.nombre = nombre ;
    this.apellido = apellido ;
    this.edad = edad ;
    this.grado = grado;
    this.calificacion = calificacion ;
    this.desaprobado = false;
   
   }
   
   nombrar= ()=>{
       let mencion = '${this.nombre}';
       return  mencion;
   }
   }
   const alumnos1=new Alumno(1,"Sofia","Masegosa",8, "3ro",10, false);
   const alumnos2=new Alumno(2,"Luz","Beron",8, "3ro",4,true);
   const alumnos3=new Alumno(3,"Zoe","Chavez",8, "3ro",8, false);
   const alumnos4=new Alumno(4,"Milo","Constantino",8, "3ro",9,false);
   const alumnos5=new Alumno(5,"Ian","Enrriquez",8, "3ro",9,false);
   const alumnos6=new Alumno(6,"Bianca","Lichieri",8, "3ro",5,true);
   
    ArrayAlumnos = []
       ArrayAlumnos.push(alumnos1),
       ArrayAlumnos.push(alumnos2),
       ArrayAlumnos.push(alumnos3),
       ArrayAlumnos.push(alumnos4),
       ArrayAlumnos.push(alumnos5),
       ArrayAlumnos.push(alumnos6),
   
      
   
   ArrayAlumnos.forEach(ArrayAlumnos => 
       console.log (ArrayAlumnos.nombre));
   
       let notaAprobatoria= 
       ArrayAlumnos.filter (calificacion=>calificacion.calificacion >= 7);
       console.log (notaAprobatoria);
