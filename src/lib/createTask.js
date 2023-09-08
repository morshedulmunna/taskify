import {createCollectionDB} from "./indexdb";

export const createTask = (taskData) => {
    const request = createCollectionDB(); // Don't await here

    request.onsuccess = (event) => {
        const db = event.target.result; // Get the database instance

        const taskToAdd = {...taskData}; // Create a copy of the user object

        const transaction = db.transaction("tasks_data", "readwrite");
        const store = transaction.objectStore("tasks_data");

        const addRequest = store.put(taskToAdd);

        addRequest.onsuccess = (event) => {};

        addRequest.onerror = (event) => {
            alert(event.target.error);
        };
    };

    request.onerror = (event) => {
        alert("Error opening database: " + event.target.error);
    };
};
