export function formatDate(inputDateString) {
    const inputDate = new Date(inputDateString);
    const options = {year: "numeric", month: "short", day: "numeric"};
    const formattedDate = inputDate.toLocaleDateString("en-US", options);
    return formattedDate;
}
