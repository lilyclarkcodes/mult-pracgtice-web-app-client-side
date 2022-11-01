/*
Goal: Multiplication Practice application for 1-12 multiplication facts
Want to be able to click to find 2 numbers between 1-12
Don't show the product until the second button is clicked, to give time to practice prior
*/


document.querySelector('#rollDice').addEventListener('click', rollTwoDice)


function rollTwoDice () {
    document.querySelector('#product').innerText = 'calculating...'
    let diceRollResOne = Math.floor(Math.random()*12)
    localStorage.setItem('rollOne', diceRollResOne)
    let diceRollResTwo = Math.floor(Math.random()*12)
    localStorage.setItem('rollTwo', diceRollResTwo)
    let productRoll = diceRollResOne*diceRollResTwo
    localStorage.setItem('product', productRoll)

    console.log(productRoll)
    document.querySelector('#diceRollResultOne').innerText = diceRollResOne
    document.querySelector('#diceRollResultTwo').innerText = diceRollResTwo
    document.querySelector('#showProd').addEventListener('click', showProduct)
    function showProduct () {
        console.log(productRoll)
        document.querySelector('#product').innerText = `${diceRollResOne} x ${diceRollResTwo} = ${productRoll}`
    }

}

//to track your score, local storage or api?