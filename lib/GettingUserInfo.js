export const getUserData = (email) => {
    const request = createCollectionDB();

    request.onsuccess = (event) => {
        const db = event.target.result; // Get the database instance

        const transaction = db.transaction("user_data", "readonly"); // Use "readonly" for reading data
        const store = transaction.objectStore("user_data");

        const getRequest = store.get(email); // Replace 'userId' with the actual user ID you want to retrieve

        getRequest.onsuccess = (event) => {
            const userData = event.target.result; // The retrieved user data
            if (userData) {
                console.log("User data:", userData);

                return userData;
            } else {
                console.log("User not found.");
            }
        };

        getRequest.onerror = (event) => {
            console.error("Error getting user data: " + event.target.error);
        };
    };

    request.onerror = (event) => {
        console.error("Error opening database: " + event.target.error);
    };
};
