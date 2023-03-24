

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  function getRandomValueFromArray(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }


var allClassNames = ["fresh1", "fresh2", "fresh3", "fresh4", "soph1", "soph2", "soph3", "soph4", "juniorSE1", "juniorSE2",
            "juniorCSE1", "juniorCSE2", "juniorRE1", "seniorSE1", "seniorSE2","seniorCSE1", "seniorCSE2", "seniorRE1",
            "finalSE1", "finalSE2","finalCSE1", "finalCSE2", "finalRE1" ]

var allClasses = []
//for(i =0 ; i< allClassNames.length; i++){
    //allClasses.push(Class(i , allClassNames[i]))
//}

var allProfessorNames = ["asma" ,"sami", "firas", "lamjed", "mohammed", "samira", "mariem", "sirine", "houssem", "yassine",
                    "khadija", "ali", "karoui", "mark"]

//var allProfessors = []
//for(j =0 ; j< allProfessorNames.length; j++){
    //allProfessors.push(Professor(j , allProfessorNames[j]))
//}

// all courses are in the form : professor A teaches class B course C , amount of hours per week X


var availableSlots = [  211, 212, 221, 222, 231, 232, 241, 242, 251, 252, 261,  262, 271, 272, 281, 282, 291, 292, 311, 312, 321, 322,  331, 332, 341, 342, 351, 352, 361, 362, 371, 372, 381,  382, 391, 392, 411, 412, 421, 422, 431, 432, 441, 442,  451, 452, 461, 462, 471, 472, 481, 482, 491, 492, 511,  512, 521, 522, 531, 532, 541, 542, 551, 552, 561, 562,  571, 572, 581, 582, 591, 592, 611, 612, 621, 622, 631,  632, 641, 642, 651, 652, 661, 662, 671, 672, 681, 682,  691, 692]



//this function will not be used anymore
function newSession(oneCourse , professor) {
    
    let session = [];
    var courseCredit = oneCourse[3]
    var profName= oneCourse[0]
    var className = oneCourse[1]
    var courseName = oneCourse[2]
    var slotIndex = randomIntFromInterval(0, professor.getProfSlots().length -1)
    if (courseCredit ==4 ){
        session = [profName , className , 2 , courseName , professor.getProfSlots()[slotIndex]]
    }
    if (courseCredit ==3 ){
        session = [profName , className , 1.5 , courseName , professor.getProfSlots()[slotIndex]]
    }
    if (courseCredit ==2 ){
        session = [profName , className , 1 , courseName , professor.getProfSlots()[slotIndex]]
    }
    if (courseCredit ==5 ){
        session = [profName , className ,2 , courseName , professor.getProfSlots()[slotIndex]]
    }
    if (courseCredit ==1.5 ){
        session = [profName , className , 0.75 , courseName , professor.getProfSlots()[slotIndex]]
    }
    if (courseCredit ==2.5 ){
        session = [profName , className , 1.25 , courseName , professor.getProfSlots()[slotIndex]]
    }
    if (courseCredit ==1 ){
        session = [profName , className , 0.5 , courseName , professor.getProfSlots()[slotIndex]]
    }
        return session;
    }

// // for courses that should be divided on 1 session per week. example arts is 1 hour/week : 1 hours -> 1 session
function new1Session(oneCourse , professor){
    let session = [];
    let courseCredit = oneCourse[3]
    let profName= oneCourse[0]
    let className = oneCourse[1]
    let courseName = oneCourse[2]
    let slotIndex = randomIntFromInterval(0, professor.getProfSlots().length -1  - courseCredit*2)
    
        session = [profName , className , courseCredit , courseName , professor.getProfSlots()[slotIndex]]
    
        return session;
    }

// for courses that should be divided on 2 sessions per week. example geography is 4 hours/week : 2 hours + 2 hours-> 2 sessions
function new2Session(oneCourse , professor){

    let session = [];
    let courseCredit = oneCourse[3]
    let profName= oneCourse[0]
    let className = oneCourse[1]
    let courseName = oneCourse[2]
    let slotIndex = randomIntFromInterval(0, professor.getProfSlots().length -1  - courseCredit*2)
    
        if (courseCredit == 4 || courseCredit == 2 || courseCredit == 3){

            session.push([profName , className , courseCredit/2 , courseName , professor.getProfSlots()[slotIndex]])
            session.push([profName , className , courseCredit/2 , courseName , professor.getProfSlots()[slotIndex+1]])
        }
        if (courseCredit == 2.5){
            session.push([profName , className , 1.5 , courseName , professor.getProfSlots()[slotIndex]])
            session.push([profName , className , 1 , courseName , professor.getProfSlots()[slotIndex+1]])
        }

        return session;
    }

// for courses that should be divided on 3 sessions per week. example math is 5 hours/week : 2 hours + 2 hours + 1 hour -> 3 sessions
function new3Session(oneCourse , professor){
    let session = [];
    let courseCredit = oneCourse[3]
    let profName= oneCourse[0]
    let className = oneCourse[1]
    let courseName = oneCourse[2]
    let slotIndex = randomIntFromInterval(0, professor.getProfSlots().length -1 - courseCredit*2)
    

        session.push([profName , className , 2 , courseName , professor.getProfSlots()[slotIndex]])
        session.push([profName , className , 2 , courseName , professor.getProfSlots()[slotIndex+1]])
        session.push([profName , className , 1 , courseName , professor.getProfSlots()[slotIndex+2]])
    
        return session;
    }




