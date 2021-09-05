require('colors');
const { inquireMenu, pause, readInput, listToDelete, confirmDelete, listToComplete, confirmComplete, } = require('./helpers/inquirer');
const { saveDB, readDB } = require('./helpers/saveFile');
const Task = require('./models/task');
const Tasks = require('./models/tasks');

console.clear();


const main = async () => {

    let opt = '';
    const tasks = new Tasks();
    let readDataBase = readDB();
    if(readDataBase){
        tasks.readTasksFromArray(readDataBase)
    }

    do {
        opt = await inquireMenu();
        switch (opt) {
            case '1':
                const ans = await readInput('Description of the task:');
                new Task(ans);
                tasks.createTask(ans);
                break;
            case '2':
                tasks.listTasks(readDataBase);
                break;
            case '3':
                tasks.listCompletedTask(readDataBase);
                break;
            case '4':
                tasks.listUnCompletedTask(readDataBase);
                break;
            case '5':
                const ids = await listToComplete(tasks.listToArr);
                console.log(ids); 
                const complets = await confirmComplete('Complete tasks?\n');
                if (complets){
                    tasks.toggleCompleted(ids);
                }
                break;
            case '6':
                const id = await listToDelete(tasks.listToArr);
                console.log(id);
                const confirm = await confirmDelete("Sure for deleting?")
                if (confirm) {
                    tasks.deleteTask(id);
                }
                break;
            case '0':

                break;
        }

        saveDB(tasks.listToArr);
        readDataBase = readDB();
        await pause();
        
    } while (opt !== '0');

}

main();