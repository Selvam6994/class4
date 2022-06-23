//To get countries data
var request = new XMLHttpRequest();
request.open('GET','http://api.countrylayer.com/v2/all?access_key=aa593ac46fd61dc3befb1c15f106fa48');
request.send();
request.onload = function(){
    var countryData = JSON.parse(this.response);
for (let country of countryData){
    console.log(country.name);
    console.log(country.capital);
    console.log(country.region);
   
}
};