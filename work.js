
//ToDo here is the layout 
        {/* <div class = "row time-block">
        <div class = "col-md-2 hour">
            9 am
        </div>
        <textarea class = "col-md-8">
            
        </textarea>
            <button class = "col-md-2 saveBtn">
                save

            </button>   
// </div> */}

//show the day on top of calendar. Use moment.js grab the time, and set text of ptag w/ id currentDay to display the current day.

var day = $('<p>');
    day.text(moment().format("dddd, MMMM Do, YYYY. h:mm A"));
    $('.jumbotron').append(day);

//Create an array that holds strings of all the businesshours from 9am to 5 pm. 

var businessHours = ['9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM']



var currentTime = moment().format("H")

for(i = 0; i < businessHours.length; i++){
    var row = $('<div>')
        row.addClass("row time-block")
       
    var timeCol = $('<div>');
        timeCol.addClass("col-md-1 hour");
        timeCol.text(businessHours[i]);
        row.append(timeCol);
    var textCol =$('<textarea>');
        textCol.addClass(`col-md-10 ${i}`);
        textCol.attr('data-time', i+9);
        textCol.attr('id', i)
        row.append(textCol);
    var saveBtn = $('<button>');
        saveBtn.addClass(`col-md-1 saveBtn ${i}`);
        saveBtn.text("Save");
        row.append(saveBtn)


        $('.container').append(row);
}

//Saving notes to text area.

$("textarea").each(function(){
    if(parseInt($(this).attr('data-time')) > parseInt(currentTime)){
        console.log(currentTime)
        $(this).addClass("future")
    } else if(parseInt($(this).attr('data-time')) === parseInt(currentTime)){
        $(this).addClass("present")
    } else {
        $(this).addClass("past")
    }    

})


//click events to log text area into local storage.
$('.container').on('click', '.0', function() {
    var note = $(this).siblings('textarea');
    localStorage.setItem('nine', note.val())
})

$('.container').on('click', '.1', function() {
    var note = $(this).siblings('textarea');
    localStorage.setItem('ten', note.val())
})

$('.container').on('click', '.2', function() {
    var note = $(this).siblings('textarea');
    localStorage.setItem('eleven', note.val())
})

$('.container').on('click', '.3', function() {
    var note = $(this).siblings('textarea');
    localStorage.setItem('twelve', note.val())
})

$('.container').on('click', '.4', function() {
    var note = $(this).siblings('textarea');
    localStorage.setItem('one', note.val())
})

$('.container').on('click', '.5', function() {
    var note = $(this).siblings('textarea');
    localStorage.setItem('two', note.val())
})

$('.container').on('click', '.6', function() {
    var note = $(this).siblings('textarea');
    localStorage.setItem('three', note.val())
})

$('.container').on('click', '.7', function() {
    var note = $(this).siblings('textarea');
    localStorage.setItem('four', note.val())
})

$('.container').on('click', '.8', function() {
    var note = $(this).siblings('textarea');
    localStorage.setItem('five', note.val())
})

//Get item from local storage that has been saved by user.
var test = localStorage.getItem("nine");
$("#0").text(test);

var test = localStorage.getItem("ten");
$("#1").text(test);

var test = localStorage.getItem("eleven");
$("#2").text(test);

var test = localStorage.getItem("twelve");
$("#3").text(test);

var test = localStorage.getItem("one");
$("#4").text(test);

var test = localStorage.getItem("two");
$("#5").text(test);

var test = localStorage.getItem("three");
$("#6").text(test);

var test = localStorage.getItem("four");
$("#7").text(test);

var test = localStorage.getItem("five");
$("#8").text(test);
