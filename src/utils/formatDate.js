export const formatDate = (date) => {
    if(date) {
        const d = new Date(date.seconds * 1000)
        const hours = d.getHours()
        const minutes = d.getMinutes()
        return `${hours < 10 ? ('0' + hours) : minutes}:${minutes < 10 ? ('0' + minutes) : minutes}`
    }
}