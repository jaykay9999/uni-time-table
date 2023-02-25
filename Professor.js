class Professor{

    constructor(id , name){
        this.name = name
        this.id = id
        this.availableSlots = [21, 22, 23, 24, 25, 26, 27, 28, 31, 32, 33, 34, 35, 36, 37, 38, 41, 42, 43, 44, 45, 46, 47, 48, 51, 52, 53, 54,
        55, 56, 57, 58, 61, 62, 63, 64, 65, 66, 67, 68]
    }


    remove_time(x){
        let filteredSlots = this.availableSlots ;
        for (let i = 0 ; i < x.length ; i++ ){
            //this.availableSlots.pop(x[i]);
         
            const result = filteredSlots.filter(function (letter) {
                return letter !== x[i];
            });

            filteredSlots = result;
        }
        this.availableSlots = filteredSlots;
    }


    getProfName(){
        return this.name;
    }


    getProfSlots(){
        return this.availableSlots;
    }
}

module.exports = { Professor}