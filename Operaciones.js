function promedioN(){
var nombre = ["Juan", "Daniela", "Hilary", "Lucas", "Eva"];
var periodo1 = [3.5,4.2,3.9,4.0,5.0];
var periodo2 = [5.0,4.0,4.9,5.0,4.0];
var promedio = [];

  for (let i = 0; i < 5; i++){
    promedio.push(nombre[i] + ` = ` + (periodo1[i]+periodo2[i])/2 + `\n`); 
  }
  
  const fs= require("fs");

  fs.writeFile(`PromedioEstudiantes.txt`,promedio,(err) => {
  if(err) throw err;
   console.log(`El promedio se calculo con exito`); 
})
}
exports.promedioN = promedioN;
