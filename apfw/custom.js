const getAllInputs = document.querySelectorAll('.wapf-field-input input[type=number]');
const displayBagelTotal = document.querySelector('#bagel-total');
displayBagelTotal.innerHTML = "0 &nbsp; Total Bagels";
const totalMaxQty = 12;

getAllInputs.forEach(getHtmlStuff);
function getHtmlStuff(value) {
	value.addEventListener("input", function(e) {
		// document.querySelector('.wapf-field-input input[type=number]').readOnly = true;
		// console.log(value);
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
        };
    }

    if (currentTotal === 1) {
        displayBagelTotal.innerHTML = `
            <span class="display-total"> ${currentTotal} &nbsp; Total Bagel</span>
        `;
    } else {
        displayBagelTotal.innerHTML = `
            <span class="display-total"> ${currentTotal} &nbsp; Total Bagels</span>
        `;
    }
}

for (let i = 0; i < getAllInputs.length; i++) {
	getAllInputs[i].max = totalMaxQty;
    let getCurrentValue = getAllInputs;
        
    for (let i = 0; i < getCurrentValue.length; i++) {
        let allCurrentValue = getCurrentValue[i];
        let baseValue = parseInt(allCurrentValue.value);
        let currentValue = parseInt(getCurrentValue[i].value);
    }
}