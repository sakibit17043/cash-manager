function getInputValue(idName){
   const inputValueText= document.getElementById(idName).value;
   const inputValueAmount =parseFloat(inputValueText);
   
   return inputValueAmount;
}
// calculate button event handle
document.getElementById("calculate-button").addEventListener("click",function(){
   const incomeValue =getInputValue("income-input");
   let isnegative =false;
   if(incomeValue<0){
   alert("please give a positive income value");
   isnegative =true;
   }
   const foodValue =getInputValue("food-input");
   if(foodValue<0){
   alert("please give a positive food value");
   isnegative =true;
   }
   const rentValue =getInputValue("rent-input");
   if(rentValue<0){
   alert("please give a positive rent value");
   isnegative =true;
   }
   const clothesValue =getInputValue("clothes-input");
   if(clothesValue<0){
   alert("please give a positive clothes value");
   isnegative =true;
   }
   const totalExpenses =document.getElementById("total-expenses");
   const totalExpensesValue =foodValue+rentValue+clothesValue;
   if(isnegative==false){
   if(totalExpensesValue>incomeValue)
   alert("You can't expense more than your income");
   else{
   totalExpenses.innerText=totalExpensesValue;
   // balance calculation 
   const balance =incomeValue-totalExpensesValue;
   document.getElementById("balance").innerText=balance;
   }
}
})
// save button event handle 
document.getElementById("save-button").addEventListener("click",function(){
   
   const savevalueNumber =getInputValue("save-input");
   let ispositive=true
   if(savevalueNumber<0){
   alert("please give a positive savings value");
   ispositive=false
   }
   if(ispositive==true){
   const savingPercentage =savevalueNumber/100;
   const incomeAmount =getInputValue("income-input");
   

   const balanceText =document.getElementById("balance").innerText;
   const balanceAmount =parseFloat(balanceText);
   // saving calculation error handeling 
   
   
   const savingAmount =savingPercentage*incomeAmount;
   if(savingAmount>balanceAmount)
   alert("You have not enough money for save");
   else{
   document.getElementById("saving-amount").innerText=savingAmount;
      // remaining balance calculation 

   const remainingBalanceAmount =balanceAmount-savingAmount;
   document.getElementById("remaining-balance").innerText=remainingBalanceAmount;
   }
}






})