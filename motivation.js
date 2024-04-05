var motivations = [
  "menjadi diri sendiri lebih baik dari pada menjadi orang lain karena kita tidak tahu resiko apa yang di ambil orang lain disaat kita ingin menjadi dirinya\n\n[ RexxzynXD ]",
  "orang lain hanya bisa menilai sifat,ekonomi, karakteristik kita, tapi mereka tidak bisa tidak bisa menilai sifat, ekonomi, karakteristik mereka Sendiri\n\n[ RexxzynXD] ",
  "berbohong terhadap kejujuran bukan lah hal yang buruk\n\n[ RexxzynXD ]",
  "Balas dendam dengan cara yang bodoh adalah titik di mana kamu membalasnya dengan titik buta tidak menemukan cara lainya\n\n[ RexxzynXD ]",
  "diungkit atau mengungkit lebih untung mana?, diungkit? atau mengungkit? Dua duanya tidak untung terhadap dirimu sendiri memilih diam adalah cara yang bagus agar dua hal itu tidak terjadi\n\n[ RexxzynXD ]",
  "Nothing lasts forever, we can change the future\n\n[ RexxzynXD ]",
  "percaya atau tidak percaya kita hanya bisa membuktikannya dengan hasil bukan sekedar kata\n\n[ RexxzynXD ]",
  "Dalam dunia terkutuk ini, kedamaian dimana setiap orang saling mengerti hanyalah sebuah angan-angan.\n\n[ Surya ]",
  "apapun masalahmu tetap berada di jalan Allah sobat.\n\n[ Hyuu Official ]",
  "walau sendirian saya tidak akan Tumbang\n\n[ KyuuRzy ]",
  "Gak Takut Di Benci dan gak takut di musuhi, saya solo pun masih bisa berdiri.\n\n[ KyuuRzy ]",
 ];


var randomMotivation =
  motivations[Math.floor(Math.random() * motivations.length)];

document.querySelector(".motivation").textContent =
  '"' + randomMotivation + '"';
