
var searches = [];

$(document).ready(function () {

    loadMemory();
    LoadSearchDisplay();

    $("#submit").click(function () {
        let tag = $("#gif-search").val().trim();
        $("#btn-here").append(CreateCardCol(tag, "button-tag text-center border border-primary p-1", "data-tag"));
        searches.push(tag);
        saveMemory();
    });

    $(document).on("click", ".button-tag", function () {
        let tag = $(this).attr("data-tag");
        console.log(tag);
        APIGiffyCall(tag);
    });

    $(document).on("click", ".gif", function () {
        if($(this).attr("data-state") === "still"){
            $(this).attr("src", $(this).attr("data-gif-url"));
            $(this).attr("data-state", "gif");
        }else{
            $(this).attr("src", $(this).attr("data-gif-still"));
            $(this).attr("data-state", "still");
        }
    });

});

function loadMemory(){
    searches = JSON.parse(localStorage.getItem("searches")) || [];
}

function saveMemory(){
    localStorage.setItem("searches", JSON.stringify(searches));
}

function LoadSearchDisplay(){
    searches.forEach(item => {
        $("#btn-here").append(CreateCardCol(item, "button-tag text-center border border-primary p-1", "data-tag"));
    });
}
