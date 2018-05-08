var fs = require('fs');

var path = require('path');

var args = process.argv.splice(2);

console.log(args, 'sss');

var commond = args.shift();

var taskDescription = args.join(' ');

var file = path.join(process.cwd(), './task.json');


switch (commond) {
    case 'list':
        listTasks(file);
        break;
    case 'add':
        addTask(file, taskDescription);
        break;
    default:
        console.log('usage: ' + process.argv[0] + ' list[add [taskDescription]]');
}


function loadOrInitializeTaskArray(file, cb) {
    fs.exists(file, function (exists) {
        console.log(file)

        var tasks = [];
        if(exists) {
            console.log(111)
            fs.readFile(file, 'utf8', function (err, data) {
                if(err) throw  err;
                var data = data.toString();
                tasks = JSON.parse(data || '[]');
                cb(tasks);
            })
        } else {
            cb([]);
        }
    });
}

function listTasks(file) {
    loadOrInitializeTaskArray(file, function (tasks) {
        for(var i in tasks) {
            console.log(tasks[i])
        }
    })
}

function addTask(file, taskDescription) {
    loadOrInitializeTaskArray(file, function (tasks) {
        tasks.push(taskDescription);
        storeTasks(file, tasks);
    })
}

function storeTasks(file, tasks) {
    fs.writeFile(file, JSON.stringify(tasks), 'utf8', function (err) {
        if (err) throw err;
        console.log('saved');
    });
}