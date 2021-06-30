const getAllInputs = document.querySelectorAll('.wapf-field-input input[type=number]');
const displayBagelTotal = document.querySelector('#bagel-total');
displayBagelTotal.innerHTML = "0 &nbsp; Total Bagels";
const totalMaxQty = 12;

getAllInputs.forEach(allInputs);
function allInputs(value) {
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
        };
    }

	if (currentTotal == totalMaxQty) {
		disableNum()
	}

    if (currentTotal === 1) {
		plural = 'Bagel';
    } else {
		plural = 'Bagels';
    }

	displayBagelTotal.innerHTML = `<span class="display-total"> ${currentTotal} &nbsp; Total ${plural}</span>`;
}

for (let i = 0; i < getAllInputs.length; i++) {
	getAllInputs[i].max = totalMaxQty;

	function disableNum() {
		let getCurrentValue = getAllInputs;
			
		// Trying to limit a total of 12. Disable inputs when totalMaxQty is reached.
		for (let i = 0; i < getCurrentValue.length; i++) {
			let allCurrentValue = getCurrentValue[i];
			let baseValue = parseInt(allCurrentValue.value);
			let currentValue = parseInt(getCurrentValue[i].value);
		}
	}
}


