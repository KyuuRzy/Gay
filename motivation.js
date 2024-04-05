var motivations = [
  "menjadi diri sendiri lebih baik dari pada menjadi orang lain karena kita tidak tahu resiko apa yang di ambil orang lain disaat kita ingin menjadi dirinya\n\n𝗥𝗲𝘅𝘅𝘇𝘆𝗻𝗫𝗗",
  "orang lain hanya bisa menilai sifat,ekonomi, karakteristik kita, tapi mereka tidak bisa tidak bisa menilai sifat, ekonomi, karakteristik mereka Sendiri\n\n𝗥𝗲𝘅𝘅𝘇𝘆𝗻𝗫𝗗",
  "berbohong terhadap kejujuran bukan lah hal yang buruk\n\n𝗥𝗲𝘅𝘅𝘇𝘆𝗻𝗫𝗗",
  "Balas dendam dengan cara yang bodoh adalah titik di mana kamu membalasnya dengan titik buta tidak menemukan cara lainya\n\n𝗥𝗲𝘅𝘅𝘇𝘆𝗻𝗫𝗗",
  "diungkit atau mengungkit lebih untung mana?, diungkit? atau mengungkit? Dua duanya tidak untung terhadap dirimu sendiri memilih diam adalah cara yang bagus agar dua hal itu tidak terjadi\n\n𝗥𝗲𝘅𝘅𝘇𝘆𝗻𝗫𝗗",
  "Nothing lasts forever, we can change the future\n\n𝗥𝗲𝘅𝘅𝘇𝘆𝗻𝗫𝗗",
  "percaya atau tidak percaya kita hanya bisa membuktikannya dengan hasil bukan sekedar kata\n\n𝗥𝗲𝘅𝘅𝘇𝘆𝗻𝗫𝗗",
  "Dalam dunia terkutuk ini, kedamaian dimana setiap orang saling mengerti hanyalah sebuah angan-angan.\n\n𝗥𝗲𝘅𝘅𝘇𝘆𝗻𝗫𝗗",
  "apapun masalahmu tetap berada di jalan Allah sobat.\n\n𝗛𝘆𝘂𝘂 𝗢𝗳𝗳𝗶𝗰𝗶𝗮𝗹",
  "walau sendirian saya tidak akan Tumbang\n\n𝗞𝘆𝘂𝘂𝗥𝘇𝘆",
  "Gak Takut Di Benci dan gak takut di musuhi, saya solo pun masih bisa berdiri.\n\n𝗞𝘆𝘂𝘂𝗥𝘇𝘆",
 ];


var randomMotivation =
  motivations[Math.floor(Math.random() * motivations.length)];

document.querySelector(".motivation").textContent =
  '"' + randomMotivation + '"';
