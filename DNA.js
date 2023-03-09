

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
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


var availableSlots = [21, 22, 23, 24, 25, 26, 27, 28,29, 31, 32, 33, 34, 35, 36, 37, 38, 39, 41, 42, 43, 44, 45, 46, 47, 48,49, 51, 52, 53, 54,
    55, 56, 57, 58,59, 61, 62, 63, 64, 65, 66, 67, 68,69]


//this function will not be used anymore
function newSession(oneCourse , professor) {
    
    var session = [];
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
    var session = [];
    var courseCredit = oneCourse[3]
    var profName= oneCourse[0]
    var className = oneCourse[1]
    var courseName = oneCourse[2]
    var slotIndex = randomIntFromInterval(0, professor.getProfSlots().length -1)
    
        session = [profName , className , courseCredit , courseName , professor.getProfSlots()[slotIndex]]
    
        return session;
    }

// for courses that should be divided on 2 sessions per week. example geography is 4 hours/week : 2 hours + 2 hours-> 2 sessions
function new2Session(oneCourse , professor){

    var session = [];
    var courseCredit = oneCourse[3]
    var profName= oneCourse[0]
    var className = oneCourse[1]
    var courseName = oneCourse[2]
    var slotIndex = randomIntFromInterval(0, professor.getProfSlots().length -1)
    
        if (courseCredit == 4 || courseCredit == 2 || courseCredit == 3){
            session.push([profName , className , courseCredit/2 , courseName , professor.getProfSlots()[slotIndex]])
            session.push([profName , className , courseCredit/2 , courseName , professor.getProfSlots()[slotIndex]])
        }
        if (courseCredit == 2.5){
            session.push([profName , className , 1.5 , courseName , professor.getProfSlots()[slotIndex]])
            session.push([profName , className , 1 , courseName , professor.getProfSlots()[slotIndex]])
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
    let slotIndex = randomIntFromInterval(0, professor.getProfSlots().length -1)
    

        session.push([profName , className , 2 , courseName , professor.getProfSlots()[slotIndex]])
        session.push([profName , className , 2 , courseName , professor.getProfSlots()[slotIndex]])
        session.push([profName , className , 1 , courseName , professor.getProfSlots()[slotIndex]])
    
        return session;
    }




function sortFunction(a, b) {
    if (a[4] === b[4]) {
        return 0;
    }
    else {
        return (a[4] < b[4]) ? -1 : 1;
    }
}


class DNA{
    constructor(allCourses , allProfessors){
        this.genes = [];
        this.fitness = 0;
    
        // Filling a timetable with sessions
        for (var i = 0; i < allCourses.length; i++) {

                for(var j = 0 ; j < allProfessors.length ; j++){
                    
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
        var conflicts = 0;
        for (var i = 0 ; i < this.genes.length -1; i++){
            for(var j = i +1 ; j <this.genes.length ; j++){
                //Same professor in two times
                if (this.genes[i][0] == this.genes[j][0] && this.genes[i][4] == this.genes[j][4] ){
                    conflicts = conflicts + 1 
                }
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
    crossover(partner , allCourses , allProfessors) {
        var index = Math.floor((Math.random())*this.genes.length);
        //console.log(index);
        var child = new DNA(allCourses , allProfessors);
        for (var i = 0; i < this.genes.length; i++) {
            if (i > index) {
                child.genes[i] = this.genes[i];
            }
            else {
                child.genes[i] = partner.genes[i];
            }
        }
        return child;
    }

    // Mutate a timetable to make a random change to a session given a mutation rate.
    // example 0.01% chance for a child timetable to have a session that is not there in any of his parents
    mutate(mutRate){
        for(var i=0; i<this.genes.length; i++){
            if(Math.random(1) < mutRate){
                var slotIndex1 = randomIntFromInterval(21, 68)
                this.genes[i][4] =  slotIndex1  //availableSlots[slotIndex];
            }
        }
    }
}
module.exports = { DNA}
//export default DNA;