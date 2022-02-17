function getInputValue(idName){
   const inputValueText= document.getElementById(idName).value;
   const inputValueAmount =parseFloat(inputValueText);
   return inputValueAmount;
}
// calculate button event handle
document.getElementById("calculate-button").addEventListener("click",function(){
   const incomeValue =getInputValue("income-input");
   const foodValue =getInputValue("food-input");
   const rentValue =getInputValue("rent-input");
   const clothesValue =getInputValue("clothes-input");
   const totalExpenses =document.getElementById("total-expenses");
   const totalExpensesValue =foodValue+rentValue+clothesValue;
   totalExpenses.innerText=totalExpensesValue;
   // balance calculation 
   const balance =incomeValue -totalExpensesValue;
   document.getElementById("balance").innerText=balance;

})
// save button event handle 
document.getElementById("save-button").addEventListener("click",function(){
   const saveValueText =document.getElementById("save-input").value;
   const savevalueNumber =parseFloat(saveValueText)
   const savingPercentage =savevalueNumber/100;
   const incomeAmount =getInputValue("income-input");
   const savingAmount =savingPercentage*incomeAmount;
   document.getElementById("saving-amount").innerText=savingAmount;




})