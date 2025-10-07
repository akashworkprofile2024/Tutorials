
        document.addEventListener('DOMContentLoaded', () => {
            const categoriesContainer = document.getElementById('categories-container');
            const addCategoryForm = document.getElementById('add-category-form');
            const categoryNameInput = document.getElementById('category-name-input');
            const addTaskModal = new bootstrap.Modal(document.getElementById('add-task-modal'));
            const addTaskForm = document.getElementById('add-task-form');
            const categoryIdForTaskInput = document.getElementById('category-id-for-task');
            const taskTextInput = document.getElementById('task-text-input');

            // Data state
            let state = {
                categories: []
            };

            // --- LOCAL STORAGE ---
            const loadState = () => {
                try {
                    const serializedState = localStorage.getItem('todoAppState');
                    if (serializedState === null) {
                         // Initialize with default state if nothing is in local storage
                        return {
                            categories: [
                                { id: `cat-${Date.now()}`, name: 'Work', tasks: [{ id: `task-${Date.now()+1}`, text: 'Drag me to another category!', completed: false }] },
                                { id: `cat-${Date.now()+2}`, name: 'Personal', tasks: [{ id: `task-${Date.now()+3}`, text: 'Click me to mark as complete.', completed: false }] }
                            ]
                        };
                    }
                    return JSON.parse(serializedState);
                } catch (e) {
                    console.error("Could not load state from local storage", e);
                    return { categories: [] };
                }
            };

            const saveState = () => {
                try {
                    const serializedState = JSON.stringify(state);
                    localStorage.setItem('todoAppState', serializedState);
                } catch (e) {
                    console.error("Could not save state to local storage", e);
                }
            };
            
            // --- RENDER FUNCTION ---
            const render = () => {
                categoriesContainer.innerHTML = '';
                if (state.categories.length === 0) {
                     categoriesContainer.innerHTML = `<p class="text-center text-muted col-12">No categories yet. Add one to get started!</p>`;
                }

                state.categories.forEach(category => {
                    const categoryColumn = document.createElement('div');
                    categoryColumn.className = 'category-column';

                    const categoryCard = document.createElement('div');
                    categoryCard.className = 'card h-100 category-card';
                    categoryCard.dataset.categoryId = category.id;

                    let tasksHtml = '';
                    if (category.tasks.length === 0) {
                        tasksHtml = `<li class="list-group-item text-muted text-center">No tasks here yet.</li>`;
                    } else {
                        category.tasks.forEach(task => {
                            tasksHtml += `
                                <li class="list-group-item d-flex justify-content-between align-items-center task-item ${task.completed ? 'completed' : ''}" draggable="true" data-task-id="${task.id}" data-parent-category-id="${category.id}">
                                    <span class="task-text">${task.text}</span>
                                    <button class="btn btn-sm btn-outline-danger delete-task-btn border-0">
                                        <i class="fa-solid fa-trash-alt"></i>
                                    </button>
                                </li>
                            `;
                        });
                    }

                    categoryCard.innerHTML = `
                        <div class="card-header d-flex justify-content-between align-items-center category-header">
                            <h5 class="mb-0">${category.name}</h5>
                            <button class="btn btn-sm btn-outline-danger delete-category-btn border-0">
                                <i class="fa-solid fa-trash-alt"></i>
                            </button>
                        </div>
                        <div class="card-body">
                            <ul class="list-group task-list">
                                ${tasksHtml}
                            </ul>
                        </div>
                        <div class="card-footer">
                            <button class="btn btn-outline-primary w-100 add-task-btn">
                                <i class="fa-solid fa-plus me-1"></i> Add Task
                            </button>
                        </div>
                    `;
                    
                    categoryColumn.appendChild(categoryCard);
                    categoriesContainer.appendChild(categoryColumn);
                });
                
                addEventListeners();
            };
            
            // --- EVENT LISTENERS ---
            const addEventListeners = () => {
                // Add Task Buttons
                document.querySelectorAll('.add-task-btn').forEach(button => {
                    button.addEventListener('click', (e) => {
                        const categoryId = e.target.closest('.category-card').dataset.categoryId;
                        categoryIdForTaskInput.value = categoryId;
                        addTaskModal.show();
                    });
                });
                
                // Delete Category Buttons
                document.querySelectorAll('.delete-category-btn').forEach(button => {
                    button.addEventListener('click', (e) => {
                        const categoryId = e.target.closest('.category-card').dataset.categoryId;
                        if(confirm('Are you sure you want to delete this category and all its tasks?')) {
                            state.categories = state.categories.filter(c => c.id !== categoryId);
                            saveState();
                            render();
                        }
                    });
                });

                // Delete Task Buttons
                document.querySelectorAll('.delete-task-btn').forEach(button => {
                    button.addEventListener('click', (e) => {
                        const taskEl = e.target.closest('.task-item');
                        const taskId = taskEl.dataset.taskId;
                        const categoryId = taskEl.dataset.parentCategoryId;
                        
                        const category = state.categories.find(c => c.id === categoryId);
                        if (category) {
                            category.tasks = category.tasks.filter(t => t.id !== taskId);
                            saveState();
                            render();
                        }
                    });
                });
                
                // Toggle Task Completion
                document.querySelectorAll('.task-text').forEach(taskText => {
                    taskText.addEventListener('click', e => {
                        const taskEl = e.target.closest('.task-item');
                        const taskId = taskEl.dataset.taskId;
                        const categoryId = taskEl.dataset.parentCategoryId;

                        const category = state.categories.find(c => c.id === categoryId);
                        if (category) {
                            const task = category.tasks.find(t => t.id === taskId);
                            if (task) {
                                task.completed = !task.completed;
                                saveState();
                                render();
                            }
                        }
                    });
                });

                // Drag and Drop
                const tasks = document.querySelectorAll('.task-item');
                const taskLists = document.querySelectorAll('.task-list');

                tasks.forEach(task => {
                    task.addEventListener('dragstart', (e) => {
                        task.classList.add('dragging');
                        e.dataTransfer.setData('text/plain', task.dataset.taskId);
                    });

                    task.addEventListener('dragend', () => {
                        task.classList.remove('dragging');
                    });
                });

                taskLists.forEach(list => {
                    list.addEventListener('dragover', (e) => {
                        e.preventDefault();
                        list.closest('.category-card').classList.add('drag-over');
                        const dragging = document.querySelector('.dragging');
                        const afterElement = getDragAfterElement(list, e.clientY);
                        if (afterElement == null) {
                            list.appendChild(dragging);
                        } else {
                            list.insertBefore(dragging, afterElement);
                        }
                    });

                    list.addEventListener('dragleave', () => {
                         list.closest('.category-card').classList.remove('drag-over');
                    });
                    
                    list.addEventListener('drop', (e) => {
                        e.preventDefault();
                        list.closest('.category-card').classList.remove('drag-over');
                        
                        const taskId = e.dataTransfer.getData('text/plain');
                        const draggedTaskElement = document.querySelector(`[data-task-id="${taskId}"]`);
                        const oldCategoryId = draggedTaskElement.dataset.parentCategoryId;
                        const newCategoryId = list.closest('.category-card').dataset.categoryId;

                        // Find the task in the state
                        const oldCategory = state.categories.find(c => c.id === oldCategoryId);
                        if (!oldCategory) return;
                        
                        const taskIndex = oldCategory.tasks.findIndex(t => t.id === taskId);
                        if (taskIndex === -1) return;
                        
                        const [task] = oldCategory.tasks.splice(taskIndex, 1);
                        
                        // Find new category and new index
                        const newCategory = state.categories.find(c => c.id === newCategoryId);
                        const newTasksListElements = [...list.querySelectorAll('.task-item:not(.dragging)')];
                        const newIndex = newTasksListElements.findIndex(item => item === getDragAfterElement(list, e.clientY));
                        
                        if (newIndex === -1) {
                            newCategory.tasks.push(task);
                        } else {
                            newCategory.tasks.splice(newIndex, 0, task);
                        }
                        
                        saveState();
                        render();
                    });
                });
            };

            const getDragAfterElement = (container, y) => {
                const draggableElements = [...container.querySelectorAll('.task-item:not(.dragging)')];
                return draggableElements.reduce((closest, child) => {
                    const box = child.getBoundingClientRect();
                    const offset = y - box.top - box.height / 2;
                    if (offset < 0 && offset > closest.offset) {
                        return { offset: offset, element: child };
                    } else {
                        return closest;
                    }
                }, { offset: Number.NEGATIVE_INFINITY }).element;
            };

            // --- FORM SUBMISSIONS ---
            addCategoryForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const categoryName = categoryNameInput.value.trim();
                if (categoryName) {
                    const newCategory = {
                        id: `cat-${Date.now()}`,
                        name: categoryName,
                        tasks: []
                    };
                    state.categories.push(newCategory);
                    saveState();
                    render();
                    categoryNameInput.value = '';
                }
            });
            
            addTaskForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const categoryId = categoryIdForTaskInput.value;
                const taskText = taskTextInput.value.trim();
                
                if (categoryId && taskText) {
                    const category = state.categories.find(c => c.id === categoryId);
                    if(category) {
                        const newTask = {
                            id: `task-${Date.now()}`,
                            text: taskText,
                            completed: false
                        };
                        category.tasks.push(newTask);
                        saveState();
                        render();
                        taskTextInput.value = '';
                        addTaskModal.hide();
                    }
                }
            });

            // Initial Load
            state = loadState();
            render();
        });
