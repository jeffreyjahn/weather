function kToF(k){
    return (9/5 * (k - 273)) + 32;
}
$(document).ready(function() {
    $('form').submit(function() {
        // your code here (build up your url)
        var city = $('#city').val();
        var myKey = "&&appid=81a0bb229a405010e8d37798c50cc122"
        var car ="https://api.openweathermap.org/data/2.5/weather?q="+city+myKey;
        console.log(city);
        console.log(myKey);
        console.log(car);
        $.get(car, function(res) {
            // your code here
            var fahrenheit = kToF(res.main.temp)
            $("#info").html("<h1 id='city-text'>"+res.name+"</h1><p id='temp'>Temperature: "+ fahrenheit+"</p>");
        }, 'json');
        // don't forget to return false so the page doesn't refresh
        return false;
    });
});
