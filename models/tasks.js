const { readDB } = require("../helpers/saveFile");
const Task = require("./task");

class Tasks {
    _list = {};

    get listToArr () {
        let list = [];
        Object.keys(this._list).forEach(key =>{
            list.push(this._list[key]);
        });
        return list;
    }

    constructor () {
        this._list = {}
    }

    createTask(desc = ''){
        const task = new Task(desc);
        this._list[task.id] = task;
    }

    readTasksFromArray (tasks = []){
        tasks.forEach(task => {
            this._list[task.id] = task;
        }) 
    }

    deleteTask (id = '') {
        if(this._list[id]){
            delete this._list[id];
        }
    }

    listTasks(data) {
        data.forEach((task, i) => {
            if (task.completed === true) {
                console.log(`${i + 1 + '.'}`.green.bold + `${task.id}`.bold + ` - Completed`.green.bold);
            }else{
                console.log(`${i + 1 + '.'}`.red.bold + `${task.id}`.bold + ` - Uncompleted`.red.bold);
            }
        })
    }

    listCompletedTask(data){
        data.forEach((task, i) => {
            if (task.completed) {
                console.log(`${i + 1 + '.'}`.green.bold + `${task.id}`.bold + ` - Completed`.green.bold);
            }
        })
    }
    
    listUnCompletedTask(data){
        data.forEach((task, i) => {
            if (!task.completed) {
                console.log(`${i + 1 + '.'}`.red.bold + `${task.id}`.bold + ` - Uncompleted`.red.bold);
            }
        })
    }

    toggleCompleted (ids = []) {
        ids.forEach(id => {
            const task = this._list[id];
            if (task.completed === false){
                task.completed = true;
            }
        });

        this.listToArr.forEach(task => {
            const taske = this._list[task.id]
            if (!ids.includes(task.id)){
                taske.completed = false;
            }
        })
    }
}

module.exports = Tasks;