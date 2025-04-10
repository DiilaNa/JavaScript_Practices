const function1 = () => {
    console.log('hello')
}

const function2 = () => {
    console.log('HI')
}

/*-----SET TIMEOUT----Delay the time and call the function-----*/
setTimeout(function1,10000);/*10000ms*/

/*------SET INTERVAL----Delay the time and call the function and recursively does this-------*/
setInterval(function2,10000)