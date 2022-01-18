
var input = document.getElementById("city");
var cityname = document.getElementById("cityname");
var first = document.getElementById("1");
var second = document.getElementById("2");
var third = document.getElementById("3");
var forth = document.getElementById("4");
var fifth = document.getElementById("5");

apik = "23c19c4aed84a004cb9160d49e682861";
//  apik= "c6acc83571daba97f919a3e14df41d35"
window.navigator.geolocation.getCurrentPosition((position) =>{

  var lat = position.coords.latitude;
  var long = position.coords.longitude;

  fetch(
    `api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${apik}`
  ) 
  .then(response => {
    console.log(response)
  })
  .catch(err=>console.log(err))

})


// input values to search
const search =  () => {


  // if(navigator.geolocation){
 
  cityname.innerHTML = input.value.charAt(0).toUpperCase()+ input.value.slice(1);
fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${input.value}&units=metric&appid=${apik}`)
.then(response => response.json())
 
  .then(data => {
    console.log(data,'response.data')


    var data1 = (data.list) 

 


     let d = new Date();
      const year= (d.getFullYear());
      const month= ("0" + (d.getMonth()+1)).slice(-2)
      const todaydate = ("0" + (d.getDate())).slice(-2)
      const todaydate1 = ("0" + (d.getDate() + 1)).slice(-2)
    const todaydate2 = ("0" + (d.getDate() + 2)).slice(-2)
    const todaydate3 = ("0" + (d.getDate() + 3)).slice(-2)
    const todaydate4 = ("0" + (d.getDate() + 4)).slice(-2)
    const todaydate5 = ("0" + (d.getDate() + 5)).slice(-2)
    
    const fulldate = `${year}-${month}-${todaydate}`
    const fulldate1 = `${year}-${month}-${todaydate1}`
    const fulldate2 = `${year}-${month}-${todaydate2}`
    const fulldate3 = `${year}-${month}-${todaydate3}`
    const fulldate4 = `${year}-${month}-${todaydate4}`
    const fulldate5 = `${year}-${month}-${todaydate5}`  
    
    var data
    const currenDate = data1 &&  data1.filter( obj=>{
        return obj.dt_txt >= `${fulldate} 00:00:00`&& obj.dt_txt <= `${fulldate} 21:00:00`
    })
    const currenDate1=data1 && data1.filter( obj=>{
        return obj.dt_txt >= `${fulldate1} 00:00:00`&& obj.dt_txt <= `${fulldate1} 21:00:00`
    })
    const currenDate2=data1 && data1.filter( obj=>{
        return obj.dt_txt >= `${fulldate2} 00:00:00`&& obj.dt_txt <= `${fulldate2} 21:00:00`
    })
    const currenDate3=data1 && data1.filter( obj=>{
        return obj.dt_txt >= `${fulldate3} 00:00:00`&& obj.dt_txt <= `${fulldate3} 21:00:00`
    })
    const currenDate4=data1 && data1.filter( obj=>{
        return obj.dt_txt >= `${fulldate4} 00:00:00`&& obj.dt_txt <= `${fulldate4} 21:00:00`
    })
   
    const currenDate5=data1 && data1.filter( obj=>{
      return obj.dt_txt >= `${fulldate5} 00:00:00`&& obj.dt_txt <= `${fulldate5} 21:00:00`
  })
    
  

console.log(currenDate,'currenDate')



        first.innerHTML = `<div class="datesection ">
     <p class= "day">${ new Date( currenDate && currenDate[0].dt_txt).toLocaleString('en-us', {weekday:'long'})}</p>
     <p class="date">${ currenDate && currenDate[0].dt_txt.slice(0,11)}</p>
     </div>
     <image class="image"   src="https://openweathermap.org/img/w/${ currenDate && currenDate && currenDate[0].weather[0].icon}.png ">
     <div class="tem_section">
     <small> temp_min :- ${currenDate && currenDate[0] && currenDate[0].main.temp_min }  </small><span></span>
     <small> temp_max :- ${currenDate && currenDate[0] &&currenDate[0].main.temp_max}</small><br>
     <small class="temp">Temp:- ${currenDate && currenDate[0] && currenDate[0].main.temp_min}  </small>
     </div>
         `;
         document.getElementById("1").addEventListener("click", ()=>{forecast(currenDate)});


        second.innerHTML = `<div class="datesection">
         <p class="date">${ new Date(currenDate1[1].dt_txt).toLocaleString('en-us', {weekday:'long'})}</p>
         <p class="day">${currenDate && currenDate1[1].dt_txt.slice(0,11)}</p>
         </div>
         <image class="image"   src="https://openweathermap.org/img/w/${ currenDate && currenDate1 && currenDate1[1].weather[0].icon}.png ">

         <div class="tem_section">
         <small> temp_min :- ${currenDate && currenDate[1] && currenDate[1].main.temp_min} </small><span></span>
         <small> temp_max :- ${currenDate && currenDate[1] && currenDate[1].main.temp_max} </small><br>
         <small class="temp"> Temp:- ${currenDate && currenDate[1] && currenDate[1].main.temp_min} </small>
         </div>
             `;
             document.getElementById("2").addEventListener("click", ()=>{forecast(currenDate1)});

        third.innerHTML = `<div class="datesection">
             <p class="day">${ new Date(currenDate2[0].dt_txt).toLocaleString('en-us', {weekday:'long'})}</p>
             <p class="date">${ currenDate && currenDate2[0].dt_txt.slice(0,11)}</p>
             </div>
             <image class="image"   src="https://openweathermap.org/img/w/${ currenDate && currenDate2 && currenDate2[1].weather[0].icon}.png ">
             <div class="tem_section">
             <small> temp_min :- ${currenDate && currenDate2[2] && currenDate2[2].main.temp_min}  </small><span></span>
             <small> temp_max :- ${currenDate && currenDate2[2] && currenDate2[2].main.temp_max} </small><br>
             <small class="temp"> Temp:- ${currenDate && currenDate2[2] &&currenDate2[2].main.temp_min} </small>
             </div>
                 `;
                 document.getElementById("3").addEventListener("click", ()=>{ forecast(currenDate2)}); 

        forth.innerHTML = `<div class="datesection">
                 <p class="day" >${ new Date(currenDate3[0].dt_txt).toLocaleString('en-us', {weekday:'long'})}</p>
                 <p class="date">${currenDate && currenDate3[0].dt_txt.slice(0,11)}</p>
                 </div>
                 <image class="image"   src="https://openweathermap.org/img/w/${ currenDate && currenDate3 && currenDate3[1].weather[0].icon}.png ">
                 <div class="tem_section">
                 <small> temp_min :- ${currenDate && currenDate3[3] && currenDate3[3].main.temp_min} </small><span></span>
                 <small> temp_max :- ${currenDate && currenDate3[3] && currenDate3[3].main.temp_max} </small><br>
                 <small class="temp"> Temp:- ${currenDate && currenDate3[3] && currenDate3[3].main.temp_min} </small>
                 </div>
                     `;
                     document.getElementById("4").addEventListener("click", ()=>{ forecast(currenDate3)});

        fifth.innerHTML = `<div class="datesection">
                     <p class="day">${ new Date(currenDate4[0].dt_txt).toLocaleString('en-us', {weekday:'long'})}</p>
                     <p class="date">${currenDate4[0].dt_txt.slice(0,11)}</p>
                     </div>
                     <image class="image"   src="https://openweathermap.org/img/w/${ currenDate && currenDate4 && currenDate4[1].weather[0].icon}.png ">
                     <div class="tem_section">
                     <small> temp_min :- ${ currenDate && currenDate4[4] && currenDate4[4].main.temp_min} </small><span></span>
                     <small> temp_max :-${currenDate && currenDate4[4] && currenDate4[4].main.temp_max}  </small><br>
                     <small class="temp"> Temp:- ${currenDate && currenDate4[4] &&currenDate4[4].main.temp_min}</small>
                     </div>
                         `;
                         console.log(currenDate4,"get")
                         document.getElementById("5").addEventListener("click", ()=>{ forecast(currenDate4)});
      
 
      



 }) .catch(err => console.log(err))
 







  // const weekday = [
  //   "Sunday",
  //   "Monday",
  //   "Tuesday",
  //   "Wednesday",
  //   "Thursday",
  //   "Friday",
  //   "Saturday",
  // ];

  // weekday[0] = "Sunday";
  // weekday[1] = "Monday";
  // weekday[2] = "Tuesday";
  // weekday[3] = "Wednesday";
  // weekday[4] = "Thursday";
  // weekday[5] = "Friday";
  // weekday[6] = "Saturday";

  // var one = weekday[CheckDay(0)];
  // var two = weekday[CheckDay(1)];
  // var three = weekday[CheckDay(2)];
  // var four = weekday[CheckDay(3)];
  // var five = weekday[CheckDay(4)];

  // function CheckDay(day) {
  //   if (day + d.getDay() > 6) {
  //     return day + d.getDay() - 7;
  //   } else {
  //     return day + d.getDay();
  //   }
  // }
};

function forecast(data){


  var table = document.getElementById("tbody");
 var row = '';
data.map(obj=>{
   
var checking="";
var timing="";
if(obj.dt_txt.slice(11,13)>=12){
    checking="PM"
}
else{checking="AM"}
if((obj.dt_txt).slice(11,13)%12=="0"){
    timing="12"
}
else{ timing=(obj.dt_txt).slice(11,13)%12}
console.log(timing)
     row +=`
   <tr> 
   <td>${timing}${checking}</td>
  <td>${obj.main.temp}</td>
  <td>${obj.weather[0].main}</td>
 

</tr>  
  `
  table.innerHTML=row;
})

}



 function down (e,obj) {
  // attach keyDown event
  {
    var evt=e||window.event;
    if(evt.keyCode==8)
    {
      obj.value='';
        location.reload();
    }
}
}
// window.addEventListener('keydown', function down(e)
// {
//     if( e.keyCode == '8' )
//     {
//         e.preventDefault();  // prevent backspace from going to browser
//                           // history
//         // add reload code
//         location.reload();
//     }
// }, false);