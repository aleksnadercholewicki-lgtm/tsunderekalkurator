
document.getElementById("ramaKalkuratora").hidden = true;
const poleLiczby = document.getElementById("poleLiczby");
function pokazKalkurator() 
{
if(document.getElementById("ramaKalkuratora").hidden === true) 
   {
     document.getElementById("ramaKalkuratora").hidden = false
     poleLiczby.value="";
   }
   else
   {
        document.getElementById("ramaKalkuratora").hidden = true;
   }
}

function wpisz(klikanie) {
  poleLiczby.value += klikanie.value;
}
function wyczysc() {
  poleLiczby.value = "";
}
function oblicz() {
  try {
    // Zamieniamy znak potęgowania ^ na ** zrozumiałe dla JavaScript
    let dzialanie = poleLiczby.value.replaceAll("^", "**");
    poleLiczby.value = eval(dzialanie);
  } catch (blad) {
    poleLiczby.value = "Błąd";
  }
}