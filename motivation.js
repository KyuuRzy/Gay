var motivations = [
  `menjadi diri sendiri lebih baik dari pada menjadi orang lain karena kita tidak tahu resiko apa yang di ambil orang lain disaat kita ingin menjadi dirinya
  
  -RexxzynXD`,
  `orang lain hanya bisa menilai sifat,ekonomi, karakteristik kita, tapi mereka tidak bisa tidak bisa menilai sifat, ekonomi, karakteristik mereka Sendiri
  
  -RexxzynXD`,
  `berbohong terhadap kejujuran bukan lah hal yang buruk
  
  -RexxzynXD`,
  `Balas dendam dengan cara yang bodoh adalah titik di mana kamu membalasnya dengan titik buta tidak menemukan cara lainya

  -RexxzynXD`,
  `diungkit atau mengungkit lebih untung mana?, diungkit? atau mengungkit? Dua duanya tidak untung terhadap dirimu sendiri memilih diam adalah cara yang bagus agar dua hal itu tidak terjadi

  -RexxzynXD`,
  `Nothing lasts forever, we can change the future

  -RexxzynXD`,
  `percaya atau tidak percaya kita hanya bisa membuktikannya dengan hasil bukan sekedar kata

  -RexxzynXD`,
  `Dalam dunia terkutuk ini, kedamaian dimana setiap orang saling mengerti hanyalah sebuah angan-angan.

  -Surya`,
  `apapun masalahmu tetap berada di jalan Allah sobat."

~ Friend Kiki`
];

var randomMotivation =
  motivations[Math.floor(Math.random() * motivations.length)];

document.querySelector(".motivation").textContent =
  '"' + randomMotivation + '"';
