import { getInput, info, setFailed, setOutput } from "@actions/core";
import isEven from 'is-even';

async function run() {
    const number = getInput('number');

    const parsedNumber = parseInt(number, 10);
    
    if (isNaN(parsedNumber)) {
        setFailed('Input is not a number')
    }


    const numberIsEven = isEven(parsedNumber);

    info(`The number ${parsedNumber} is even: ${numberIsEven}`);

    setOutput('is_even', numberIsEven);
};

run();