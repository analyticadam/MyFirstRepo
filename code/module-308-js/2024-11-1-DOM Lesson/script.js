const cities = [
    { name: "Boston", temperature: 71 },
    { name: "New York", temperature: 75 },
    { name: "Los Angeles", temperature: 80 },
    { name: "Chicago", temperature: 65 },
    { name: "Houston", temperature: 90 },
    { name: "Denver", temperature: 45 }
];




let ul = document.querySelector("#cityList")

console.log(ul)
// ul.textContent = "hello wolrd"  // hello world
for (let city of cities){
    let cityName = city.name
    let temprature = city.temperature
    
    // ul.textContent = cityName +ul.textContent
    // let cityContent = `<li class="city">${cityName}</li>`
    // if(cityName === "boston"){
    //!can't do that with inner html easily
    //     //add red color to the font
    // }
    // ul.innerHTML  = ul.innerHTML + cityContent 

   let li= document.createElement("li")
   li.textContent = cityName 
   if(cityName === "Boston"){
    li.style.fontSize = "36px"
   }

   li.classList.add("city")

   let tempLi = document.createElement("p")

   tempLi.textContent = "temperature: "+ city.temperature
   tempLi.classList.add("temp")
   
    ul.append(li)
    ul.append(tempLi)
}


//part:2 /// convert temp to c

  let temperatureList =  document.querySelectorAll(".temp")



// console.log(temperatureList)

for (let temp of temperatureList){
    
    let fahrenheit = Number(temp.textContent.split("temperature: ")[1])
    celsius = (fahrenheit - 32) * 5/9;
      
    temp.textContent=  temp.textContent.replace(fahrenheit,Math.floor(celsius)) + "c"


}

//part 3: color the cities based on their temp


let citiesElements = document.querySelectorAll('.city')

console.log(citiesElements)

for (let city of citiesElements){
    // console.log(city.nextSibling)

    let temp = city.nextSibling.textContent.split("temperature: ")[1].split("c")[0]
    console.log(temp)

    
    if(temp>=30){
        console.log("too hot")
        city.nextSibling.remove()
        city.remove()

        continue//stops any code after it and goes to the next loop
    }
    
    if(temp>=20){
        city.style.color ="red"
        console.log("hot")
    }else{
        city.style.color ="blue"
        console.log("cold")
    }
    // change the color to red for citiies that have temp bigger than 20 and to blue for cities that have less

}


//querySelector
//querySelectorAll
//createElement
//Append
//textContent
//innetHTML
//style
//classList
// idea of sibling parent, children