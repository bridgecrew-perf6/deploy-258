var a = 5
let b = "kampus merdeka"
const nama = "Budi";
let terdaftar = false
let lengkap_arr = [a, b, nama, terdaftar]

function perkenalan() {
    let asal = "Indonesia"
    return console.log(
        "perkenalkan nama saya " + nama + " nomor urut " + a + " sekarang sedang mengikuti " + b + " berasal dari " + asal
    )
}
//jawaban no 1b
terdaftar = true
if(terdaftar === true){
    console.log(nama + " terdaftar sebagai kegiatan kampus merdeka")
}

a = b
// nama = b

// console.log("asal diakses = " + asal)
console.log("a adalah = " +a)
console.log("b adalah = " +b)
//jawaban no 1c
perkenalan()

//jawaban no 1a
console.log("array = " + lengkap_arr[2])

//jawaban no2
//a. karena variabel terdaftar bernilai false, ketika di lakukan pengecekan pada if tidak benar, jadi tidak jalan.
//b. karena variabel nama bersifat constant tidak bisa di reassign
//c. tidak, karena mereka berdua tidak berhubungan, tidak bisa dijalankannya baris 28 karena variabel asal merupakan variabel local pada fungsi perkenalan

//jawaban no 3
const foo = ['Budi', 'Sita', 'Ayu']
const [x, y, z] = foo
console.log(x, y, z)

//jawaban no 4
console.log("jawaban no 4")
let bdays = ['10-17', '05-19', '20-19']
// var bday = []
// bdays.forEach(element => {
//     i = element.slice(0,2) + '/' + element.slice(3,5)
//     bday.push(i)
// });
let bday = bdays.map(function(element){
    return element.slice(0,2) + '/' + element.slice(3,5)
})
console.log(bday)

//jawaban no 5
console.log("jawaban no 5")
let value = [1,2,3,4,5,6]
console.log(value.map(x => x * 2))

//jawaban no 6
console.log("jawaban no 6")
let arr = [1.5, 2.56, 5.1, 12.33]
let data = arr.map(
    function(i){
        return Math.round(i)
})
console.log(data)