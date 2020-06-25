// front end javascript goes here...

// submit event
$(".submit-button").on("click", (event) => {
event.preventDefault();
    let newBurger = {
        name: $("#burger-input").val().trim()
    }
    console.log(newBurger);
    
    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(() => {
        console.log("New burger created");
        location.reload();        
    });
});

// devour it on click event