const div1 =document.createElement('div')
div1.style.width='10px'
div1.style.height='300px'
div1.style.backgroundColor='darkslategray'
document.body.append(div1)


const red = document.querySelector('#active-red')
red.onclick = function(){

}
const yellow = document.querySelector('#active-yellow')
yellow.onclick = function(){

}
const green = document.querySelector('#active-green')
green.onclick = function(){

}
setTimeout(function(){
    red.style.backgroundColor = "#FF1E00",
    red.style.boxShadow = "0px 0px 50px #FF1E00"
    yellow.style.backgroundColor = "#ADB708",
    yellow.style.boxShadow = "0px 0px 0px #ADB708",
    green.style.backgroundColor= "#00FF00",
    green.style.boxShadow = "0px 0px 0px #00FF00"
 }, 5000)

 setTimeout(function(){
    yellow.style.backgroundColor = "#FFE310",
    yellow.style.boxShadow = "0px 0px 50px #FFFF20",
    red.style.backgroundColor = "#B20000",
    red.style.boxShadow = "0px 0px 0px #B20000",
    green.style.backgroundColor= "#00FF00",
    green.style.boxShadow = "0px 0px 0px #00FF00"
 }, 7000)

setTimeout(function(){
    green.style.backgroundColor = "#00FF1A",
    green.style.boxShadow = "0px 0px 50px #00FF1A",
    yellow.style.backgroundColor = "#ADB708",
    yellow.style.boxShadow = "0px 0px 0px #ADB708",
    red.style.backgroundColor = "#B20000",
    red.style.boxShadow = "0px 0px 0px #B20000"
},9000)

setTimeout(function(){
    red.style.backgroundColor = "#FF1E00",
    red.style.boxShadow = "0px 0px 50px #FF1E00",
    yellow.style.backgroundColor = "#ADB708",
    yellow.style.boxShadow = "0px 0px 0px #ADB708",
    green.style.backgroundColor= "#00FF00",
    green.style.boxShadow = "0px 0px 0px #00FF00"

 }, 11000)

 setTimeout(function(){
    yellow.style.backgroundColor = "#FFE310",
    yellow.style.boxShadow = "0px 0px 50px #FFFF20",
    green.style.backgroundColor= "#00FF00",
    green.style.boxShadow = "0px 0px 0px #00FF00",
    red.style.backgroundColor = "#B20000"
    red.style.boxShadow = "0px 0px 0px #B20000"
 }, 15000)

 set(function(){
    green.style.backgroundColor = "#00FF1A",
    green.style.boxShadow = "0px 0px 50px #00FF1A",
    red.style.backgroundColor = "#B20000"
    red.style.boxShadow = "0px 0px 0px #B20000"
    yellow.style.backgroundColor = "#ADB708",
    yellow.style.boxShadow = "0px 0px 0px #ADB708"
 }, 17000)


