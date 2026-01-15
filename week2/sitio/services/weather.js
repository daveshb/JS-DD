

export const getWeather = async (city)=>{

    console.log(`esta llegando esto : ${city}`)

    const apiKey = "6ca1bfed92d6908b6af2f913640e30b2"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`


    const response = await fetch(url);
    const data = response.json();

    console.log("funcion para obtener el clima")

    return data

}




 //  const response = await fetch(url);

    // if (!response.ok) {
    //   throw new Error(`Error HTTP: ${response.status}`);
    // }

    // const data = await response.json();


    // consumir api