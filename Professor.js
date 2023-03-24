class Professor{

    constructor(id , name){
        this.name = name
        this.id = id
        this.availableSlots = [  211, 212, 221, 222, 231, 232, 241, 242, 251, 252, 261,  262, 271, 272, 281, 282, 291, 292, 311, 312, 321, 322,  331, 332, 341, 342, 351, 352, 361, 362, 371, 372, 381,  382, 391, 392, 411, 412, 421, 422, 431, 432, 441, 442,  451, 452, 461, 462, 471, 472, 481, 482, 491, 492, 511,  512, 521, 522, 531, 532, 541, 542, 551, 552, 561, 562,  571, 572, 581, 582, 591, 592, 611, 612, 621, 622, 631,  632, 641, 642, 651, 652, 661, 662, 671, 672, 681, 682,  691, 692]

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