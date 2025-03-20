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

// 14. Bir dizideki her elemanı 3 artıran bir fonksiyon yazın (diziyi yerinde değiştirerek).

const arttir3 = (liste) => {
    return liste.map(x=> x+3)
}

console.log(arttir3([2,3,4,7]));

const arttir = (liste) => {
    for (const key in liste) {
        liste[key] = liste[key] + 3
    }
    return liste
}

console.log(arttir(numbers));

// 15. Bir dizide ilk defa 10 olan elemanın indeksini döndüren bir fonksiyon yazın
const ilk10 = (liste)=>{
    for (const key in liste)  {
        if (liste[key] == 10)
            return key
    }
}
console.log(ilk10([1, 5, 9, 10, 8, 6]));

// 16. Bir dizide tüm sayıların pozitif olup olmadığını kontrol eden bir fonksiyon yazın

const pozitif = (liste) => {
    return liste.filter(x => (x > 0)).length == liste.length
}
console.log(pozitif(numbers));

console.log(pozitif([1,3,4]));

// 17. Bir dizideki 4 karakterden uzun kelimeleri döndüren bir fonksiyon yazın.

const uzun = (liste) => {
    return liste.filter(x => (x.length > 4))
}

console.log(uzun(words));

// 18. Bir dizideki alt dizileri düz bir liste haline getiren bir fonksiyon yazın

const duzliste = (liste) => {
    for (const key in liste) {
        if (typeof liste[key] == "object"){
            let x = Number(key )
            let altDizi = liste[key]
            for (const element of altDizi) {
                if (altDizi.indexOf(element) == 0){
                    liste.splice(x,1,element)
                    x += 1
                }else{
                    liste.splice(x,0,element)
                    x += 1
                }  
            }
        }
    }
    return liste
}

let numbers2 = [1,2,[3,5],7]

console.log(duzliste([1,2,[3,5],7]));

// 19. Bir dizideki kelimeleri harflere ayırıp düz bir liste haline getiren bir fonksiyon yazın.

const ayriliste = (liste) => {
    let newlist = []
    for (const element of liste) {
        if (typeof element == "string") {
            let harflist = element.split("")
            for (const element1 of harflist) {
                newlist.push(element1)
            }
        } else {
            newlist.push(element)
        }
    }
    return newlist
}

console.log(ayriliste(["taha",1,3,"raife"]));

// 20. Bir dizide çift sayıların toplamını hesaplayan bir fonksiyon yazın.


const numbercift = (liste) => {
    liste = liste.filter(x => (x%2 == 0))
    let toplam = 0
    toplam = liste.reduce((toplam,sayi) => toplam+sayi)
    return toplam
}

console.log(numbercift([1,2,4,5,6,7,8,10]));

console.clear()

// Biraz ısındım soruları

// 1. Bir dizideki elemanların sırasını tersine çeviren bir algoritma yazın, ancak dizi elemanlarını doğrudan değiştirmeden yeni bir dizi oluşturun

const ters2 = (liste) => {
    let newlist = []
    let x = (liste.length-1)
    while (x >= 0) {
        newlist.push(liste[x])
        x -= 1
    }
    return newlist
}

console.log(ters2([1,2,3,6,7,8,12]));

// 2. Bir dizideki tüm sayıları çift mi yoksa tek mi olduğuna göre iki ayrı alt diziye ayıran bir fonksiyon yazın.

const control = (liste) => {
    let cift = []
    let tek = []
    for (const element of liste) {
        if (element%2 == 0){
            cift.push(element)
        }else{
            tek.push(element)
        }
    }
    // return `cift ${cift},tek ${tek}`
    // return [cift, tek]
    return {
        cift : cift,
        tek : tek
    }
}
console.log(control([1,3,5,4,6,10]));

// 3. Bir dizide her bir elemandan, kendisinden sonra gelen sayıların toplamını hesaplayıp yeni bir dizi oluşturan bir algoritma yazın.
console.clear()
 const toplam = (liste) => {
     let newlist = []
     index = 0
     while (index < liste.length-1) {
        let sonrakiler = liste.slice(index+1)
        let toplam = sonrakiler.reduce((toplam,sayi) => toplam+sayi)
        newlist.push(toplam)
        index += 1
     }
     return newlist
}
console.log(toplam([1,3,4,5,6]));
