


var url = "https://api.giphy.com/v1/gifs/search?q="
var key = "&api_key=8KSoVS54pdT0M05ckoFurarYQetJyoap"

function APIGiffyCall(gifSearch) {
    var fullURL = url + gifSearch + key;

    $.ajax({
        url: fullURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        var results = response.data;
        $("#gif-here").empty();

        let max = 10;
        if(results.length < 10){
            max = results.length;
        }
        for (var i = 0; i < max; i++) {
            var gifDiv = $("<div>");
            
            var p = $("<p>");

            p.text("Ratting: " + results[i].rating);

            let gif = results[i].images.fixed_height.url;
            let still = results[i].images.fixed_height_still.url;
            var img = $("<img class='gif'>");
            img.attr("src", still);
            img.attr("data-gif-url", gif);
            img.attr("data-gif-still", still);
            img.attr("data-state", "still");

            gifDiv.append(p);
            gifDiv.append(img);
            gifDiv.addClass("m-1");
            $("#gif-here").prepend(gifDiv);
        }
    });
}