Pro-Do List | Custom To-Do App
Pro-Do List is a feature-rich, single-page To-Do application designed for professional and personal use. It allows users to organize tasks into distinct categories, re-order tasks via drag-and-drop, and persists all data in the browser's local storage.

The entire application is self-contained within a single HTML file, demonstrating a modern web application built with vanilla JavaScript, leveraging Bootstrap 5 for a responsive UI and Font Awesome for icons.

✨ Key Features
Category Management: Create an unlimited number of custom categories and delete them as needed.

Task Management: Add, complete, and delete tasks within their respective categories.

Drag-and-Drop: Intuitively reorder tasks within a list or move them between categories.

Persistent Storage: All data is automatically saved to the browser's Local Storage, preserving your lists across sessions.

Responsive Design: The UI works seamlessly on desktops, tablets, and mobile devices.

🛠️ Technologies Used
HTML5: For the core structure and content.

CSS3: For custom styling to achieve a professional and clean aesthetic.

Bootstrap 5.3: For the responsive layout, components (like modals and cards), and utility classes.

Vanilla JavaScript (ES6+): For all application logic, including state management, DOM manipulation, and event handling.

Font Awesome 6.5: For scalable vector icons.

Google Fonts: For the 'Inter' typeface to enhance readability.

📂 Code Structure
The entire application is encapsulated in todo_app.html. The internal structure is organized as follows:

<head> Section:

Meta tags for viewport settings and character encoding.

Links to external stylesheets: Bootstrap CSS, Font Awesome, and Google Fonts.

A <style> block containing all custom CSS rules.

<body> Section:

HTML Markup: The static structure of the app, including the main header, the form for adding new categories, the container for dynamic category rendering, and the Bootstrap modal for adding new tasks.

Script Includes: A <script> tag for the Bootstrap JavaScript bundle.

Application Logic: A final <script> block containing all the vanilla JavaScript code that powers the application.

⚙️ JavaScript Logic Explained
The core of the application lies within the main <script> tag. It's wrapped in a DOMContentLoaded event listener to ensure the script runs only after the entire HTML document is loaded and parsed.

a. State Management
The application operates on a single source of truth: the state object.

let state = {
    categories: [
        {
            id: 'cat-1678886400000',
            name: 'Work',
            tasks: [
                {
                    id: 'task-1678886400001',
                    text: 'Finish report',
                    completed: false
                }
            ]
        }
    ]
};

state.categories: An array of category objects.

Each category object has a unique id, a name, and a tasks array.

Each task object within the tasks array has a unique id, its text content, and a completed boolean status.

b. Local Storage (loadState & saveState)
saveState(): This function is called whenever a change is made to the state object. It serializes the state object into a JSON string and saves it to localStorage under the key todoAppState.

loadState(): This function is called once when the application starts. It retrieves the JSON string from localStorage, parses it, and initializes the application's state. If no data is found, it initializes the app with default data.

c. Rendering (render function)
The render() function is the engine that builds the UI.

It first clears the main categoriesContainer.

It then iterates through the state.categories array.

For each category, it dynamically creates the HTML for the category card.

Inside each card, it iterates through the category.tasks array to generate the list of task items.

After generating all the HTML, it calls addEventListeners() to attach the necessary event handlers.

d. Event Handling (addEventListeners function)
This function is crucial for making the app interactive. It uses document.querySelectorAll to find all relevant elements (like delete buttons, add task buttons, etc.) and attaches event listeners to them. This function is called at the end of every render() cycle to ensure that newly created elements are also interactive.

e. Drag-and-Drop Logic
This functionality is implemented using the HTML Drag and Drop API:

dragstart: Attached to each task item. When a drag begins, the task's ID is stored, and a 'dragging' class is added for visual feedback.

dragover: Attached to task lists. It prevents the default browser action to allow for a drop and adds a 'drag-over' class for a visual cue.

dragleave: Removes the 'drag-over' class when a dragged item leaves a potential drop zone.

drop: The core logic resides here. When a task is dropped:

It retrieves the task's ID.

It identifies the source and destination categories.

It finds and removes the task object from the source category's tasks array in the state.

It adds the task object to the destination category's tasks array, calculating its new position.

Finally, it calls saveState() and render() to update the data and the UI.