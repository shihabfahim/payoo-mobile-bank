//login button functionalities

document.getElementById('loginButton').addEventListener('click',function(e){
    e.preventDefault();
    // console.log('login button clicked');

    const mobileNumber = 12345678910;
    const pinNumber = 1234;

    const mobileNumberValue = document.getElementById('number-input').value;

    const mobileNumberValueConverted = parseInt(mobileNumberValue);
    const pinNumberValue =document.getElementById('pin-input').value;

    const pinNumberValueConverted = parseInt(pinNumberValue);

    // console.log(mobileNumberValueConverted,pinNumberValueConverted);  


    if(mobileNumberValueConverted === mobileNumber && pinNumberValueConverted === pinNumber){
        // console.log('All values matched');

        window.location.href = "./home.html"
    }
    else{

        //  console.log('invalid credentials');
        alert("invalid credentials")
    }
})