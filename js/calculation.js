function getInputValue(idName){
   const inputValueText= document.getElementById(idName).value;
   // for empty field error handeling 
   if(inputValueText=="")
   return "empty";
   const inputValueAmount =parseFloat(inputValueText);
    return inputValueAmount;
}
// calculate button event handle
document.getElementById("calculate-button").addEventListener("click",function(){
   const incomeValue =getInputValue("income-input");
   let isEmpty =false;
   if(incomeValue=="empty"){
   alert("please put a value in income field");
   isEmpty =true;
   }
   // for negative number error handeling 
   let isNegative =false;
   if(incomeValue<0){
   alert("please give a positive income value");
   isNegative =true;
   }
   const foodValue =getInputValue("food-input");
   if(foodValue=="empty"){
      alert("please put a value in food field");
      isEmpty =true;
      }
   if(foodValue<0){
   alert("please give a positive food value");
   isNegative =true;
   }
   const rentValue =getInputValue("rent-input");
   if(rentValue=="empty"){
      alert("please put a value in rent field");
      isEmpty =true;
      }
   if(rentValue<0){
   alert("please give a positive rent value");
   isNegative =true;
   }
   const clothesValue =getInputValue("clothes-input");
   if(clothesValue=="empty"){
      alert("please put a value in clothes field");
      isEmpty =true;
      }
   if(clothesValue<0){
   alert("please give a positive clothes value");
   isNegative =true;
   }
   const totalExpenses =document.getElementById("total-expenses");
   const totalExpensesValue =foodValue+rentValue+clothesValue;
   if(isNegative==false && isEmpty==false){
      // income-expense error handeling 
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
   let isSaveEmpty =false;
   if(savevalueNumber=="empty"){
      alert("please put a value in income field");
      isSaveEmpty =true;
      }
   let isPositive=true
   if(savevalueNumber<0){
   alert("please give a positive savings value");
   isPositive=false
   }
   if(isPositive==true && isSaveEmpty==false){
   const savingPercentage =savevalueNumber/100;
   const incomeAmount =getInputValue("income-input");
   const balanceText =document.getElementById("balance").innerText;
   const balanceAmount =parseFloat(balanceText);
   const savingAmount =savingPercentage*incomeAmount;
     // saving calculation error handeling 
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