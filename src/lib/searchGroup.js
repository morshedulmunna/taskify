export const searching = (groupList, searchQuery) => {
    const filteredGroups = groupList.filter((group) =>
        group?.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return filteredGroups;
};
