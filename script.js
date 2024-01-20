function fizzBuzz(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        return 'FizzBuzz';
    } else if (number % 3 === 0) {
        return 'Fizz';
    } else if (number % 5 === 0) {
        return 'Buzz';
    } else {
        return number.toString();
    }
}

function processNumbers(numbers, outputId) {
    const outputDiv = document.getElementById(outputId);
    outputDiv.innerHTML = '';

    let index = 0;

    function displayNextNumber() {
        if (index < numbers.length) {
            const number = numbers[index];
            const result = fizzBuzz(number);
            const div = document.createElement('div');

            div.textContent = result;
            outputDiv.appendChild(div);

            div.classList.add('result', result.toLowerCase());

            setTimeout(() => {
                div.classList.add('visible');
                index++;
                displayNextNumber();
            }, 1000);
        }
    }

    displayNextNumber();
}

function startManual() {
    const input = document.getElementById('manualNumbers');
    const manualNumbers = input.value.split(',').map(num => parseInt(num.trim(), 10));
    processNumbers(manualNumbers, 'output');
}

function startRandom() {
    const countInput = document.getElementById('randomCount');
    const randomCount = parseInt(countInput.value, 10);
    const randomNumbers = Array.from({ length: randomCount }, () => {
        return Math.floor(Math.random() * 50) + 1;
    });

    const randomNumbersSection = document.getElementById('randomNumbers');
    randomNumbersSection.textContent = randomNumbers.join(', ');

    processNumbers(randomNumbers, 'output');
}
