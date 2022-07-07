var button = document.querySelector("#heroButton");
var searchText = document.querySelector("#search-input");

var searchHandle = function (event){
    event.preventDefault();
    var search= searchText.value.trim()
    console.log(search);
    console.log("working");
}





button.addEventListener('click', searchHandle);



