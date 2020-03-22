class Weather {
    constructor(city,state){
        this.apikey= "ce4dfc7f37f7c20fd2dee216ffbf2880";
        this.city = city;
        this.state = state;
    }
async getweather(){
        let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apikey}`);
        console.log(`api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apikey}`);
        let reaponsedata = await response.json();

        return reaponsedata;
    }
}
