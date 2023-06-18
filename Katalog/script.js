const catalogItems = [
    { id: 1, name: "Luwak", nomenclature:"Paradoxurus hermaphroditus", kelangkaan: "Terancam", taksonomi: "Hewan", bahaya: "Tidak Berbahaya",kegunaan: "Konsumsi Non Herbal", image: "image1.jpg", deskripsi: "Memiliki panjang total 90 cm dan berwarna Abu-abu kecokelatan dengan ekor hitam-cokelat. Hewan mamalia ini senang dijumpai diatas pohon aren. Hewan ini digunakan manusia untuk membuat kopi luwak."},
    { id: 2, name: "Elang Jawa", nomenclature:"Nisaetus bartelsi", kelangkaan: "Langka", taksonomi: "Hewan", bahaya: "Hati-hati", kegunaan: "Non Konsumsi", image: "image2.jpg", deskripsi: "Hewan ini memiliki panjang tubuh 40-65 cm dan panjang ekor 35-56 cm. Hewan mamalia ini diselimuti sisik keras di sekujur tubuhnya yang berguna untuk berlindung dari predator. Hewan ini merupakan salah satu hewan langka yang paling diburu di dunia." },
    { id: 3, name: "Ayam Kampung Merah", nomenclature:"Gallus gallus",kelangkaan: "Tidak Langka", taksonomi: "Hewan", bahaya: "Tidak Berbahaya", kegunaan: "Konsumsi Non Herbal", image: "image3.jpg", deskripsi: "Ayam Kampung Merah jantan bisa memiliki panjang hingga 70 cm. Jantan lebih berwarna daripada betina dengan jantan memiliki badan berwarna merah, oranye, emas, coklat, putih dan hitam, sedangkan betina berwarna cokelat dan kuning." },
    { id: 4, name: "Kancil Jawa", nomenclature:"Tragulus javanicus", kelangkaan: "Terancam", taksonomi: "Hewan", bahaya: "Tidak Berbahaya", kegunaan: "Konsumsi Non Herbal", image: "image4.jpg", deskripsi: "Memiliki panjang 45 cm, hewan ini merupakan hewan berkuku genap terkecil di dunia. Hewan ini merupakan inspirasi dari dongeng masyarakat “kancil”. Hewan ini sering diburu untuk konsumsi hingga populasinya mulai terancam." },
    { id: 5, name: "Macan Tutul Jawa", nomenclature:"Panthera pardus melas", kelangkaan: "Langka", taksonomi: "Hewan", bahaya: "Berbahaya", kegunaan: "Non Konsumsi", image: "image3.jpg", deskripsi: "Hewan ini merupakan spesies macan tutul terakhir di Indonesia dengan jumlah populasi hanya tinggal 188-571 ekor. Hewan ini berwarna dasar kuning keemasan atau hitam dan diselimuti totol-totol hitam di sekujur tubuhnya." },
    { id: 6, name: "Sirih ", nomenclature:"Piper betle", kelangkaan: "Tidak Langka", taksonomi: "Tumbuhan", bahaya: "Tidak Berbahaya", kegunaan: "Konsumsi Herbal", image: "image3.jpg", deskripsi: "Tumbuhan merambat ini memiliki bentuk daun mirip hati. Tumbuhan ini merupakan bagian penting dari tradisi banyak suku di Indonesia dan sering digunakan untuk tradisi mengunyak sirih. Tumbuhan ini memiliki kandungan saponin yang bersifat antiseptik dan bisa digunakan pada bagian tubuh yang terluka." },
    { id: 7, name: "Sirih Gading", nomenclature:"Epipremnum aureum", kelangkaan: "Tidak Langka", taksonomi: "Tumbuhan", bahaya: "Hati-hati", kegunaan: "Non Konsumsi", image: "image3.jpg", deskripsi: "Tumbuhan merambat ini bisa memiliki panjang rambat hinggal 20 m. Bentuk daunnya mirip dengan bentuk hati dan walaupun mirip dengan sirih. Dikarenakan kandungan calcium oxalate tumbuhan, ini cukup beracun bagi manusia dan tidak disarankan untuk mengonsumsinya." },
    { id: 8, name: "Kumis Kucing", nomenclature:"Orthosiphon aristatus", kelangkaan: "Tidak Langka", taksonomi: "Tumbuhan", bahaya: "Tidak Berbahaya", kegunaan: "Konsumsi Herbal", image: "image3.jpg", deskripsi: "Tumbuhan ini memiliki batang lunak tegak dan bungan yang memiliki bentuk seperti kumis kucing. Tumbuhan ini mengandung senyawa inhibitor α-Glukosidase dan antioksidan yang dapat memecah karbohidrat dan mengurangi resiko terkena diabetes." },
    { id: 9, name: "Trenggiling Sunda", nomenclature:"Manis javanica", kelangkaan: "Langka", taksonomi: "Hewan", bahaya: "Tidak Berbahaya", kegunaan: "Non Konsumsi", image: "image3.jpg", deskripsi: "Hewan ini memiliki panjang tubuh 40-65 cm dan panjang ekor 35-56 cm. Hewan mamalia ini diselimuti sisik keras di sekujur tubuhnya yang berguna untuk berlindung dari predator. Hewan ini merupakan salah satu hewan langka yang paling diburu di dunia." },
    { id: 10, name: "Buaya Muara", nomenclature:"Crocodylus porosus", kelangkaan: "Tidak Langka", taksonomi: "Hewan", bahaya: "Berbahaya", kegunaan: "Konsumsi Non Herbal", image: "image3.jpg", deskripsi: "Buaya ini memiliki panjang total 4,5 - 6 meter dengan bobot hingga 1 Ton yang membuatnya menjadi buaya dan reptil terbesar di dunia. Buaya ini bisa hidup di air tawar, payau, hingga asin. Buaya ini sering dikenal sebagai “Man-eater” dikarenakan hewan ini kerap memangsa manusia." },
    { id: 11, name: "Banteng Liar", nomenclature:"Bos javanicus", kelangkaan: "Langka", taksonomi: "Hewan", bahaya: "Berbahaya", kegunaan: "Non Konsumsi", image: "image3.jpg", deskripsi: "Hewan ini sekerabat dengan sapi dan memiliki perawakan sangat mirip dengan kerabat domestiknya. Hewan ini memiliki panjang tubuh 1,9 - 2,25 m, bobot 590-670 kg, dan panjang tanduk dengan panjang 60 - 75 cm. Populasinya di Jawa Timur hanya sedikit kurang dari 1000 ekor." },
    { id: 12, name: "Babi Kutil", nomenclature:"Sus verrucosus", kelangkaan: "Langka", taksonomi: "Hewan", bahaya: "Hati-hati", kegunaan: "Non Konsumsi", image: "image3.jpg", deskripsi: "Hewan ini memiliki bobot hingga 108 kg. Hewan ini berwarna hitam dan memiliki surai yang memanjang dari kepala hingga ekor di bagian punggungnya. Babi ini endemik di pulau Jawa dan Bawean dan dianggap punah di pulau Madura." },
    { id: 13, name: "Babi Celeng", nomenclature:"Sus scrofa vittatus", kelangkaan: "Tidak Langka", taksonomi: "Hewan", bahaya: "Hati-hati", kegunaan: "Konsumsi Non Herbal", image: "image3.jpg", deskripsi: "Hewan ini memiliki habitat di semenajung malaya, pulau Jawa, pulau Sumatra, dan Kepulauan Nusa tenggara. Hewan ini memiliki jenggot putih di bawah moncongnya dan anakannya memiliki corak tubuh bergaris. Hewan ini merupakan mangsa utama Komodo." },
    { id: 14, name: "Kecombrang", nomenclature:"Etlingera elatior", kelangkaan: "Tidak Langka", taksonomi: "Tumbuhan", bahaya: "Tidak Berbahaya", kegunaan: "Konsumsi Non Herbal", image: "image3.jpg", deskripsi: "Kecombrang berwarna kemerahan seperti jenis tanaman hias pisang-pisangan. Jika batangnya sudah tua, bentuk tanamannya mirip jahe atau lengkuas, dengan tinggi mencapai 5 m. Buahnya lezat dan memiliki kandungan air yang melimpah, yang membuatnya dapat menjadi opsi air darurat." },
    { id: 15, name: "Keruing", nomenclature:"Dipterocarpus retusus", kelangkaan: "Langka", taksonomi: "Tumbuhan", bahaya: "Tidak Berbahaya", kegunaan: "Non Konsumsi", image: "image3.jpg", deskripsi: "Pohon keruing memiliki batang dengan ketinggian hingga mencapai 65 m. Batang dan ranting mengeluarkan resin apabila dilukai, kadang-kadang amat berlimpah. Dikarenakan kualitas kayu, minyak, dan resinnya tanaman ini dieksploitasi hingga terancam punah." },
    { id: 16, name: "Jamur Pengantin", nomenclature:"Phallus indusiatus", kelangkaan: "Tidak Langka", taksonomi: "Fungi", bahaya: "Tidak Berbahaya", kegunaan: "Konsumsi Herbal", image: "image3.jpg", deskripsi: "Jamur ini dapat tumbuh pada lingkungan dengan suhu berkisar 21-25 derajat Celcius dan kelembaban relatif berkisar 45%-85% dan dapat tumbuh sendiri maupun berkelompok. Jamur ini mengandung 7 asam amino esensial, 12 ion logam penting, dan tinggi vitamin E." },
    { id: 17, name: "Jamur Tiram", nomenclature:"Pleurotus ostreatus", kelangkaan: "Tidak Langka", taksonomi: "Fungi", bahaya: "Tidak Berbahaya", kegunaan: "Konsumsi Non Herbal", image: "image3.jpg", deskripsi: "Tubuh buah jamur tiram memiliki tangkai yang tumbuh menyamping dan bentuknya seperti tiram. Di alam bebas, jamur tiram bisa dijumpai hampir sepanjang tahun di hutan pegunungan daerah yang sejuk." },
    { id: 18, name: "Jamur Shiitake", nomenclature:"Lentinula edodes", kelangkaan: "Tidak Langka", taksonomi: "Fungi", bahaya: "Tidak Berbahaya", kegunaan: "Konsumsi Non Herbal", image: "image3.jpg", deskripsi: "Jamur ini sering tumbuh di batang pohon melapuk terutama batang pohon kastanye. Jamur shitake segar biasanya dimakan sebelum payung bagian bawah berubah warna. Batang jamur shitake agak keras dan umumnya tidak digunakan dalam masakan." },
    { id: 19, name: "Jamur Skullcap", nomenclature:"Galerina marginata", kelangkaan: "Tidak Langka", taksonomi: "Fungi", bahaya: "Berbahaya", kegunaan: "Non Konsumsi", image: "image3.jpg", deskripsi: "Jamur ini tumbuh pada batang kayu dan sering bergerombol. Jamur ini merupakan jamur yang sangat beracun karena mengandung amatoksin dengan dosis mematikannya kemungkinan sekitar 100 sampai 150 gram jamur segar." },
    { id: 20, name: "Jamur Pholiotina", nomenclature:"Pholiotina rugosa  ", kelangkaan: "Tidak Langka", taksonomi: "Fungi", bahaya: "Berbahaya", kegunaan: "Non Konsumsi", image: "image3.jpg", deskripsi: "Jamur ini memiliki bentuk kepala seperti kerucut dan biasa memiliki cekungan dan berwarna coklat. Jamur ini mengandung alpha-amanitin yang sangat beracun untuk hati dan merupakan salah satu jamur paling beracun di dunia." },

    // Tambahkan item katalog lainnya sesuai kebutuhan
  ];  

  // id: kelangkaan :
  //                 -Langka : 1
  //                 -Umum : 2
  //     taksonomi :
  //                 -Hewan : 1
  //                 -Tumbuhan : 2
  //                 -Fungi : 3
  //     bahaya :
  //                 -Tidak Berbahaya : 1
  //                 -Hati-hati : 2
 //                  -Berbahaya : 3
  //     kegunaan :
  //                 -Konsumsi Herbal : 1
  //                 -Konsumsi Non Herbal : 2
  //                 -Non Konsumsi : 3
  

  const searchInput = document.getElementById('searchInput');
  const filterKelangkaan = document.getElementById('filterKelangkaan');
  const filterTaksonomi = document.getElementById('filterTaksonomi');
  const filterBahaya = document.getElementById('filterBahaya');
  const filterKegunaan = document.getElementById('filterKegunaan');
  const catalogContainer = document.querySelector('.catalog');
  
  // Tampilkan semua item katalog secara default
  displayCatalogItems(catalogItems);
  
  searchInput.addEventListener('input', updateCatalog);
  filterKelangkaan.addEventListener('change', updateCatalog);
  filterTaksonomi.addEventListener('change', updateCatalog);
  filterBahaya.addEventListener('change', updateCatalog);
  filterKegunaan.addEventListener('change', updateCatalog);
  
  function updateCatalog() {
    const searchText = searchInput.value.toLowerCase();
    const kelangkaanFilter = filterKelangkaan.value;
    const taksonomiFilter = filterTaksonomi.value;
    const bahayaFilter = filterBahaya.value;
    const kegunaanFilter = filterKegunaan.value;
  
    const filteredItems = catalogItems.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchText);
      const matchesKelangkaan = kelangkaanFilter === '' || item.kelangkaan === kelangkaanFilter;
      const matchesTaksonomi = taksonomiFilter === '' || item.taksonomi === taksonomiFilter;
      const matchesBahaya = bahayaFilter === '' || item.bahaya === bahayaFilter;
      const matchesKegunaan = kegunaanFilter === '' || item.kegunaan === kegunaanFilter;
  
      return matchesSearch && matchesKelangkaan && matchesTaksonomi && matchesBahaya && matchesKegunaan;
    });
  
    displayCatalogItems(filteredItems);
  }
  
  function displayCatalogItems(items) {
    catalogContainer.innerHTML = '';
  
    items.forEach(item => {
      const catalogItem = document.createElement('div');
      catalogItem.classList.add('card');
      catalogItem.innerHTML = `
        <img src="img/image${item.id}.jpg" alt="${item.name}" class="image${item.id}">
        <div class="card-content">
          <h3>${item.name}</h3>
          <h6><i>${item.nomenclature}<i></h6>
          <div class="text">
          <div class="simbol"><img src="simbol/${item.kelangkaan}.svg"><p>${item.kelangkaan}</p></div>
          <div class="simbol"><img src="simbol/${item.taksonomi}.svg"><p>${item.taksonomi}</p></div>
          <div class="simbol"><img src="simbol/${item.bahaya}.svg"><p>${item.bahaya}</p></div>
          <div class="simbol"><img src="simbol/${item.kegunaan}.svg"><p>${item.kegunaan}</p></div>
          </div>
          <div class="desc">
          <p class="deskripsi">${item.deskripsi}</p>
          </div>
          
        </div>
      `;
      catalogContainer.appendChild(catalogItem);
    });
  }

  document.getElementById("contact").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default anchor click behavior
    const footer = document.getElementById("footer");
    footer.scrollIntoView({ behavior: "smooth" });
  });
  









  window.onscroll = function() {
    scrollFunction();
  };
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("scrollBtn").style.display = "block";
    } else {
      document.getElementById("scrollBtn").style.display = "none";
    }
  }
  
  function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  }

  



  
  