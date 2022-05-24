export const showDates = () => {
    const date = new Date();

    const year = date.getFullYear();
    const d = date.getDate();
    const month = date.getMonth();

    return `${month}, ${d}, ${year}`
}