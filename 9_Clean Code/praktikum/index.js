//Problem 1
//berapa banyak kekurangan dalam penulisan kode dibawah
//jawaban:
//5

//bagian mana saja yang menjadi kekurangan tersebut?
//jawaban:
//pada deklarasi class
//pada pemanggilan variabel dalam class
//pada pembuatan inheritence
//deklarasi array
//pembuatan method

//tuliskan alasan dari setiap kekurangan tersebut
//jawaban:
//harus menggunakan constructor pada pembuatan class
//pada pemanggilan variabel dalam class harus menggunakan this
//inheritence dari class harus menggunakan extend dan super
//deklarasi array yang salah
//pemanggilan method seharusnya tidak begitu.
//nama class dan method harus camelcase

// class user {
//     var id;
//     var username;
//     var password;
// }
// class userservice {
//     user[] users = [];
//     user[] getallusers(){
//         return users
//     }
//     user getuserbyid(userid){
//         return users.filter(userid)
//     }
// }

//problem 2
class Kendaraan {
    constructor() {
      this.roda = 0;
      this.kecepatan = 0;
    }
  }
  
  class Mobil extends Kendaraan {
    berjalan() {
      this.tambahKecepatan(10);
    }
  
    tambahKecepatan(kecepatanBaru) {
      this.kecepatan = this.kecepatan + kecepatanBaru;
    }
  }

const mobil = new Mobil();
mobil.berjalan();
mobil.berjalan();
mobil.berjalan();
console.log(mobil.kecepatan);