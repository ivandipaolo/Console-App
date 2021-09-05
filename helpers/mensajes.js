require('colors');

const showMenu = () =>{
    return new Promise (resolve => {
        console.log('========================='.red);
        console.log('      Console App'.bold );
        console.log('=========================\n'.red);
        
        console.log(`${`1.`.red} Create task`.bold);
        console.log(`${`2.`.red} Tasks list`.bold);
        console.log(`${`3.`.red} Completed tasks`.bold);
        console.log(`${`4.`.red} Uncompleted tasks`.bold);
        console.log(`${`5.`.red} Complete task`.bold);
        console.log(`${`6.`.red} Remove task`.bold);
        console.log(`${`0.`.red} Leave\n`.bold);
        
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        
        readline.question('Select an option:', ((option) => {
            readline.close();
            resolve (option);
        }
        ));
    } );


    
}

const pause = () => {
    return new Promise (resolve => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        readline.question(`Press ENTER to continue`, ((option) => {
            readline.close();
            resolve(option);    
        }
        ));
    });
}

module.exports ={
    showMenu,
    pause,
};