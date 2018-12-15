
/*
This page has been created by Gabriele BONANOMI
*/

// To support all devices' width and screen size.
document.write("<meta charset='utf-8'>" + "\n" + "<meta name='viewport' content='width=device-width'>");

function openPage(code, href) {

  if (code.includes("indx")) {
    window.open("../" + href + ".htm", "_self");
  }

  if (code.includes("asgn")) {
    window.open("assignement-" + href + ".htm", "_self");
  }

  if (code.includes("img")) {

    window.open("../img/" + href + ".png", "_self");

  }

}