function sortFunction(a, b) {
    if (a[0] === b[0]) {
        return 0;
    }
    else {
        return (a[0] < b[0]) ? -1 : 1;
    }
}


class DNA{
    constructor(allCourses , allProfessors){
        this.genes = [];
        this.fitness = 0;
    
        // Filling a timetable with sessions
        for (let i = 0; i < allCourses.length; i++) {

                for(let j = 0 ; j < allProfessors.length ; j++){
                    
                    if(allProfessors[j].getProfName() == allCourses[i][0]){
                        var professor = allProfessors[j]
                    }
                }

                if(allCourses[i][3] == 1 || allCourses[i][3] == 1.5){
                    this.genes.push(new1Session(allCourses[i] , professor));
                }
                if(allCourses[i][3] == 2 || allCourses[i][3] == 2.5 || allCourses[i][3] == 3 || allCourses[i][3] == 4){ 
                    let tmp = new2Session(allCourses[i] , professor);
                    this.genes.push(tmp[0]);
                    this.genes.push(tmp[1]);
                }

                if(allCourses[i][3] == 5){
                    let tmp = new3Session(allCourses[i] , professor);
                    this.genes.push(tmp[0]);
                    this.genes.push(tmp[1]);
                    this.genes.push(tmp[2]);
                }
        }
        this.genes.sort(sortFunction);
        
    }

    getFitness(){
        return this.fitness;
    }


    // Calculate timetable fitness score , the fewer the conflicts in the timetable the better the score
    checkFit() {
        let conflicts = 0;
        for (let i = 0 ; i < this.genes.length -1; i++){
            for(let j = i +1 ; j <this.genes.length ; j++){
                //Same professor in two times
                if (this.genes[i][0] == this.genes[j][0] && this.genes[i][4] == this.genes[j][4] ){
                    conflicts = conflicts + 1 
                }

                //Same class in two times
                if (this.genes[i][1] == this.genes[j][1] && this.genes[i][4] == this.genes[j][4] ){
                    conflicts = conflicts + 1 
                }

                
            }
            //const items = this.genes.filter(item => item[4] == this.genes[i][4]);
            //conflicts = items.length
        }

        if(conflicts == 0){
            this.fitness = 100
        }else{
            this.fitness = (1/conflicts)
        }
        
        return this.fitness;
    }

    // Crossover of two timetables to generate a child timetable that has parts from each parent
    crossover1(partner , allCourses , allProfessors) {
        let index = Math.floor((Math.random())*this.genes.length);
        //console.log(index);
        let child = new DNA(allCourses , allProfessors);
        for (let i = 0; i < this.genes.length; i++) {

            // 
            if (i > index) {
                child.genes[i] = this.genes[i];
            }
            else {
                child.genes[i] = partner.genes[i];
            }
        }
        return child;
    }


    // Crossover of two timetables using arithmetic crossover
crossover2(partner , allCourses , allProfessors) {
    var child = new DNA(allCourses , allProfessors);
    for (var i = 0; i < this.genes.length; i++) {
        // Generate a random alpha value between 0 and 1 for each gene position
        var alpha = Math.random();
        // Create a linear combination of the parents using the formula
        var gene = alpha * this.genes[i] + (1 - alpha) * partner.genes[i];
        child.genes[i] = gene;
    }
    return child;
}

//**************0.005208333333333333

// Crossover of two timetables to generate a child timetable that has parts from each parent
 crossover3(partner, allCourses, allProfessors, eliteSize=2, crossoverProb=0.5) {
    var child = new DNA(allCourses, allProfessors);
    var crossoverPoints = [];
    
    // Determine crossover points
    for (var i = 0; i < eliteSize; i++) {
      var point = Math.floor(Math.random() * this.genes.length);
      crossoverPoints.push(point);
    }
    
    // Sort crossover points in ascending order
    crossoverPoints.sort();
    
    // Copy elite genes from both parents
    for (var i = 0; i < eliteSize; i++) {
      child.genes[crossoverPoints[i]] = this.genes[crossoverPoints[i]];
    }
    for (var i = eliteSize; i < this.genes.length; i++) {
      // Perform crossover with probability crossoverProb
      if (Math.random() < crossoverProb) {
        // Copy genes from partner
        child.genes[i] = partner.genes[i];
      } else {
        // Copy genes from this parent
        child.genes[i] = this.genes[i];
      }
    }
    
    return child;
  }
 // *********** 0.0067/0.006493506493506494
crossover4(partner , allCourses , allProfessors) {
    var child = new DNA(allCourses , allProfessors);
    for (var i = 0; i < this.genes.length; i++) {
        // Randomly select a bit from either parent with equal probability
        var bit = Math.random() < 0.5 ? this.genes[i] : partner.genes[i];
        child.genes[i] = bit;
    }
    return child;
}
//************0.0064516129032258064


    // Mutate a timetable to make a random change to a session given a mutation rate.
    // example 0.01% chance for a child timetable to have a session that is not there in any of his parents
    mutate(mutRate){
        for(let i=0; i<this.genes.length; i++){
            if(Math.random(1) < mutRate){
                let slotIndex1 = getRandomValueFromArray(availableSlots);
                this.genes[i][4] =  slotIndex1  //availableSlots[slotIndex];
            }
        }
    }
}
module.exports = { DNA}
//export default DNA;