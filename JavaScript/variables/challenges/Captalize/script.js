const myString ='developer';
let newString;
newString= myString.charAt(0).toUpperCase();
newString += myString.substring(1);
console.log(newString);

function fistCharUpper(string){
    let strList=string.split(" ");
    let result= new String;
    console.log( strList);
    for (n in strList){
        strList[n]= strList[n].charAt(0).toUpperCase()+ strList[n].substring(1);
        if (n>0){
            result+= " "+strList[n];
        }
        else {
            result += strList[n];
        }
        n++;
    }
    console.log(result);
    return result;
}

const string = "very very very very good!!!";

console.log(fistCharUpper(string))