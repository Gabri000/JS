
/*
This page has been created by Gabriele BONANOMI
*/

function openPage(code, href) {

  if (code.includes("i")) {
    window.open("../" + href + ".htm", "_self");
  }

  if (code.includes("a")) {
    window.open("assignement-" + href + ".htm", "_self");
  }

}
