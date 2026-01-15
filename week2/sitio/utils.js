


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


export async function obtenerClima(ciudad) {
  const API_KEY = "5b5b731343003351e1780f61e7a57c21";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${'medellin'}&appid=${API_KEY}&units=metric&lang=es`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    const data = await response.json();

    return {
      ciudad: data.name,
      temperatura: data.main.temp,
      sensacion: data.main.feels_like,
      humedad: data.main.humidity,
      descripcion: data.weather[0].description
    };
  } catch (error) {
    console.error("Error al obtener el clima:", error);
    throw error;
  }
}



