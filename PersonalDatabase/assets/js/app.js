let personProfile = {
    firstName: "",
    lastName: "",
    birthYear: "",
    job: "",
    age: "",
    isEligibleToVote: false,
    familyMembers: [],
    weight: "",
    height: "",
    ageCalc:function(){
        return this.age = new Date().getFullYear() - this.birthYear;
    },
    checkVote:function(){
        let tempAge=this.ageCalc();
        if (tempAge >=18){
            this.isEligibleToVote=true;
        }else{this.isEligibleToVote=false;}
        return this.isEligibleToVote

        },
    calcBmi: function() {
            return (this.weight)/((this.height)*(this.height))
        }

    }
    personProfile.firstName = prompt("Enter Your First Name");
    personProfile.lastName = prompt("Enter Your Last Name");
    personProfile.birthYear = prompt("Enter Your Birth Date");
    personProfile.weight = prompt("Enter Your weight");
    personProfile.height = prompt("Enter Your height");
    
    console.log(personProfile.ageCalc(),personProfile.checkVote(),personProfile.calcBmi())

