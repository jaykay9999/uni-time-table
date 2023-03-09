const { DNA} = require('./DNA');

function sortFunction1(a, b) {
    if (a.getFitness() === b.getFitness()) {
        return 0;
    }
    else {
        return (a.getFitness() < b.getFitness()) ? -1 : 1;
    }
}

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

class Population{

    constructor(allCourses, allProfessors, mutRate , maxPop){
        this.population = [];
        this.maxFitness = 0;
        this.matingPool = [];
        this.mutRate = mutRate;
        this.maxPop = maxPop;
        this.bestDNA;
        this.generations = 0;
        for (var i = 0; i < this.maxPop; i++) {
            this.population[i] = new DNA(allCourses , allProfessors);
        }


    }
    



    calcMaxFitness() {
        for (var i = 0; i < this.maxPop; i++) {
            if (this.population[i].checkFit() > this.maxFitness) {
                console.log(this.population[i].checkFit());
                this.maxFitness = this.population[i].checkFit();
                //this.bestDNA = this.population[i].phenotype();
            }
        }
        console.log(this.maxFitness);
        return this.maxFitness;
        
    }


    naturalSelection() {
        this.matingPool = [];
        var maxFit = this.calcMaxFitness();
        this.population.sort(sortFunction1);
        //for (var i = 0; i < this.population.length; i++) {
        //var fitness = map(this.population[i].fitness, 0, maxFit, 0, 1);
        //var n = floor(fitness * 100);
        for (var j = 0; j < 40; j++) {
            this.matingPool.push(this.population[this.maxPop - j - 1]);
        }
        //}
    }


    generateGens(allCourses , allProfessors) {
        for (var i = 0; i < this.population.length; i++) {
            var indexA = randomIntFromInterval(0, this.matingPool.length -1);
            var indexB = randomIntFromInterval(0, this.matingPool.length -1);
            var a = this.matingPool[indexA];
            var b = this.matingPool[indexB];
            var child = a.crossover(b, allCourses , allProfessors);
            child.mutate(this.mutRate);
            this.population[i] = child;
        }
        this.generations += 1;

    }


    allPhrases() {
        let everything = "";

        for (let i = this.population.length - 1; i >= this.population.length - 50; i--) {
        everything += this.population[i].phenotype() + "<br>";
        }
        return everything;
    }
}

module.exports = {Population};