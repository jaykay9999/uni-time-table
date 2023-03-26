const XLSX = require('xlsx');
const fs = require('fs');

// read Excel file as binary data
const workbook = XLSX.read(fs.readFileSync('Genetic algorithm.xlsx'), {type: 'buffer' });

// get the first worksheet
const worksheet = workbook.Sheets[workbook.SheetNames[0]];

// convert worksheet data to an array of objects
const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

// remove header row from data
data.shift();

console.log(data);



function getUniqueNames(arr) {
    const uniqueNames = new Set();
    for (let i = 0; i < arr.length; i++) {
      const name = arr[i][0];
      uniqueNames.add(name);
    }
    return Array.from(uniqueNames);
  }
  

  const { DNA} = require('./DNA');
const { Population} = require('./Population');
const { Professor} = require('./Professor');


allCourses = data;

allProfessorNames =  getUniqueNames(allCourses);

console.log(allProfessorNames);

var all_professors = []
for (var i = 0 ; i < allProfessorNames.length ; i++ ){
    all_professors.push(new Professor(i , allProfessorNames[i]))
}



all_professors[6].remove_time([22 , 32 , 33 , 44, 45])
console.log(all_professors[6].getProfSlots())



console.log(allCourses);









let dna1 = new DNA(allCourses ,all_professors)
console.log("DNA 1------------------------------------------")
for (var i = 0 ; i< dna1.genes.length - 580 ;i++){
    console.log(dna1.genes[i]);
}
console.log(dna1.checkFit());

let dna2 = new DNA(allCourses ,all_professors)
console.log("DNA 2 ----------------------------------------------------")
for (var i = 0 ; i< dna2.genes.length - 580 ;i++){
    console.log(dna2.genes[i]);
}
console.log(dna2.checkFit());


dna3 = dna1.crossover1(dna2 , allCourses, all_professors)
console.log("DNA 3 ----------------------------------------------------")
for (var i = 0 ; i< dna3.genes.length - 580 ;i++){
    console.log(dna3.genes[i]);
}
console.log(dna3.checkFit());
console.log(dna1.genes.length);