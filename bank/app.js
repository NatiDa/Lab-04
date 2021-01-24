let info ={
    

   

    deposit:function(){
        amount=parseFloat(prompt("How much money you wish to deposit"))
        this.initialBalance = this.initialBalance + amount;
         console.log(amount+" birr has been deposited into your account")
    },
    withdraw:function(){
            amount=parseFloat(prompt("How much money you wish to withdraw"))
            if (this.minWithdraw > amount) 
            { console.log("Minimum ammount to withdraw is 100.00 birr") }
            if(amount>this.maxWithdraw){console.log("Maximum amount to withdraw is 100,000.00 birr")}
            else{
            if (amount > this.initialBalance) console.log("Insufficent funds")
            else{          
            this.balance = this.initialBalance - amount;
            console.log("You've withdrawn "+amount +" birr")
            }}
        },
    balance:function(){
            console.log(( "Your current balance is:" + this.initialBalance))
            return this.initialBalance
        },
    transfer:function(){     
            amount = parseFloat(prompt("Enter the amount you want to transfer"));
            reciever = parseInt(prompt("Enter the account number of the person you want to send to"));
            if(amount>this.initialBalance){
                console.log("Insufficient funds")
            } 
            else{
            this.initialBalance= this.initialBalance- amount;
            console.log("You have transferred "+amount+" to "+reciever )}  
        },
    
    }
    
    while(true){
    var  person= info
    var choice = prompt("Choose service no please\n1 for initial deposit\n2 for deposit\n3 for withdraw\n4 for transfer\n5 to see balance\n0 to cancel operation")
    if (choice == 1){ person.account();}
    if (choice == 2){person.deposit();}
    if (choice == 3){person.withdraw();}
    if (choice == 4){person.transfer();}
    if (choice == 5){person.balance();}
    if(choice==0){break}
}
       
   
        
    



