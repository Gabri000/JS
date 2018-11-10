function msg(message) {
    // Get the snackbar DIV
    var sB = document.getElementById("snackBar");

    // Add the "show" class to DIV
    sB.className = "show";

    // Sets the value requested as text of the DIV
    sB.innerHTML = message;

    // After 3 seconds, remove the show class from DI
    setTimeout(function() { sB.className = sB.className.replace("show", ""); sB.innerHTML = "";}, 2500);
}
