

$.getJSON('https://gist.githubusercontent.com/RogerCuesta/0f3153d98f8170deb656f8a2288f4613/raw/091f14c0dbb475333ae86d0dade4cb79262c4164/test.json', function(json) {
    console.log(json);
    
    document.getElementsByClassName("titulo_cabezera").innerHTML = json.title;
});




