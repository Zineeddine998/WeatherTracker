class UI{

constructor(){

}

adddetails(data,city,state){
    

     let list = document.getElementById("elements");
     let c = parseInt(parseInt(data.main.temp)- 273,15);
   
     console.log(list);
  list.innerHTML+=`
         <div class="card">
     <div class="card-body text-center">
       <p class="card-text">
       <div class="card-body">
       <h4 class="card-title" style="color: gray;">${city+", "+state}</h4>
       <p class="card-text" style="color: gray;">
       <ul class="list-group">
        <li class="list-group-item">Temparture :${data.main.temp} F°</li>
        <li class="list-group-item">Temparture :${c} C°</li>
        <li class="list-group-item">Feels like :${data.main.feels_like} </li>
        <li class="list-group-item">Humidity :${data.main.humidity} </li>
        <li class="list-group-item">Pressure :${data.main.pressure}</li>
       </ul>
       </p>
     </div>
       </p>
     </div>
   </div> `;
}


}