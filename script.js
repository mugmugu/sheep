document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todo-input');
    const addButton = document.getElementById('add-button');
    const todoList = document.getElementById('todo-list');
    const sheepContainer = document.getElementById('sheep-container'); 

    // タスクを追加する関数
    const addTask = () => {
        const taskText = todoInput.value.trim(); 

        if (taskText === '') {
            alert('タスクを入力してください。');
            return;
        }

        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        const actionsDiv = document.createElement('div');
        actionsDiv.classList.add('actions');

        const completeButton = document.createElement('button');
        completeButton.textContent = '完了';
        completeButton.addEventListener('click', () => {
            listItem.classList.toggle('completed');
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '削除';
        deleteButton.classList.add('delete');
        deleteButton.addEventListener('click', () => {
            todoList.removeChild(listItem);
        });

        actionsDiv.appendChild(completeButton);
        actionsDiv.appendChild(deleteButton);

        listItem.appendChild(actionsDiv);

        todoList.appendChild(listItem);

        todoInput.value = '';
        todoInput.focus();

        // 羊が飛び出す処理
        spawnSheep();
    };

    // 羊を生成してアニメーションを開始する関数
    const spawnSheep = () => {
        const sheep = document.createElement('div');
        sheep.classList.add('sheep');
        sheepContainer.appendChild(sheep);

        setTimeout(() => {
            sheep.classList.add('jump');
        }, 10);

        sheep.addEventListener('animationend', () => {
            sheep.remove();
        });
    };

    addButton.addEventListener('click', addTask);

    todoInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
