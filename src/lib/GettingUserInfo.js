import {createCollectionDB} from "./indexdb";

export const getUserDataByEmail = (email) => {
    const dbRequest = createCollectionDB();

    return new Promise((resolve, reject) => {
        dbRequest.onsuccess = async () => {
            const db = dbRequest.result;
            const transaction = db.transaction(["user_data"], "readonly");
            const userStore = transaction.objectStore("user_data");

            // Create an index for the "email" field
            const emailIndex = userStore.index("email");

            // Use the index to get the user data by email
            const getRequest = emailIndex.get(email);

            getRequest.onsuccess = () => {
                const userData = getRequest.result;
                resolve(userData);
            };

            getRequest.onerror = () => {
                reject("Error fetching user data by email");
            };
        };

        dbRequest.onerror = () => {
            reject("Error opening the database");
        };
    });
};
