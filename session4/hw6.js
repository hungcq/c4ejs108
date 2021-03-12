const tasks = [
    {
        name: 'HTML',
        completed: false,
    },
    {
        name: 'CSS',
        completed: false,
    },
    {
        name: 'Basics of Javascript',
        completed: false,
    },
    {
        name: 'NodeJS package manager',
        completed: false,
    },
    {
        name: 'Git',
        completed: false,
    },
]

for (let i = 0; i < 10; i++) {
    //6.1
    let str = 'Hi there, this is your tasks:'
    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        let check = '[ ]';
        if (task.completed) {
            check = '[x]';
        }
        str += `\n${i + 1}. ${check} ${task.name}`;
    }
    alert(str);
    
    // 6.2 6.3 6.4
    const command = prompt('Enter a command (new, delete, update, complete):');
    if (command === 'new') {
        const newTask = prompt('Enter a new task:');
        tasks.push({
            name: newTask,
            completed: false
        });
    } else if (command === 'delete') {
        const position = Number(prompt('Enter position to delete:'));
        tasks.splice(position - 1, 1);
    } else if (command === 'update') {
        const position = Number(prompt('Enter position to update:'));
        const updateValue = prompt('Enter new name for task:');
        tasks[position - 1].name = updateValue;
    } else if (command === 'complete') {
        const position = Number(prompt('Enter position to update:'));
        tasks[position - 1].completed = true;
    } else {
        alert('Invalid commmand');
    }
}