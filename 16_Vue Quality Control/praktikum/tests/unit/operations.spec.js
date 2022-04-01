import * as operasi from "@/utils/operations";

//Melakukan Penjumlahan
describe("Melakukan penjumlahan", () => {
  test("Penjumlahan dua bilangan positif", () => {
    expect(operasi.penjumlahan(2, 4)).toBe(6);
  });
  test("Penjumlahan dua bilangan negatif", () => {
    expect(operasi.penjumlahan(-10, -2)).toBe(-12);
  });
  test("Penjumlahan dua bilangna non numerik", () => {
    expect(operasi.penjumlahan("1", "0")).toBe("10");
  });
});
//Melakukan Pengurangan
describe("Melakukan pengurangan", () => {
  test("Pengurangan dua bilangan positif", () => {
    expect(operasi.pengurangan(6, 6)).toBe(0);
  });
  test("Pengurangan dua bilangan negatif", () => {
    expect(operasi.pengurangan(-2, -2)).toBe(0);
  });
  test("Pengurangan dua bilangan desimal", () => {
    expect(operasi.pengurangan(2.9 - 1.0)).toBe(NaN);
  });
});
//Melakukan Pembagian
describe("Melakukan Pembagian", () => {
  test("Pembagian dua bilangan bulat positif", () => {
    expect(operasi.pembagian(6, 3)).toBe(2);
  });
  test("Pembagian dua bilangan bulat negatif", () => {
    expect(operasi.pembagian(-2, -4)).toBe(0.5);
  });
  test("Pembagian dua bilangan yang sama banyak", () => {
    expect(operasi.pembagian(6, 6)).toBe(1);
  });
});
//Melakukan Perkalian
describe("Melakukan Perkalian", () => {
  test("Perkalian dua bilangan bulat positif", () => {
    expect(operasi.perkalian(3, 10)).toBe(30);
  });
  test("Perkalian dua bilangan negatif", () => {
    expect(operasi.perkalian(-3, -2)).toBe(6);
  });
  test("Perkalian dua bilangan yang sama banyak", () => {
    expect(operasi.perkalian(10, 10)).toBe(100);
  });
});
//Mencari Nilai Rata - Rata
describe("Nilai Rata-Rata", () => {
  test("Nilai rata-rata bilangan positif", () => {
    expect(operasi.rataRata(2, 2, 3, 4, 5)).toBe(3.2);
  });
  test("Nilai rata-rata dari bilangan negatif", () => {
    expect(operasi.rataRata(-1, -2, -3, -4, -5)).toBe(-3);
  });
  test("Nilai rata rata bilangan yang sama banyak", () => {
    expect(operasi.rataRata(2, 2, 2, 2, 2)).toBe(2);
  });
});
//Modulus
describe("Melakukan Modulus", () => {
  test("Modulus dari bilangan bulat positif", () => {
    expect(operasi.modulus(5, 3)).toBe(2);
  });
  test("Modulus dari dua bilangan negatif", () => {
    expect(operasi.modulus(-7, -3)).toBe(-1);
  });
  test("Modulus dari dua bilangan yang sama banyak", () => {
    expect(operasi.modulus(5, 5)).toBe(0);
  });
});

//Luas Persegi
describe("Menghitung Luas Persegi", () => {
  test("Luas Persegi 1", () => {
    expect(operasi.luasPersegi(4, 4)).toBe(16);
  });
  test("Luas Persegi 2", () => {
    expect(operasi.luasPersegi(6, 6)).toBe(36);
  });
  test("Luas Persegi 3", () => {
    expect(operasi.luasPersegi(5, 5)).toBe(25);
  });
});

//Luas Lingkaran
describe("Luas Lingkaran", () => {
  test("Luas Lingakaran 1", () => {
    expect(operasi.luasLingkaran(3.14, 8)).toBe(200.96);
  });
  test("Luas Lingakaran 2", () => {
    expect(operasi.luasLingkaran(24 / 7, 8)).toBe(219.42857142857142);
  });
  test("Luas Lingakaran 3", () => {
    expect(operasi.luasLingkaran(3.14, 2)).toBe(12.56);
  });
});
//Luas Kubus
describe("Luas Kubus", () => {
  test("Luas Kubus 1", () => {
    expect(operasi.luasKubus(6)).toBe(216);
  });
  test("Luas Kubus 2", () => {
    expect(operasi.luasKubus(7)).toBe(294);
  });
  test("Luas Kubus 3", () => {
    expect(operasi.luasKubus(8)).toBe(384);
  });
});
//Volume Kubus
describe("Volume Kubus", () => {
  test("Volume Kubus 1", () => {
    expect(operasi.volumeKubus(4, 4, 4)).toBe(64);
  });
  test("Volume Kubus 2", () => {
    expect(operasi.volumeKubus(5, 5, 5)).toBe(125);
  });
  test("Volume Kubus 3", () => {
    expect(operasi.volumeKubus(6, 6, 6)).toBe(216);
  });
});
