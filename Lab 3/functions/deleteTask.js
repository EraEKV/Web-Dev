const deleteTask = (id) => {
    tasks = tasks.filter(task => task.id !== id);
    updateDB();
    document.querySelector(`[data-id="${id}"]`).remove();
};
