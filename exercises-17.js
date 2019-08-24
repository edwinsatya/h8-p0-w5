//Logic Challenge - Kali Terus (Rekursif)

function kaliTerusRekursif(angka) {
    // you can only write your code here!
    if (angka < 9) {
        return angka
    } else {
        var kali = 1;
        var split = String(angka).split(''); 
        for (var i = 0; i < split.length; i++) {
            kali *= Number(split[i]);
        }
        angka = kali;
        return kaliTerusRekursif(angka);
    }
    // while (angka > 9) {
    //     var kali = 1;
    //     var split = String(angka).split('');
    //     for (var i = 0; i < split.length; i++) {
    //         kali *= Number(split[i]);
    //     }
    //     angka = kali;
    // }
    // return angka
};
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6