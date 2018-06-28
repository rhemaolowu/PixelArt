const color = $('#colorPicker');
const table = $("#pixelCanvas");
//assigns the color picker and pixel canvas ids to constants

table.on('click', 'td', function(){
  $(this).css('background-color', color.val());
});
//when a box is clicked this adds colour

table.on('dblclick', 'td', function () {
	$(this).css('background-color', '#ffffff');
});
//when the box is double-clicked it returns the colour to white

$('#sizePicker').submit(function(event){
  event.preventDefault();
  //this preveents the process at the back end
  makeGrid();
  // When size is submitted by the user, call makeGrid()
});


function makeGrid() {
  table.children().remove();
  // this clears the grid whenever the submit button is re-clicked

  let row = $('#inputHeight').val();
  let col = $('#inputWeight').val();
  // this gets the values of the height and the Width and assigns the table's id to a constant


  for(var n = 1; n <= row; n ++){
    table.append('<tr></tr>');
    for(var m = 1; m <= col; m ++){
      table.children().last().append("<td></td>");
    }
  }
}
