function btnCalculer_onclick()
{ 
 	var PdLbs, PdKg;

 	PdLbs = parseFloat(document.getElementById("PdLbs").value);
    PdKg = PdLbs/2.2;

    console.log("Votre poids en Kilogramme est "+PdKg);

}