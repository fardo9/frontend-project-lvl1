import readlineSync from 'readline-sync';

export function callName () {
    const userName = readlineSync.question('May I have your name? ');
    console.log('Hell ' + userName + '!');
}


