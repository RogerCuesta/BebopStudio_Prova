/*function getJSONP(url, success) {

    var ud = '_' + +new Date,
        script = document.createElement('script'),
        head = document.getElementsByTagName('head')[0] 
               || document.documentElement;

    window[ud] = function(data) {
        head.removeChild(script);
        success && success(data);
    };

    script.src = url.replace('callback=?', 'callback=' + ud);
    head.appendChild(script);

}

getJSONP('https://gist.githubusercontent.com/RogerCuesta/0f3153d98f8170deb656f8a2288f4613/raw/091f14c0dbb475333ae86d0dade4cb79262c4164/test.json', function(data){
    console.log(data);
});*/

$.getJSON('https://gist.githubusercontent.com/RogerCuesta/0f3153d98f8170deb656f8a2288f4613/raw/091f14c0dbb475333ae86d0dade4cb79262c4164/test.json', function(json) {
    console.log(json);
    //access your JSON file through the variable "json"
});
