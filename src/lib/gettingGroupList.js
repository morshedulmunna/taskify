import {createCollectionDB} from "./indexdb";

export function getAllDataFromObjectStore(callback) {
    const request = createCollectionDB();

    request.onerror = function (event) {
        console.error("Error opening database:", event.target.error);
    };

    request.onsuccess = function (event) {
        const db = event.target.result;

        const transaction = db.transaction(["group_data"], "readonly");
        const objectStore = transaction.objectStore("group_data");

        const allData = [];

        objectStore.openCursor().onsuccess = function (event) {
            const cursor = event.target.result;

            if (cursor) {
                // The cursor has found a record.
                allData.push(cursor.value);
                cursor.continue();
            } else {
                // The cursor has reached the end of the data.
                db.close();
                callback(allData);
            }
        };
    };
}
