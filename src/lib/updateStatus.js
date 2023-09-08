import {createCollectionDB} from "./indexdb";

export function updateTaskData(updatedData, taskId) {
    const request = createCollectionDB(); // Don't await here

    request.onerror = function (event) {
        console.error("Error opening database:", event.target.error);
    };

    request.onsuccess = function (event) {
        const db = event.target.result;

        // Retrieve the record by ID
        const transaction = db.transaction("tasks_data", "readwrite");
        const store = transaction.objectStore("tasks_data");
        const getRequest = store.get(taskId);

        getRequest.onsuccess = function (event) {
            // Modify the data
            const taskToUpdate = event.target.result;

            console.log(taskToUpdate);

            if (taskToUpdate) {
                taskToUpdate.id = updatedData.id || taskToUpdate.id;
                taskToUpdate.status = updatedData.status || taskToUpdate.status;

                const updateRequest = store.put(taskToUpdate);

                updateRequest.onsuccess = function () {
                    console.log("Task updated successfully");
                };
                updateRequest.onerror = function () {
                    console.error("Error updating task:", event.target.error);
                };
            }

            // if (taskToUpdate) {
            //     // If the task exists, update it
            //     const updateRequest = store.put(updatedData);
            //     updateRequest.onsuccess = function () {
            //         console.log("Task updated successfully");
            //     };
            //     updateRequest.onerror = function () {
            //         console.error("Error updating task:", event.target.error);
            //     };
            // } else {
            //     // If the task doesn't exist, create a new one
            //     const addRequest = store.add(updatedData, taskId);
            //     addRequest.onsuccess = function () {
            //         console.log("New task created successfully");
            //     };
            //     addRequest.onerror = function () {
            //         console.error(
            //             "Error creating new task:",
            //             event.target.error
            //         );
            //     };
            // }
        };

        transaction.oncomplete = function () {
            // Close the transaction and database
            db.close();
        };
    };
}
