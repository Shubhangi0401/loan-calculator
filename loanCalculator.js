// define UI variables
const form = document.querySelector('#main-box');
const amount = document.querySelector('#amount');
const interest = document.querySelector('#interest');
const years = document.querySelector('#years');
const monthPay = document.querySelector('#month-pay');
const totalPay = document.querySelector('#total-pay');
const totalInterest = document.querySelector('#total-interest');

//load all event listeners
loadEventListeners();

function loadEventListeners() {
    // on submit
    form.addEventListener('submit', function (e) {
        //hide results
        document.getElementById('results').style.display = 'none';

        //show loader
        document.getElementById('loading').style.display = 'flex';

        setTimeout(calculateResult, 1000);

        e.preventDefault();
    });
}

//calculate result
function calculateResult() {
    console.log('Calculating....');

    const principal = parseFloat(amount.value);
    const rate = parseFloat(interest.value);
    const time = parseFloat(years.value);

    const si = (principal * rate * time) / 100;
    const totalAmount = principal + si;
    const totalMonthlyAmount = totalAmount / 12;

    if (isFinite(totalMonthlyAmount)) {
        monthPay.value = totalMonthlyAmount.toFixed(2);
        totalPay.value = totalAmount.toFixed(2);
        totalInterest.value = si.toFixed(2);

        //show results
        document.getElementById('results').style.display = 'block';

        //hide loader
        document.getElementById('loading').style.display = 'none';

    } else {
        showError('Please Check Your Numbers.');
    }
}

//Show Error
function showError(error) {

    //hide results
    document.getElementById('results').style.display = 'none';
    //hide loader
    document.getElementById('loading').style.display = 'none';
    //create a div
    const errorDiv = document.createElement('div');
    //get elements
    const card = document.querySelector('.input-content');
    const heading = document.querySelector('h2');

    //add class
    errorDiv.className = 'alert';

    //create text node and append to div
    errorDiv.appendChild(document.createTextNode(error));

    //error above heading
    card.insertBefore(errorDiv, heading);

    //clear after 3 sec
    setTimeout(clearError, 3000);
}

//clear error
function clearError() {
    document.querySelector('.alert').remove();
}
