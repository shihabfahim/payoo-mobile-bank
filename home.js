// console.log('home js file connected');

document.getElementById("add-money-btn").addEventListener('click',function(e){
    e.preventDefault();
    // console.log('add money btn clicked');

    const bank = document.getElementById('bank').value
    const accountNumber = document.getElementById('account-number').value
    const amount = parseInt(document.getElementById('add-ammount').value)
    const pin = document.getElementById('add-pin').value

    // console.log(bank,accountNumber,amount,pin);

    const availableBalance = parseInt(document.getElementById('available-balance').innerText)

    console.log(availableBalance);

    const totalNewAvailableBalance = amount+availableBalance

    document.getElementById('available-balance').innerText = totalNewAvailableBalance

})