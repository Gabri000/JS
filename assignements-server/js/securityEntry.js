
  requestAccess();
  function requestAccess(pass) {

  var access = prompt("Please enter the password to acces the assignement:", "");
  if (access == null || access == "") {
    setTimeout(history.go(-1), 1);
  } else {
    if (access !== "passw0rd") {
      setTimeout(history.go(-1), 1);
  }
}
}
