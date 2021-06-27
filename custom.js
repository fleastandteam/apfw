let getAllInputs = document.querySelectorAll('.wapf-field-input input[type=number]');
let getAllInputValues = document.querySelectorAll('.wapf-field-input input[type=number]');

getAllInputs.forEach(getHtmlStuff);

function getHtmlStuff(value) {
    value.addEventListener("input", function(e) {
        e.preventDefault();
        
        sumTotal();
    });
}

function sumTotal() {
    let sumValue = document.querySelectorAll('.wapf-field-input input[type=number]');
    let currentTotal = 0;
    for (let i = 0; i < sumValue.length; i++) {
        if (parseInt(sumValue[i].value)) {
            currentTotal += parseInt(sumValue[i].value);
        }
    }
    
    const displayBagelTotal = document.querySelector('#bagel-total');
    displayBagelTotal.innerHTML = '<div style="margin: 200px;"></div>';

    if (currentTotal === 1) {
        displayBagelTotal.innerHTML = '<span style="margin-top: 20px; background-color: #eee; padding: 8px 50px; border-radius:5px;">' + currentTotal + ' ' + 'Total bagel </span>';
    } else {
        displayBagelTotal.innerHTML = '<span style="margin-top: 20px; background-color: #eee; padding: 8px 50px; border-radius:5px;">' + currentTotal + ' ' + 'Total bagels </span>';
    }
}

for (let i = 0; i < getAllInputValues.length; i++) {
    getAllInputValues[i].max = "12";
        if (getAllInputValues[i].value > 12) {
        alert("No more!");
    };
}