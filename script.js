document.addEventListener('DOMContentLoaded',()=>{
  const getweatherbtn=  document.getElementById("get-weather-btn");
  const getcityname=  document.getElementById("city-name");
  const getcityinput=   document.getElementById("city-input");
  const gettemperature=   document.getElementById("temperature");
  const getdescription=  document.getElementById("description");
  const geterrormessage= document.getElementById("error-message");
  const getweatherinfo= document.getElementById("weather-info");
  const apikey = "9336a81de4d90960fd6ede01c65ef87a";
  //env vauriables can be used to hide the api key from public view
getweatherbtn.addEventListener('click', async()=>{
 const city= getcityinput.value.trim()

 if(!city)return

try {
const weatherdata = await fetchweatherdata(city)
displayweatherdata(weatherdata)
} catch (error) {
   showerrormessage()
}

// it may thorw an error!
//server /database is always in another continenet
})

async function fetchweatherdata(city){
  //get the data
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

  const response=await fetch(url)
  // await ka use bada hai bhai smaj ye fetch ke liye data lata hai

  console.log(typeof response)
  console.log("RESPONSE",response)


  if(!response.ok){
    throw new Error("city not found!🕵️‍♂️")
  }
  const data=await response.json()
  return data
}

function displayweatherdata(data){

console.log(data)
const {name,main,weather}=data
getcityname.textContent=name
  //display the data
  //unlock the display

  getweatherinfo.classList.remove("hidden")
  geterrormessage.classList.add("hidden")
  gettemperature.textContent=`🌡️ Temperature: ${main.temp}°C`
  getdescription.textContent=`ℹ️ Description: ${weather[0].description}`

}

function showerrormessage(message){
  // show error message
 getweatherinfo.classList.add("hidden");
 geterrormessage.classList.remove("hidden"
 )
}

})