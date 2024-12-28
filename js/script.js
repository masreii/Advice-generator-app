// const pattern = document.querySelector(".pattern")

const no_Advice = document.querySelector(".no-advice")
const quote = document.querySelector(".quote")
const spinner = document.querySelector(".spinner")
spinner.style.display = "none"

async function getAPI (){
  const url = "https://api.adviceslip.com/advice"
  let condition = false
  
  if(!condition){
    spinner.style.display = "block"
    no_Advice.style.display = "none"
    quote.style.display = "none"
    
  }
  
  
  
  try{
    const response = await fetch(url)
    
    if(response){
      condition = true
      const json = await response.json()
      quote.innerHTML = `<h3>"${json.slip.advice}"</h3>`
      no_Advice.innerHTML = `<p class= no-advice>advice #${json.slip.id}</p>`
    }
    
  } catch(err){
    console.log(err)
  }
  
  if(condition){
    spinner.style.display = "none"
    no_Advice.style.display = "block"
    quote.style.display = "block"
  }
}

