// This was a try to create at each index of array's content the formatting as "," and "and".

 function setCorrectFormatting() {
   var len = mainArray.length;
   var pos = 0;
   var temp = new String();
   var resArray[];

   if (len == 0) {
     resArray.push(mainArray[0]);
   } else {
     for (pos < len; pos++) {
     if (pos.equals(len)) {
       mainArray[pos] = " and " + mainArray[pos];
     } else if (!pos.equals(0)) {
       var mainArray[pos] = mainArray[pos] +  ", ",
     }
   }
 }
 }

 var resArray[];
 var len;
 var r;

 len = teachersArray.length;

 for (r = 0; r < len; r++) {
   resArray += teachersArray[r] + ",\n"+r;
 }
 resArray.replace(teachersArray.lastIndexOf(",\n"), "and");
 var res = new String();
 var lastCommapos = new Number();

 res = teachersArray.toString().
 replace(",", ", ");
 lastCommapos = teachersArray.toString().lastIndexOf(",");
 res = res.replace(lastCommapos, " and ");

 return res;
