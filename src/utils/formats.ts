export const capitalizeFirstLetter = (value: string) => value.charAt(0).toUpperCase() + value.slice(1);
export const getInfoDate = () => {
    var now = new Date();
    const month = now.toLocaleString('en', { month: 'short' });
    const day = now.getDate();
    const time = now.toLocaleTimeString('en', {
        hour: '2-digit',
        minute: '2-digit',
        hourCycle: 'h24'
    });

    return `Today, ${month} ${day} ${time}`;
}