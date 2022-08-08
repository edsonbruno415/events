'use strict'

const stdin = process.openStdin();

stdin.addListener('data', (input) => {
    console.log('Você digitou:', input.toString().trim());
});

