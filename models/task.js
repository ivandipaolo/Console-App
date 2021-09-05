const {v4: uuidv4 } = require('uuid')

class task {

    id = '';
    desc = '';
    completed = ''; 

    constructor (desc) {
        this.id = uuidv4(),
        this.desc = desc,
        this.completed = false
    }
}

module.exports = task;