let day="";
let weather="";

function dayWeather(){
    if(day!==""&&weather!==""){
    const text=document.querySelector(".text");
    text.innerText="날씨가 "+weather+"인 "+day+"요일이네요!";

    if(weather==="맑음"){
        document.body.style.backgroundColor="skyblue";
    }else if(weather==="흐림"){
        document.body.style.backgroundColor="lightgray"
    }else if(weather==="비옴"){
        document.body.style.backgroundColor="gray";
    }
    }

}

const week=document.querySelectorAll(".week")

week[0].addEventListener("click",handleMonClick)
week[1].addEventListener("click",handleTueClick)
week[2].addEventListener("click",handleWedClick)
week[3].addEventListener("click",handleThuClick)
week[4].addEventListener("click",handleFriClick)

function handleMonClick(){
    day=week[0].innerText;
    dayWeather();
}

function handleTueClick(){
    day=week[1].innerText;
    dayWeather();
}

function handleWedClick(){
    day=week[2].innerText;
    dayWeather();
}

function handleThuClick(){
    day=week[3].innerText;
    dayWeather();
}


function handleFriClick(){
    day=week[4].innerText;
    dayWeather();
}

const weat=document.querySelectorAll(".weather");

weat.forEach((elm)=>{
    elm.addEventListener("click",()=>{
        weather=elm.innerText;
        dayWeather();
    })
})