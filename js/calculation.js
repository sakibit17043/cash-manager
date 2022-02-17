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
   totalExpensesValue =foodValue+rentValue+clothesValue;
   totalExpenses.innerText=totalExpensesValue;
   // balance calculation 
   const balance =incomeValue -totalExpensesValue;
   document.getElementById("balance").innerText=balance;

})
// save button event handle 
document.getElementById("save-input").addEventListener("click",function(){
   const saveValue =document.getElementById("")
})