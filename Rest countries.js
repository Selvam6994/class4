
var request = new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all');
request.send();
request.onload = function(){
    var countryData = JSON.parse(this.response);
for (let country of countryData){
    console.log(country.flags);
}
};