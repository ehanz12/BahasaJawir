let nilaia;
let nilaib;
let volnilaia;
let volnilaib;
let volnilaiab;
function hitungVolnilaiab() {
	nilaia = parseFloat(document.getElementById("nilaia").value);//getelemntbyid mengambil nilai yang ditentukan contoh"a"
	nilaib = parseFloat(document.getElementById("nilaib").value);//value adalah sebuah nilai
	volnilaia = nilaia*nilaia*nilaia;//operator aritmetika
	volnilaib = nilaib*nilaib*nilaib;//operator aritmetika
    volnilaiab = volnilaia + volnilaib;//operator aritmetika
	document.getElementById('Volnilaia').value = volnilaia;
	document.getElementById('Volnilaib').value = volnilaib;
    document.getElementById('Volnilaiab').value = volnilaiab;
}