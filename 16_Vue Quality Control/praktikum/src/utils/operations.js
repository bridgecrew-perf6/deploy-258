export const penjumlahan = (bilangansatu, bilangandua) => {
  return bilangansatu + bilangandua;
};

export const pengurangan = (bilangansatu, bilangandua) => {
  return bilangansatu - bilangandua;
};

export const pembagian = (bilangansatu, bilangandua) => {
  return bilangansatu / bilangandua;
};

export const perkalian = (bilangansatu, bilangandua) => {
  return bilangansatu * bilangandua;
};

export const rataRata = (
  bilangansatu,
  bilangandua,
  bilangantiga,
  bilanganempat,
  bilanganlima
) => {
  return (
    (bilangansatu + bilangandua + bilangantiga + bilanganempat + bilanganlima) /
    5
  );
};

export const modulus = (bilangansatu, bilangandua) => {
  return bilangansatu % bilangandua;
};

export const luasPersegi = (sisisatu, sisidua) => {
  return sisisatu * sisidua;
};

export const luasLingkaran = (phi, jarijari) => {
  return phi * (jarijari * jarijari);
};

export const luasKubus = (sisi) => {
  return 6 * (sisi * sisi);
};

export const volumeKubus = (sisisatu, sisidua, sisitiga) => {
  return sisisatu * sisidua * sisitiga;
};
