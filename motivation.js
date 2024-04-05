var motivations = [
  `menjadi diri sendiri lebih baik dari pada menjadi orang lain karena kita tidak tahu resiko apa yang di ambil orang lain disaat kita ingin menjadi dirinya\n\n-RexxzynXD`,
  `orang lain hanya bisa menilai sifat,ekonomi, karakteristik kita, tapi mereka tidak bisa tidak bisa menilai sifat, ekonomi, karakteristik mereka Sendiri\n\n-RexxzynXD`,
  `berbohong terhadap kejujuran bukan lah hal yang buruk\n\n-RexxzynXD`,
];

var randomMotivation =
  motivations[Math.floor(Math.random() * motivations.length)];

document.querySelector(".motivation").textContent =
  '"' + randomMotivation + '"';
