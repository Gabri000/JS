
/*
This page has been created by Gabriele BONANOMI
*/

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
