import {createCollectionDB} from "./indexdb";

export const createGroup = (groupData) => {
    const request = createCollectionDB(); // Don't await here

    request.onsuccess = (event) => {
        const db = event.target.result; // Get the database instance
        const groupToAdd = {...groupData}; // Create a copy of the user object

        const transaction = db.transaction("group_data", "readwrite");
        const store = transaction.objectStore("group_data");

        const addRequest = store.put(groupToAdd);

        addRequest.onsuccess = (event) => {};

        addRequest.onerror = (event) => {
            alert(event.target.error);
        };
    };

    request.onerror = (event) => {
        alert("Error opening database: " + event.target.error);
    };
};
