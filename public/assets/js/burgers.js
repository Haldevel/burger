//The front-end javascript file
// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".change-devoured").on("click", function (event) { //on click event handler allowing to set devoured property to true by clicking a button
    var id = $(this).data("id");
    var devourToTrue = {
      devoured: true
    };

    // Send the PUT request to update a burger 'devoured' property and set it to true
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devourToTrue
    }).then(
      function () {
        console.log("changed devoured to true");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".add-form").on("submit", function (event) { //event handler for Submit button which adds a new burger to the db
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    //read the name of a new burger
    var newBurger = {
      burger_name: $("#newb").val().trim()
    };

    //Send the POST request with the new burger name and set its devoured property to false
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
