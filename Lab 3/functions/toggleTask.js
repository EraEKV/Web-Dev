const toggleCheck = (id) => {
    const task = tasks.find(t => t.id === id);
    
    if (task) {
        task.checked = !task.checked;
        updateDB();
    }

    const el = document.querySelector(`[data-id="${id}"]`);
    el.classList.toggle("done", task.checked);

    const container = document.querySelector(task.checked ? ".ended" : ".not_ended");
    if (container) {
        container.appendChild(el);
    }
};
