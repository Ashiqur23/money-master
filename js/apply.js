function StringToNumber(InputId){
    const income = document.getElementById(InputId);
    const incomeString = income.value;
    const incomeValue = parseInt(incomeString);
    return incomeValue
}
function totalExpenses(income, food, resnt, closthes){
    const incomeValue = income;
    const foodValue = food;
    const rentValue = resnt;
    const closthesValue = closthes;
    const totalExpenses = document.getElementById('Total-Expenses');
    const totalExpensesValue = parseInt(foodValue + rentValue + closthesValue);
    if(isNaN(incomeValue)){
        return
    }
    if(isNaN(foodValue)){
        return
    }
    if(isNaN(rentValue)){
        return
    }
    if(isNaN(closthesValue)){
        return
    }
    else{
        totalExpenses.innerText = totalExpensesValue;
        const balance = document.getElementById('Balance');
        balance.innerText = parseInt(incomeValue - totalExpensesValue);
    }
}
function remindingBalance(InputValue){
    const incomeValue =  StringToNumber('Income');
    if(isNaN(incomeValue)){
        return;
    }
    const SavingAmount = document.getElementById('Saving-Amount');
    const remindingAmount = InputValue;
    const sav = parseInt((incomeValue * remindingAmount) / 100);
    SavingAmount.innerText = sav;
    const RemainingBalance = document.getElementById('Remaining-Balance');
    const balance = document.getElementById('Balance');
    const balanceString = balance.innerText;
    const balanceValue = parseInt(balanceString);
    if(balanceValue === 0){
        return;
    }
    else{
        RemainingBalance.innerText = parseInt(Math.abs(sav - balanceValue));
    }
}
// Calculate button
document.getElementById('Calculate').addEventListener('click', function(){
    const incomeValue =  StringToNumber('Income');
    const foodValue = StringToNumber('food');
    const rentValue = StringToNumber('Rent');
    const closthesValue = StringToNumber('Closthes');
    const incomeError = document.getElementById('income-error');
    const foodError = document.getElementById('food-error');
    const restError = document.getElementById('rest-error');
    const ClosthesError = document.getElementById('Closthes-error');
    if(isNaN(incomeValue) === true){
        incomeError.style.display = 'block';
    }
    else if(typeof incomeValue === "number"){
        incomeError.style.display = 'none';
    }
    if(isNaN(foodValue)){
        foodError.style.display = 'block';
    }
    else if(typeof foodValue === "number"){
        foodError.style.display = 'none';
    }
    if(isNaN(rentValue)){
        restError.style.display = 'block';
    }
    else if(typeof rentValue === "number"){
        restError.style.display = 'none';
    }
    if(isNaN(closthesValue)){
        ClosthesError.style.display = 'block';
    }
    else if(typeof closthesValue === "number"){
        ClosthesError.style.display = 'none';
    }
    const expenses = foodValue + rentValue + closthesValue;
    if(expenses < incomeValue){
        totalExpenses(incomeValue, foodValue, rentValue, closthesValue);
    }
})
// saveing button 
document.getElementById('save-btn').addEventListener('click', function(){
    const savingAmount = StringToNumber('save-input');
    if(isNaN(savingAmount)){
        return;
    }
    else if(typeof savingAmount === "number"){
        remindingBalance(savingAmount);
    }
})