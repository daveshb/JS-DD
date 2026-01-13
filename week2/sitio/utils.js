


export const saludar = ()=>{
    console.log("Hola mundo")
} 


export const upperCase = (text)=>{
    let message = text.toUpperCase()
    return message
} 


const fullDate = new Date

console.log(fullDate)

const dateString = fullDate.toString()

const day = dateString.slice(0,3)
const date = dateString.slice(4,15)
const hour = dateString.slice(16, 24)

const days = {
    Mon: "Lunes",
    Tue: "Martes",
    Wed: "Miercoles",
    Thu: "Jueves",
    Fri: "Viernes",
    Sat: "Sabado",
    Sun: "Domingo"
}


export const getDay=()=>{
    return days[day]
}
export const getDate=()=>{
    return date
}
export const getHour=()=>{
    return hour
}




