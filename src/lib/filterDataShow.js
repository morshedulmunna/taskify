export const filterData = (groupData, status, filter) => {
    if (filter === "date") {
        const tasks = groupData.filter((item) => {
            const dueDate = new Date(item.due_date);
            const today = new Date();

            return (
                item.status === status &&
                dueDate.toDateString() === today.toDateString()
            );
        });
        return tasks;
    } else {
        const tasks = groupData
            .filter((item) => item.status === status)
            .sort((a, b) => {
                // Sort by due_date in ascending order
                const dateA = new Date(a.due_date);
                const dateB = new Date(b.due_date);
                return dateA - dateB;
            });
        return tasks;
    }
};
