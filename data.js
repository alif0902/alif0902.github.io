const  namaSaya = "Chairun Annisa Yusran";
let usia = 22;
console.log("nama saya adalah", namaSaya);
console.log("usia saya adalah", usia);

function panggilNama(){
    if(usia > 18){
        console.log("tua");

    } else {
        console.log("muda");

    }
    console.log(`nama saya adalah ${namaSaya} dan usia saya ${usia} tahun`);

}
panggilNama();