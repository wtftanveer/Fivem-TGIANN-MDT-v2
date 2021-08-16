let cezalar = [
    {isim : "Trafik ışık kurallarına uymamak (1)", para : 50, hapis :0, kamu :0, illegal : false, active : false, tceza : 1 },
    {isim : "Hız sınırını %10’dan fazla aşmak (1)", para : 1000, hapis :0, kamu :0, illegal : false, active : false, tceza : 1 },
    {isim : "Pist Aracı ile trafiğe çıkmak (4)", para : 1000, hapis :0, kamu :0, illegal : false, active : false, tceza : 4 },
    {isim : "Ehliyetsiz araç kullanmak (10)", para : 2000, hapis :0, kamu :0, illegal : false, active : false, tceza : 10 },
    {isim : "Taşıma sınırı üzerinde yolcu almak (1)", para : 500, hapis :0, kamu :0, illegal : false, active : false, tceza : 1 },
    {isim : "Hatalı/Yanlış park (1)", para : 200, hapis :0, kamu :0, illegal : false, active : false, tceza : 1 },
    {isim : "Vur Kaç (4)", para : 500, hapis :0, kamu :10, illegal : false, active : false, tceza : 4 },
    {isim : "İllegal Modifiye (Pist hariç) (4)", para : 1500, hapis :0, kamu :0, illegal : false, active : false, tceza : 4 },
    {isim : "Kontrolsüz Araç Kullanımı (1)", para : 1000, hapis :0, kamu :0, illegal : false, active : false, tceza : 1 },
    {isim : "Sokak Yarışı", para : 0, hapis :0, kamu :30, illegal : false, active : false, tceza : 0 },
    {isim : "Rüşvet", para : 5000, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Hakaret", para : 750, hapis :0, kamu :20, illegal : false, active : false, tceza : 0 },
    {isim : "Polise Hakaret", para : 2500, hapis :30, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Tehdit", para : 1000, hapis :0, kamu :10, illegal : false, active : false, tceza : 0 },
    {isim : "Polisi Tehdit", para : 3000, hapis :0, kamu :20, illegal : false, active : false, tceza : 0 },
    {isim : "Yalan Beyan", para : 1500, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Fuhuş", para : 100, hapis :0, kamu :30, illegal : false, active : false, tceza : 0 },
    {isim : "Siber Suçlar", para : 2000, hapis :0, kamu :20, illegal : false, active : false, tceza : 0 },
    {isim : "Silahsız Kavga", para : 100, hapis :0, kamu :20, illegal : false, active : false, tceza : 0 },
    {isim : "Araç Parçalama(1)", para : 2000, hapis :0, kamu :20, illegal : false, active : false, tceza : 1 },
    {isim : "Çalıntı Polis Aracı(5)", para : 7500, hapis :50, kamu :0, illegal : false, active : false, tceza : 5 },
    {isim : "Çalıntı Araç(3)", para : 2000, hapis :0, kamu :0, illegal : false, active : false, tceza : 3 },
    {isim : "Toplumun Huzurunu Bozma", para : 1500, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Fiziksel Taciz", para : 2000, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Irkçılık", para : 2000, hapis :0, kamu :10, illegal : false, active : false, tceza : 0 },
    {isim : "Sahte İhbar", para : 5000, hapis :0, kamu :20, illegal : false, active : false, tceza : 0 },
    {isim : "Tutuklanmaya Direnmek", para : 750, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Dolandırıcılık", para : 1500, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Dur İhtarına Uymamak(4)", para : 1000, hapis :0, kamu :0, illegal : false, active : false, tceza : 4 },
    {isim : "Polise Zorluk Çıkartmak", para : 4000, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Yalancı Şahitlik", para : 2000, hapis :0, kamu :30, illegal : false, active : false, tceza : 0 },
    {isim : "İllegal Örgütlenme(10)", para : 50000, hapis :500, kamu :0, illegal : false, active : false, tceza : 10 },
    {isim : "İstemeyerek Yaralama", para : 250, hapis :0, kamu :10, illegal : false, active : false, tceza : 0 },
    {isim : "Yaralama", para : 3000, hapis :25, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Yaralama Girişimi", para : 1500, hapis :0, kamu :30, illegal : false, active : false, tceza : 0 },
    {isim : "Gasp", para : 3000, hapis :25, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Adam Kaçırma", para : 1000, hapis :10, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Devlet Memurunu Kaçırma", para : 7500, hapis :30, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "İstemeyerek Devlet Memuru Yaralama", para : 0, hapis :0, kamu :30, illegal : false, active : false, tceza : 0 },
    {isim : "Devlet Memuru Yaralama", para : 3000, hapis :30, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Devlet Memuru Yaralama Girişimi", para : 2000, hapis :30, kamu : 0, illegal : false, active : false, tceza : 0 },
    {isim : "Yasa Dışı Bahis", para : 1000, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Haneye Tecavüz", para : 600, hapis :15, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "EMP Bulundurma Veya Kullanım", para : 3000, hapis :20, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "ED Coin Bulundurma", para : 2000, hapis :20, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Terörizm(10)", para : 100000, hapis :1000, kamu :0, illegal : false, active : false, tceza : 10 },
    {isim : "Ağır Suça Yardım ve Yataklık", para : 5000, hapis :60, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Firar(10)", para : 20000, hapis :400, kamu :0, illegal : false, active : false, tceza : 10 },
    {isim : "Delici ve Kesici Alet Taşıma", para : 1000, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Tabanca taşıma", para : 2000, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "İşaretlenmiş Banknot Taşıma", para : 5000, hapis :50, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Yarı Otomatik Taşıma", para : 6000, hapis :15, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Tüfek taşıma", para : 10000, hapis :30, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Konvoy Baskını(10)", para : 10000, hapis :60, kamu :0, illegal : false, active : false, tceza : 10 },
    {isim : "Nişancı tüfeği taşıma", para : 50000, hapis :250, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Molotov", para : 1500, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Kontrolsüz Silah Kullanımı", para : 1000, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Silah Ticareti", para : 3000, hapis :30, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Polis Pistol", para : 7000, hapis :50, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Polis Shotgun", para : 13000, hapis :50, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Polis SMG", para : 18000, hapis :75, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Polis Tüfek", para : 30000, hapis :100, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Polis Eşyaları", para : 3000, hapis :30, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Cinayet", para : 0, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Şablon Kart", para : 1000, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Diğer Kartlar", para : 2500, hapis :15, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Ot/Kuru Ot", para : 400, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Sarma Ot", para : 1000, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Doping", para : 1000, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Kaplumbağa", para : 750, hapis :10, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Kaplumbağa Çorbası", para : 2000, hapis :0, kamu :15, illegal : false, active : false, tceza : 0 },
    {isim : "Köpekbalığı", para : 3000, hapis :10, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "NoS(2)", para : 1000, hapis :0, kamu :0, illegal : false, active : false, tceza : 2 },
    {isim : "Azot Kapsülü", para : 1000, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Balon Balığı", para : 1000, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Asit", para : 2000, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "ABC", para : 1000, hapis :10, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Maymuncuk", para : 500, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Araba Parçaları(3)", para : 1500, hapis :0, kamu :0, illegal : false, active : false, tceza : 3 },
    {isim : "Külçe Altın veya Elmas", para : 5000, hapis :0, kamu :30, illegal : false, active : false, tceza : 0 },
    {isim : "Mücevher", para : 5000, hapis :0, kamu :30, illegal : false, active : false, tceza : 0 },
    {isim : "Yüzük,Kolye,Saat", para : 500, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "İllegal Kargo", para : 2000, hapis :20, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Barut", para : 1000, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Termit Patlayıcı ve Zamanlayıcı", para : 5000, hapis :0, kamu :30, illegal : false, active : false, tceza : 0 },
    {isim : "Araç Tableti(2)", para : 500, hapis :0, kamu :0, illegal : false, active : false, tceza : 2 },
    {isim : "Sahte Plaka(2)", para : 2000, hapis :0, kamu :0, illegal : false, active : false, tceza : 2 },
    {isim : "Madde X", para : 1000, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Kasiyer Soygunu(1)", para : 500, hapis :0, kamu :20, illegal : false, active : false, tceza : 1 },
    {isim : "Market Soygunu(1)", para : 2000, hapis :0, kamu :30, illegal : false, active : false, tceza : 1 },
    {isim : "Mücevher Soygunu(1)", para : 7000, hapis :60, kamu :0, illegal : false, active : false, tceza : 1 },
    {isim : "Paleto Banka Soygunu(2)", para : 12000, hapis :120, kamu :0, illegal : false, active : false, tceza : 2 },
    {isim : "Banka Soygunu(2)", para : 25000, hapis :175, kamu :0, illegal : false, active : false, tceza : 2 },
    {isim : "Merkez Bankası Soygunu(5)", para : 50000, hapis :250, kamu :0, illegal : false, active : false, tceza : 5 },
    {isim : "Maze Bankası Soygunu(5)", para : 50000, hapis :250, kamu :0, illegal : false, active : false, tceza : 5 },
    {isim : "Banka Aracı Soygunu", para : 75000, hapis :60, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Ev Soygunu", para : 750, hapis :0, kamu :20, illegal : false, active : false, tceza : 0 },
    // {isim : "Altın Rezervi Soygunu", para : 250000, hapis :350, kamu :0, illegal : false, active : false, tceza : 0 },
    // {isim : "Enerji Santrali Sabotajı", para : 60000, hapis :120, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "X Aracı Soygunu", para : 7000, hapis :60, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Denizaltı Soygunu(2)", para : 5000, hapis :50, kamu :0, illegal : false, active : false, tceza : 2 },
    {isim : "Terminal Hack", para : 10000, hapis :30, kamu :0, illegal : false, active : false, tceza : 0 },
    {isim : "Kredi Kartı Hack(1)", para : 2000, hapis :0, kamu :25, illegal : false, active : false, tceza : 1 },
    {isim : "Yasa Dışı Avlanma", para : 4000, hapis :0, kamu :0, illegal : false, active : false, tceza : 0 },
]