
const parolaUno = prompt("Insert your first word!")
const parolaDue = prompt("Insert your second word!")




function sameLengthOrNot (firstWord , secondWord){
    if (firstWord.length === secondWord.length){
        return true;
    } {
        return false;
    }
}

if (sameLengthOrNot (parolaUno , parolaDue)){
    console.log(parolaUno , parolaDue);
} else if (parolaUno.length > parolaDue.length){
    console.log(parolaUno);
} else {
    console.log(parolaDue);
}
