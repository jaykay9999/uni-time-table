//import DNA from './DNA';
const { DNA} = require('./DNA');
const { Population} = require('./Population');
const { Professor} = require('./Professor');

var allProfessorNames = ["asma" ,"sami", "firas", "lamjed", "mohammed", "samira", "john", "dima", "kalixewi", "yassine",
                    "khadija", "ali", "karoui", "mark"]

var all_professors = []
for (var i = 0 ; i < allProfessorNames.length ; i++ ){
    all_professors.push(new Professor(i , allProfessorNames[i]))
}

all_professors[6].remove_time([22 , 32 , 33 , 44, 45])
console.log(all_professors[6].getProfSlots())

var allCourses = [["asma" , "fresh1" , "math1",4], ["sami" , "fresh1" , "phy1",4], ["firas" , "fresh1" , "eng1",4],
            ["lamjed" , "fresh1" , "cs1",3], ["mohammed" , "fresh1" , "iss1",3], ["samira" , "fresh1" , "df1",3],

            ["asma" , "fresh2" , "math1",4], ["sami" , "fresh2" , "phy1",4], ["firas" , "fresh2" , "eng1",4],
            ["lamjed" , "fresh2" , "cs1",3], ["mohammed" , "fresh2" , "iss1",3], ["samira" , "fresh2" , "df1",3],

            ["asma" , "fresh3" , "math1",4], ["sami" , "fresh3" , "phy1",4], ["firas" , "fresh3" , "eng1",4],
            ["lamjed" , "fresh3" , "cs1",3], ["mohammed" , "fresh3" , "iss1",3], ["samira" , "fresh3" , "df1",3],
            
            ["asma" , "fresh4" , "math1",4], ["sami" , "fresh4" , "phy1",4], ["firas" , "fresh4" , "eng1",4],
            ["lamjed" , "fresh4" , "cs1",3], ["mohammed" , "fresh4" , "iss1",3], ["samira" , "fresh4" , "df1",3],

            ["asma" , "soph1" , "math2",4], ["sami" , "soph1" , "phy2",4], ["firas" , "soph1" , "eng2",4],
            ["lamjed" , "soph1" , "cs2",3], ["mohammed" , "soph1" , "iss2",3], ["samira" , "soph1" , "df2",3],

            ["asma" , "soph2" , "math2",4], ["sami" , "soph2" , "phy2",4], ["firas" , "soph2" , "eng2",4],
            ["lamjed" , "soph2" , "cs2",3], ["mohammed" , "soph2" , "iss2",3], ["samira" , "soph2" , "df2",3],

            ["asma" , "soph3" , "math2",4], ["sami" , "soph3" , "phy2",4], ["firas" , "soph3" , "eng2",4],
            ["lamjed" , "soph3" , "cs2",3], ["mohammed" , "soph3" , "iss2",3], ["samira" , "soph3" , "df2",3],
            
            ["asma" , "soph4" , "math2",4], ["sami" , "soph4" , "phy2",4], ["firas" , "soph4" , "eng2",4],
            ["lamjed" , "soph4" , "cs2",3], ["mohammed" , "soph4" , "iss2",3], ["samira" , "soph4" , "df2",3],
            //
            ["john" , "junior2" , "math3",4], ["sami" , "junior2" , "phy3",4], ["kalixewi" , "junior2" , "eng3",4],
            ["dima" , "junior2" , "cs3",3], ["dima" , "junior2" , "iss3",3], ["samira" , "junior2" , "df3",3],

            ["john" , "junior3" , "math3",4], ["john" , "junior3" , "phy3",4], ["kalixewi" , "junior3" , "eng3",4],
            ["dima" , "junior3" , "cs3",3], ["mohammed" , "junior3" , "iss3",3], ["samira" , "junior3" , "df3",3],
            
            ["john" , "junior4" , "math3",4], ["kalixewi" , "junior4" , "phy3",4], ["kalixewi" , "junior4" , "eng3",4],
            ["dima" , "junior4" , "cs3",3], ["dima" , "junior4" , "iss3",3], ["kalixewi" , "junior4" , "df3",3]
        ]
var target;
var maxPop;
var mutRate;
var finished = false;


let population = new Population(allCourses, all_professors, 0 , 1000);
for (let i = 0 ; i < 1000 ; i++){
    population.naturalSelection();
    population.generateGens(allCourses  , all_professors);
    population.calcMaxFitness();

}

for (var j = 0 ; j < population.population[999].genes.length ; j++){
    console.log(population.population[999].genes[j])
}
console.log(population.generations)


/*
let dna1 = new DNA(allCourses)
console.log("DNA 1------------------------------------------")
for (var i = 0 ; i< dna1.genes.length ;i++){
    console.log(dna1.genes[i]);
}
console.log(dna1.checkFit());

let dna2 = new DNA(allCourses)
console.log("DNA 2 ----------------------------------------------------")
for (var i = 0 ; i< dna2.genes.length ;i++){
    console.log(dna2.genes[i]);
}
console.log(dna2.checkFit());


dna3 = dna1.crossover(dna2 , allCourses)
console.log("DNA 3 ----------------------------------------------------")
for (var i = 0 ; i< dna3.genes.length ;i++){
    console.log(dna3.genes[i]);
}
console.log(dna3.checkFit());
*/



