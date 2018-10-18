function btnCalculer_onclick()
{ 
 	var MoyKmMois, TotKm;

 	PdLbs = parseFloat(document.getElementById("MoyKmMois").value);
    TotKm = (MoyKmMois*12)*5;

    console.log("Le total de Kilomètre en 5 ans est: "+TotKm);

}