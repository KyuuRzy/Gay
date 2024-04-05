var motivations = [
  `menjadi diri sendiri lebih baik dari pada menjadi orang lain karena kita tidak tahu resiko apa yang di ambil orang lain disaat kita ingin menjadi dirinya\n\nRexxzynXD`,
  `orang lain hanya bisa menilai sifat,ekonomi, karakteristik kita, tapi mereka tidak bisa tidak bisa menilai sifat, ekonomi, karakteristik mereka Sendiri\n\nRexxzynXD`,
  `berbohong terhadap kejujuran bukan lah hal yang buruk\n\nRexxzynXD`,
  `Balas dendam dengan cara yang bodoh adalah titik di mana kamu membalasnya dengan titik buta tidak menemukan cara lainya\n\nRexxzynXD`,
  `diungkit atau mengungkit lebih untung mana?, diungkit? atau mengungkit? Dua duanya tidak untung terhadap dirimu sendiri memilih diam adalah cara yang bagus agar dua hal itu tidak terjadi\n\nRexxzynXD`,
  `Nothing lasts forever, we can change the future"\n\nRexxzynXD`,
  `percaya atau tidak percaya kita hanya bisa membuktikannya dengan hasil bukan sekedar kata\n\nRexxzynXD`,
  `Dalam dunia terkutuk ini, kedamaian dimana setiap orang saling mengerti hanyalah sebuah angan-angan.\n\nSurya`,
  `apapun masalahmu tetap berada di jalan Allah sobat.\n\nHyuu Official`
  `walau sendirian saya tidak akan Tumbang\n\nKyuuRzy`,
  `Gak Takut Di Benci dan gak takut di musuhi, saya solo pun masih bisa berdiri.\n\nKyuuRzy`,
 ];


var randomMotivation =
  motivations[Math.floor(Math.random() * motivations.length)];

document.querySelector(".motivation").textContent =
  '"' + randomMotivation + '"';
