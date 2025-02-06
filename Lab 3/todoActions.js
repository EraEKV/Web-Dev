export const updateDB = (tasks) => {
    localStorage.setItem("list", JSON.stringify(tasks));
};

export const deleteTask = (id, tasks) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    updateDB(updatedTasks);
    document.querySelector(`[data-id="${id}"]`)?.remove();
    return updatedTasks;
};

export const toggleCheck = (id, tasks) => {
    const task = tasks.find(t => t.id === id);
    
    if (task) {
        task.checked = !task.checked;
        updateDB(tasks);
    }

    const el = document.querySelector(`[data-id="${id}"]`);
    if (el) {
        el.classList.toggle("done", task.checked);
        const container = document.querySelector(task.checked ? ".ended" : ".not_ended");
        if (container) {
            container.appendChild(el);
        }
    }
};