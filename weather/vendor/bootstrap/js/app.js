

  


  document.getElementById("save").addEventListener("click",getweatherdata);

  function getweatherdata(e){

    let city = document.getElementById("city").value;
    let state = document.getElementById("state").value;
    let newdata;
    $('#target').modal('hide')

    let weather = new Weather(city,state);
    weather.getweather()
    .then(data => {
        let ui = new UI();
    ui.adddetails(data,city,state);
    })
    .catch(err => console.log(err));
  
      
  }