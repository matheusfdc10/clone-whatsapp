export const formatDate = (date) => {
    if(date) {
        const currentDate =  new Date()
        const currentDateNumber = currentDate.getDate()
        const currentMonth = currentDate.getMonth() + 1
        const currentYaer = currentDate.getFullYear()
        const formattedCurrentDate =  `${currentDateNumber}-${currentMonth}-${currentYaer}`

        const d = new Date(date.seconds * 1000)
        const dateNumber = d.getDate()
        const month = d.getMonth() + 1
        const yaer = d.getFullYear()
        const hours = d.getHours()
        const minutes = d.getMinutes()
        const formattedDate = `${dateNumber}-${month}-${yaer}`
        
        if (formattedCurrentDate > formattedDate) {
            return `${dateNumber < 10 ? ('0' + dateNumber) : dateNumber}/${month < 10 ? ('0' + month) : month}/${yaer}`
        } else {
            return `${hours < 10 ? ('0' + hours) : hours}:${minutes < 10 ? ('0' + minutes) : minutes}`
        }
        
    }
}

export const formatDateMessage = (date) => {
    if(date) {
        const d = new Date(date.seconds * 1000)
        const hours = d.getHours()
        const minutes = d.getMinutes()
        return `${hours < 10 ? ('0' + hours) : hours}:${minutes < 10 ? ('0' + minutes) : minutes}`
    }
}