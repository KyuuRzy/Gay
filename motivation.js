var motivations = [
  "menjadi diri sendiri lebih baik dari pada menjadi orang lain karena kita tidak tahu resiko apa yang di ambil orang lain disaat kita ingin menjadi dirinya\n\n𝙍𝙚𝙭𝙭𝙯𝙮𝙣𝙓𝘿",
  "orang lain hanya bisa menilai sifat,ekonomi, karakteristik kita, tapi mereka tidak bisa tidak bisa menilai sifat, ekonomi, karakteristik mereka Sendiri\n\n𝙍𝙚𝙭𝙭𝙯𝙮𝙣𝙓𝘿",
  "berbohong terhadap kejujuran bukan lah hal yang buruk\n\n𝙍𝙚𝙭𝙭𝙯𝙮𝙣𝙓𝘿",
  "Balas dendam dengan cara yang bodoh adalah titik di mana kamu membalasnya dengan titik buta tidak menemukan cara lainya\n\n𝙍𝙚𝙭𝙭𝙯𝙮𝙣𝙓𝘿",
  "diungkit atau mengungkit lebih untung mana?, diungkit? atau mengungkit? Dua duanya tidak untung terhadap dirimu sendiri memilih diam adalah cara yang bagus agar dua hal itu tidak terjadi\n\n𝙍𝙚𝙭𝙭𝙯𝙮𝙣𝙓𝘿",
  "Nothing lasts forever, we can change the future\n\n𝙍𝙚𝙭𝙭𝙯𝙮𝙣𝙓𝘿",
  "percaya atau tidak percaya kita hanya bisa membuktikannya dengan hasil bukan sekedar kata\n\n𝙍𝙚𝙭𝙭𝙯𝙮𝙣𝙓𝘿",
  "Dalam dunia terkutuk ini, kedamaian dimana setiap orang saling mengerti hanyalah sebuah angan-angan.\n\n𝙎𝙪𝙧𝙮𝙖",
  "apapun masalahmu tetap berada di jalan Allah sobat.\n\n𝙃𝙮𝙪𝙪 𝙊𝙛𝙛𝙞𝙘𝙞𝙖𝙡",
  "walau sendirian saya tidak akan Tumbang\n\n𝙆𝙮𝙪𝙪𝙍𝙯𝙮",
  "Gak Takut Di Benci dan gak takut di musuhi, saya solo pun masih bisa berdiri.\n\n𝙆𝙮𝙪𝙪𝙍𝙯𝙮",
 ];


var randomMotivation =
  motivations[Math.floor(Math.random() * motivations.length)];

document.querySelector(".motivation").textContent =
  '"' + randomMotivation + '"';
