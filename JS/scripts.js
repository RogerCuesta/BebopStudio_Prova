$(function() {
    $.getJSON('https://gist.githubusercontent.com/RogerCuesta/0f3153d98f8170deb656f8a2288f4613/raw/091f14c0dbb475333ae86d0dade4cb79262c4164/test.json', function(json) {
    console.log(json);
    
    document.getElementById("titulo_cabezera").innerHTML = json.title;

    document.getElementById("img_cabezera").src=json.imgPath;

    document.getElementById("txt_1").innerHTML = json.description;

    document.getElementById("img_content1").src=json.content[0].imgPath;

    document.getElementById("title_content1").innerHTML = json.content[0].title;

    document.getElementById("desc_content1").innerHTML = json.content[0].description;

    document.getElementById("img_content2").src=json.content[1].imgPath;

    document.getElementById("title_content2").innerHTML = json.content[1].title;

    document.getElementById("desc_content2").innerHTML = json.content[1].description;

    

    });
});








