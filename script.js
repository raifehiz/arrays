// 1. Bir dizideki pozitif sayıların karesini alıp, sonucu 50'den büyük olanları döndüren bir fonksiyon yazın
const numbers = [24,12,-4,-96,2,6,8,87];

function elliArray(sayilar){
    const pozitif = sayilar.filter(x => x > 0);
    const karesi = pozitif.map(x => x*x);
    const elliBüyük = karesi.filter(x => x > 50)
    return elliBüyük
}

console.log(elliArray(numbers));

// 2. Bir dizideki tüm sayıların çarpımını hesaplayan bir fonksiyon yazın

function carpim(sayilar){
    return sayilar.reduce((carpim,sayi) => carpim*sayi)
} 
console.log(carpim(numbers));

// 3. Bir dizideki ilk negatif sayının indeksini döndüren bir fonksiyon yazın

function negatif(sayilar){
    for (const key in sayilar) {
    if (sayilar[key] < 0) {
            return key
        }
    }
}

console.log(negatif(numbers));

// 4. Bir dizideki kelimelerin hepsini büyük harfe çeviren bir fonksiyon yazın

const words = ["taha","tunahan","raife"]

function büyük(liste){
    return words.map(x => x.toUpperCase())
}
console.log(büyük(words));

// 5. Bir dizide ilk 50'den büyük sayıyı bulan bir fonksiyon yazın.

function elli(sayilar){
    for (const key in sayilar) {
    if (sayilar[key] > 50) {
            return sayilar[key]
        }
    }
}
console.log(elli(numbers));

// 6. Bir dizideki sayıların karesini alıp, sonucu 100'den küçük olanları döndüren bir fonksiyon yazın

// 7. Bir dizide tüm elemanların çift sayı olup olmadığını kontrol eden bir fonksiyon yazın.

function ciftMi(sayilar){
    return sayilar.filter(x => ((x%2) == 0)).length == sayilar.length
}

console.log(ciftMi(numbers));

// 8. Bir diziyi tersten oluşturmak için bir fonksiyon yazın.

function ters(liste){
    return liste.reverse()
}

console.log(ters(words));

// 9. Bir dizide en az bir elemanın 10'un katı olup olmadığını kontrol eden bir fonksiyon yazın

function onKati(liste){
    return liste.filter(x => ((x%10) == 0)).length >= 1
}

console.log(onKati(numbers));

// 10. Bir dizideki tüm kelimeleri ters çeviren bir fonksiyon yazın

function terscevir(liste){
    return liste.map(x => x.split("").reverse().join(""))
}

console.log(terscevir(words));
console.log(words);

// 11. Bir diziden sadece tek sayıları döndüren bir fonksiyon yazın.

// 12. Bir dizideki her elemana indeksini ekleyip yeni bir dizi döndüren bir fonksiyon yazın

function indexEkle(liste){
    let liste2 = []
    for (const key in liste) {
          liste2.push(key, liste[key])
        }
        return liste2
}

console.log(indexEkle(words));

// 13. Bir dizideki en büyük sayıyı bulan bir fonksiyon yazın

function enBuyuk(liste){
    let enBuyuk1 = liste[0];
    for (const element of liste) {
        if (element > enBuyuk1){
            enBuyuk1 = element
        }
    }
    return enBuyuk1
}

console.log(enBuyuk(numbers));

