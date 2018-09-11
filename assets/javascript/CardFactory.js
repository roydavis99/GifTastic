function CreateCardCol(tag, classes, dataTag){
    var col = $("<div class='col-md'>");
    var card = $("<h4>").addClass(classes).attr(dataTag,tag);
    card.text(tag);
    col.append(card);
    return col;
}

function CreateCardArrayWithButton(array, classes){

}