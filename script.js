let wordsContainer = document.getElementById("wordsContainer")
let userInput = document.getElementById("userInput")
let errorMsg = document.getElementById("userInput")
let addBtn = document.getElementById("addBtn")

addBtn.onclick = function(){
     let userInputvalue = userInput.value
     if (userInputvalue === ""){
         alert("Enter the input")
     }else{
           let redompixle = Math.ceil(Math.random()*100)
    let pixlevalue = redompixle + "px"
    let randomcolor = Math.floor(Math.random()*16777215)
    let finalrandomcolor = "#"+randomcolor.toString(16)
    let userInputvalue = userInput.value
    // this code is create for span
    let span = document.createElement("span")
    span.style.fontSize = pixlevalue
    span.style.color = finalrandomcolor
    span.textContent = userInputvalue
    wordsContainer.appendChild(span) 
    userInput.value =""
    
     }
  
    
}

