const cardsData = [

    {
      "name": "ATX(Advanced Technology Extended)",
      "description": "ATX, bilgisayar parçalarının birbiriyle uyumlu çalışmasını sağlayan, anakart ve kasa düzenini belirleyen bir standarttır.",
      "image": ""
    },
    {
      "name": "LGA(Land Grid Array)",
      "description": "İşlemci soket tipidir.LGA, işlemcinin pin yerine düz yüzeyle anakarta oturduğu, Intel’in sıklıkla kullandığı bir soket tipidir.",
      "image": "./images/lga.webp"
    },
    {
      "name": "PGA (Pin Grid Array)",
      "description": "Eski tip işlemci soket yapısıdır, işlemcinin altındaki pinler sokete yerleştirilir.İşlemcinin altında pinlerin olduğu, pinlerin anakarttaki soketlere takıldığı bir bağlantı şeklidir.",
      "image": "./images/pga.jpg"
    },
    {
      "name": "AMD(Advanced Micro Devices)",
      "description": " Bilgisayar işlemcileri ve grafik kartları üreten bir Amerikan şirketi.Intel’e rakip olan, işlemci ve ekran kartı üreten büyük bir teknoloji şirketidir.",
      "image": ""
    },
    {
      "name": "PCH (Platform Controller Hub)",
      "description": "Anakart üzerindeki işlemci dışındaki tüm bileşenlerin iletişimini yöneten yongadır. Eski sistemlerde “northbridge” ve “southbridge” vardı; modern sistemlerde bu işlevler PCH içinde toplanmıştır.USB, ses, ağ ve depolama gibi bileşenleri kontrol eder.Kısaca, “Bilgisayarın trafik polisi — her şeyi işlemciye yönlendirir!”",
      "image": "./images/pch.avif"
    },
    {
      "name": "DMI(Direct Media Interface)",
      "description": "İşlemciyle PCH arasındaki veri otobanıdır. Bilgiler bu yol üzerinden taşınır.Intel’in CPU ile anakart arasındaki veri iletimini sağlayan bir arayüz teknolojisi.İşlemci ile PCH arasında hızlı bir otoban!",
      "image": ""
    },
    {
      "name": "FSB (Front Side Bus)",
      "description": "İşlemciyle anakart arasında veri taşıyan eski veri yolu sistemidir.Kısaca, “Eskiden işlemcinin dünyayla konuştuğu ana yol!”",
      "image": ""
    },
    {
      "name": "PCI (Peripheral Component Interconnect)",
      "description": "Ekran kartı, ses kartı gibi bileşenlerin anakarta takıldığı genişleme yuvasıdır. Bilgisayarın donanım bileşenlerini bağlamak için kullanılan eski bir veri yolu standardı.“Bilgisayara yeni yetenekler eklemenin eski yolu!",
      "image": ""
    },
    {
      "name": "SATA (Serial ATA)",
      "description": "Sabit disk ve SSD gibi depolama birimlerini anakarta bağlayan veri kablosu standardıdır.“Depolama cihazlarını bilgisayara bağlayan ince kablo!”",
      "image": "./images/sata.jpg"
    },
    {
      "name": "ACPI (Advanced Configuration and Power Interface)",
      "description": "Güç yönetimi ve uyku modları ile ilgili BIOS ayarlarını içerir. Bilgisayarın güç yönetimini ve yapılandırmasını kontrol eden bir standart.",
      "image": ""
    },
    {
      "name": "Thread (İş Parçacığı)",
      "description": "Bir işlemcinin çalıştırabileceği en küçük işlem birimi.İşlemcinin aynı anda birden fazla işi yapmasını sağlayan küçük görev yoludur.“İşlemcinin aynı anda birden fazla işe koştuğu ince iplikler!",
      "image": ""
    },
    {
      "name": "Wi-Fi Kartı",
      "description": "Bilgisayarı kablosuz internete bağlayan donanım parçasıdır.",
      "image": "./images/wifi.png"
    },
    {
      "name": "Mikroişlemci (Microprocessor)",
      "description": "Bilgisayarın beynidir; tüm hesaplamaları yapan en temel çiptir.“Bilgisayarın düşündüğü yer — her şeyin merkezi!”",
      "image": ""
    },
    {
      "name": "PROM (Programmable Read-Only Memory)",
      "description": "Bir kez programlanabilen, sonradan silinemeyen özel bir bellek türüdür.",
      "image": ""
    },
    {
      "name": "EPROM (Erasable Programmable ROM)",
      "description": "UV ışıkla silinebilen ve tekrar programlanabilen bir bellek türüdür. “Güneş ışığı gibi UV ile sıfırlanabilen bellek!",
      "image": "./images/eprom.jpg"
    },
    {
      "name": "EEPROM (Electrically Erasable Programmable ROM)",
      "description": "Elektrikle silinip yeniden yazılabilen kalıcı bellek türüdür. “Silmesi de yazması da elektrikle olan akıllı bellek!”",
      "image": "./images/eeprom.jpg"
    },
    {
      "name": "SRAM (Static RAM)",
      "description": "Hızlı ama pahalı bir RAM türüdür, genellikle işlemci önbelleğinde kullanılır.“Hızlı ama lüks bellek — işlemcinin özel yardımcısı!”",
      "image": "./images/sram.jpg"
    },
    {
      "name": "DRAM (Dynamic RAM)",
      "description": "Verileri sürekli yenileyerek tutan, daha yavaş ama ucuz RAM türüdür.“Hafızası sürekli tazelenen unutan bellek!”",
      "image": "./images/dram.jpg"
    },
    {
      "name": "SDRAM (Synchronous Dynamic RAM)",
      "description": "Senkronize çalışan, sistemle aynı hızda veri işleyen RAM türü.Saat sinyaliyle senkronize çalışan, yaygın kullanılan RAM türü.“İşlemcinin temposuna ayak uyduran, uyumlu bellek!”",
      "image": "./images/sdram.webp"
    },
    {
      "name": "DDR SDRAM (Double Data Rate SDRAM)",
      "description": "Veriyi iki kat hızlı taşıyan gelişmiş bellek türü. SDRAM’in bir türü, her saat döngüsünde veri okuma ve yazma işlemini iki kez yapar.",
      "image": "./images/ddr-sdram.webp"
    },
    {
      "name": "DisplayPort",
      "description": "Görüntü ve sesi yüksek kalitede aktaran modern bağlantı portudur.Kısaca, “Hem görüntü hem ses — net ve dijital bağlantı!”",
      "image": "./images/displayport.jpg"
    },
    {
      "name": "VGA(Video Graphics Array)",
      "description": "Eski tip analog görüntü kablosudur; mavi renkli girişle tanınır.“Eski monitörlerin klasik mavi kablosu!”",
      "image": "./images/vga.jpg"
    },
    {
      "name": "DVI(Digital Visual Interface)",
      "description": "Görüntüyü dijital ve analog olarak iletebilen geçiş dönemi bağlantısıdır.“Analog’dan dijital’e köprü kablo!”",
      "image": "./images/dvı.jpeg"
    },
    {
      "name": "Veri Yolu (Bus)",
      "description": "Bilgisayardaki bileşenler arasında veri taşıyan dijital otobandır.“Bilgileri bir yerden diğerine taşıyan dijital servis aracı!”",
      "image": "./images/bus.webp"
    },
    {
      "name": "Güç Konnektörü((Power Connector)24-pin ATX)",
      "description": "Anakartın çalışması için gereken elektriği sağlayan büyük güç bağlantısıdır.Güç kaynağını anakarta bağlamak için 24 pinli bir güç konnektörü kullanılır.“Anakartın enerji kablosu — elektriğin ana kapısı!”",
      "image": "./images/atx-24.jpg"
    },
    {
      "name": "PCIe (Peripheral Component Interconnect Express)",
      "description": "Günümüzde ekran kartı gibi bileşenlerin bağlandığı hızlı veri yolu yuvasıdır.“Ekran kartının otoyolu — hızlı ve modern!”",
      "image": "./images/pcı-e.jpg"
    },
    {
      "name": "PCI-X (Peripheral Component Interconnect eXtended)",
      "description": "PCI-X, klasik PCI yuvasının geliştirilmiş, daha hızlı ve veri taşıma kapasitesi artırılmış sürümüdür.Yeni sistemlerde pek tercih edilmez; yerini PCIe (PCI Express) almıştır. ",
      "image": "./images/pcix.gif"
    },

    {
      "name": "AGP (Accelerated Graphics Port)",
      "description": "Eski nesil ekran kartları için kullanılan özel görüntü yuvasıdır.",
      "image": "./images/agp.jpg"
    },
    {
      "name": "M.2 Slotu",
      "description": "SSD gibi hızlı depolama birimlerinin takıldığı ince ve modern bağlantı yuvasıdır.“Bilgisayarın süper hızlı tren istasyonu!”",
      "image": "././images/m2-slot.png"
    },
    {
      "name": "BIOS/UEFI Yonga",
      "description": "Bilgisayarın açılışında çalışan temel yazılım yongası. UEFI, BIOS’un gelişmiş halidir.“Bilgisayarın açılış anahtarı — her şeyin başladığı yer!”",
      "image": "./images/bios.jpg"
    },
    {
      "name": "CMOS Pili",
      "description": "Saat ve BIOS ayarlarını küçük bir pille saklayan hafızadır.",
      "image": "./images/cmos.jpg"
    },
    {
      "name": "VRM (Voltage Regulator Module)",
      "description": "İşlemci ve diğer bileşenlere ihtiyaç duydukları doğru ve sabit voltajı sağlayan güç yönetim devresidir.“İşlemcinin elektrik ayarı yapan minik regülatörü!”",
      "image": "./images/vrm.jpeg"
    },
    {
      "name": "Heatsink",
      "description": "Soğutma bloğu, ısı emici.Isınan parçaların sıcaklığını düşüren metal bloktur.Örneğin  VRM, işlemcin aşırı güç alıp yanmasını engeller.",
      "image": "./images/heatsink.jpg"
    },
    {
      "name": "Termal Macun (Thermal Paste)",
      "description": "İşlemci ve soğutucu arasında ısıyı daha iyi iletmek için kullanılan özel bir ısı iletken maddedir.“İşlemcinin serin kalması için soğutucu ile dost bir bağ!”",
      "image": "./images/termal.jpg"
    },
    {
      "name": "VRAM(Video RAM)",
      "description": "Ekran kartının grafik verilerini geçici olarak depolayarak görüntü işlemlerini hızlı ve verimli şekilde gerçekleştirmesini sağlayan özel bir bellektir.",
      "image": "./images/vram.webp"
    },
    {
      "name": "PSU (Power Supply Unit)",
      "description": "Bilgisayarın elektrik ihtiyacını karşılayan bileşendir. Elektrik prizinden gelen enerjiyi, anakart ve diğer parçaların kullanabileceği voltajlara dönüştürür.",
      "image": "./images/psu.jpg"
    },
    {
      "name": "Power Converter(Güç Dönüştürücü)",
      "description": "Güç dönüştürücü, bir bilgisayarın PSU’su içinde yer alan ve elektrik şebekesinden gelen yüksek voltajlı AC akımı, anakart ve diğer bileşenlerin kullanabileceği düşük voltajlı DC akıma çeviren devre sistemidir.Tek bir elektrik dönüşüm işini yapan daha küçük bir bileşendir.Genellikle bir bileşen içinde yer alır (örneğin anakart üzerindeki VRM, bir power converter’dır).Adaptörler, şarj cihazları, voltaj regülatörleri de birer power converter örneğidir.",
      "image": ""
    },
    {
      "name":"PSU vs Power Converter",
      "description":"	•	PSU, bilgisayardaki tüm sistemi besleyen büyük bir güç ünitesidir.Power converter ise voltajı bir formdan diğerine dönüştüren küçük devredir.PSU’nun içinde birçok power converter vardır ama tek başına bir power converter, PSU değildir.",
      "image":""
    },
    
    {
      "name":"RAMDAC (Random Access Memory Digital-to-Analog Converter)",
      "description":"Dijital görüntü sinyalini monitörler için analog sinyale çeviren ekran kartı bileşeni.“Dijital görüntüyü eski ekranların anlayacağı dile çeviren tercüman!”",
      "image":"./images/ramdac.jpg"
    },
    
    {
      "name":"DCP (Display Control Processor)",
      "description":"Görüntü sinyallerini işleyerek monitöre uygun hale getiren ekran işlemcisidir.Televizyonlar, net görüntü için DCP kullanır.“Ekrandaki görüntüleri düzenleyen gizli yönetici!”",
      "image":""
    },
    {
      "name":"ADC (Analog to Digital Converter)",
      "description":"Ses veya görüntü gibi analog sinyalleri dijital veriye dönüştüren birimdir.Sadece Apple monitörleri ve Mac bilgisayarlarda kullanılırdı (özellikle 2000’li yılların başında).Mikrofonun sesi bilgisayarda işlenmesi için ADC’den geçer.",
      "image":"./images/adc.png"
    },
    {
      "name":"DAC (Digital to Analog Converter)",
      "description":"Dijital sinyalleri hoparlör veya ekrana uygun analog sinyallere çeviren birimdir. Kulaklık çıkışı DAC sayesinde çalışır.",
      "image":"./images/dac.jpg"
    },
    {
      "name":"NIC (Network Interface Card)",
      "description":"Bilgisayarın ağa bağlanmasını sağlayan ağ kartıdır. Ethernet kablosunu taktığın yer NIC’tir.“Bilgisayarın internete açılan kapısı!”",
      "image":"./images/nıc.jpg"
    },
    {
      "name":"MAC(Media Access Control Address)",
      "description":"Bir ağ cihazının ağ üzerindeki kimliğini tanımlayan benzersiz bir donanım adresidir. Bu adres, cihazın ağ kartı veya adaptörüne atanmış olup, cihazın ağ üzerinde veri iletimi yaparken tanınmasını sağlar.Modemin hangi cihaz olduğunu MAC adresinden tanırız.“Ağ kartının TC kimlik numarası gibi — her biri eşsiz!”",
      "image":"./images/mac.jpg"
    },
    {
      "name":"Ethernet Protokolü",
      "description":"Bilgisayarların kabloyla veri alışverişi yaparken uyması gereken kurallar dizisi.“Ağ kablosundaki trafik kuralları!”",
      "image":""
    },
    {
      "name":"RPM (Revolutions Per Minute)",
      "description":"Sabit diskin dakikada kaç tur attığını gösteren hız ölçüsüdür.Bilgisayarlarda özellikle sabit disklerin (HDD) ve soğutucu fanların çalışma hızını belirtmek için kullanılır. Örneğin, bir HDD’nin 7200 RPM olması, disk plakalarının dakikada 7200 kez döndüğü anlamına gelir; bu da genellikle daha yüksek veri okuma/yazma hızı sağlar.“Diskin ne kadar hızlı döndüğünü gösteren dakikalık tur sayısı!”",
      "image":""
    },
    {
      "name":"Track(İz)",
      "description":"Diskin yüzeyinde dairesel olarak dönen veri yollarıdır.Track’ler, HDD’deki verilerin düzenli yazılması içindir.“Diskteki yuvarlak veri yolları — bir tür halka!”",
      "image":"./images/track.gif"
    },
    {
      "name":"Sector(Sektör)",
      "description":"Diskteki verilerin yazıldığı en küçük birimdir.",
      "image":"./images/sector.svg"
    },

    {
      "name":"Cluster(Küme)",
      "description":"Birden fazla sektörün birleşmesiyle oluşan daha büyük veri alanıdır.“Veri saklamak için birleşen sektör takımı!”",
      "image":"./images/küme.jpg"
    },
    {
      "name":"SSD (Solid State Drive)",
      "description":"verileri manyetik diskler yerine flash bellek yongaları üzerinde depolayan, hızlı ve dayanıklı bir veri depolama cihazıdır.SSD’ler, geleneksel sabit disk (HDD) sürücülere kıyasla çok daha yüksek okuma-yazma hızlarına sahiptir, sessiz çalışır, mekanik parça içermediğinden daha az enerji tüketir ve darbelere karşı daha dayanıklıdır. Bu nedenle işletim sistemlerinin, oyunların ve programların daha hızlı açılması gibi önemli avantajlar sağlar.",
      "image":"./images/hdd.webp"
    },
    {
      "name":"HDD (Hard Disk Drive)",
      "description":"Verileri döner manyetik diskler (plakalar) üzerinde manyetik olarak depolayan geleneksel bir veri depolama cihazıdır.İçinde bulunan diskler belirli bir hızda (örneğin 5400 RPM veya 7200 RPM) dönerken, bir okuma/yazma kafası bu diskler üzerinde verileri okur ve yazar. HDD’ler, SSD’lere göre genellikle daha ucuz ve yüksek kapasiteli olsalar da, daha yavaş, daha kırılgan ve daha fazla enerji tüketen cihazlardır.",
      "image":"images/hdd.webp"
    },
    {
      "name":"PATA (Paralel Advanced Technology Attachment)",
      "description":"PATA (Parallel ATA), bilgisayarlarda sabit disk ve optik sürücüler gibi depolama aygıtlarını anakarta bağlamak için kullanılan eski tip bir veri aktarım arabirimidir.",
      "image":"./images/pata.avif"
    },
    {
      "name":"IDE (Integrated Drive Electronics)",
      "description":"PATA arayüzünü kullanan sabit disk bağlantı standardıdır.IDE, sabit disk ve optik sürücüler gibi depolama aygıtlarının bilgisayara bağlanmasını sağlayan veri iletim standardıdır.IDE’nin temel özelliği, diskin denetleyici devresinin doğrudan sürücünün içine entegre edilmiş olmasıdır; bu sayede anakartta ayrı bir kontrol kartına gerek kalmaz. Günümüzde yerini daha hızlı ve daha verimli olan SATA (Serial ATA) standardı almıştır.",
      "image":"./images/ıde.jpeg"
    },
    {
      "name":"Front Panel(Ön Panel)",
      "description":"Bilgisayarda ön panel, kasa üzerindeki kullanıcının doğrudan erişebildiği giriş/çıkış portları ve düğmelerin bulunduğu bölümdür. “Bilgisayarın açma-kapama ve ışık kontrol merkezi!”",
      "image":"./images/ön-panel.jpg"
    },
    {
      "name":"Jumper",
      "description":"Anakart veya disk ayarlarını değiştirmeye yarayan küçük pinler.Jumper, anakart ya da donanım bileşenlerinde bulunan iki ya da daha fazla metal pini (uçları) birbirine bağlayarak donanımın davranışını değiştiren küçük bir parçadır.",
      "image":"./images/jumpers.jpg"
    },
    {
      "name":"PCB (Printed Circuit Board)",
      "description":"Elektronik bileşenlerin yerleştirildiği yeşil devre kartıdır.Anakart bir PCB örneğidir.“Tüm parçaların buluştuğu elektronik otoyol!”",
      "image":""
    },
    {
      "name":"COM Port (Communication Port / Seri İletişim Portu)",
      "description":"Eski nesil seri bağlantı noktası.",
      "image":"./images/comport.jpg"
    },
    {
      "name":"Aspect Ratio",
      "description":"Ekranın genişlik ve yükseklik oranıdır (örneğin: 16:9).“Ekranın şekli — kare mi, geniş mi?”",
      "image":"./images/aspect-ratio.jpg"
    },
    {
      "name":"Dead Pixel (Ölü Piksel)",
      "description":"Hiçbir renk göstermeyen, tamamen siyah kalan bozuk piksel.“Ekrandaki uyuyup bir daha uyanmayan nokta!”",
      "image":"./images/ölü-piksel.png"
    },
    {
      "name":"Stuck Pixel (Sıkışmış Piksel)",
      "description":"Bir renge takılı kalmış, değişmeyen bozuk piksel.",
      "image":"./images/stuck.png"
    },
    {
      "name":"CRT (Cathode Ray Tube)",
      "description":"Tüplü, eski tip kalın monitörler ve televizyonlar.",
      "image":"./images/crt.jpg"
    },
    {
      "name":"LCD (Liquid Crystal Display)",
      "description":"Sıvı kristal teknolojisiyle çalışan düz ekran tipi.Arka ışık gereki!!!",
      "image":"./images/lcd.jpg"
    },
    {
      "name":"LED (Light Emitting Diode)",
      "description":"Daha az enerji tüketen, ince ve hafif ekran teknolojisi.“LCD’nin daha parlak ve enerji dostu versiyonu!”",
      "image":"./images/led.jpg"
    },
    {
      "name":"OLED (Organic Light Emitting Diode)",
      "description":"Her pikselin kendi ışığını yaydığı ultra ince, canlı ekran teknolojisi.",
      "image":"./images/oled.jpg"
    },
    {
      "name":"TN (Twisted Nematic)",
      "description":"Hızlı tepki süresi olan ama renk ve açı açısından zayıf LCD panel türü.“Hızlı ama renk seçici oyuncu paneli!”",
      "image":""
    },
    {
      "name":"VA (Vertical Alignment)",
      "description":"İyi kontrast veren ama bazı açılardan renk kaybı yaşatan LCD panel.Kontrastı yüksek“Siyahı güzel gösteren ama açıya dikkat isteyen ekran!”",
      "image":""
    },
    {
      "name":"IPS (In-Plane Switching)",
      "description":"Geniş görüş açısı ve doğru renkler sunan LCD panel türü.“Her açıdan net, renk dostu ekran!”",
      "image":""
    },
    {
      "name":"Codec (Coder-Decoder / Kodlayıcı-Çözücü)",
      "description":"Ses ve videoyu sıkıştırarak dosya boyutunu küçültüp, gerektiğinde tekrar açan sistem.",
      "image":""
    },
    {
      "name":"ANSI Lümen",
      "description":"Projektörün parlaklığını ölçen resmi birim.",
      "image":""
    },
    {
      "name":"DLP (Digital Light Processing)",
      "description":"Minik aynalarla çalışan projektör teknolojisi.“Minik aynalarla görüntü yansıtan ışık sihirbazı!”",
      "image":"./images/dlp.jpg"
    },
    {
      "name":"AUDIO IN 1-2-3",
      "description":"Cihazlara ses sinyali girişi yapılabilen bağlantı noktaları.",
      "image":"./images/audio.jpg"
    },
    {
      "name":"DPI (Dots Per Inch)",
      "description":"Ekran ya da yazıcının çözünürlük seviyesini belirtir.Yazıcı veya ekranın çözünürlüğünü gösteren birim (inç başına nokta).“Ne kadar ayrıntılı yazdırdığını/pikselliğini gösteren değer!”",
      "image":""
    },
    {
      "name":"Drum(Tambur)",
      "description":"Görüntüleme Tamburu.Lazer yazıcılarda toneri kâğıda aktaran silindirdir.",
      "image":"./images/drum.png"
    },
    {
      "name":"Filament",
      "description":"3D yazıcılarda kullanılan, eritilerek şekil verilen malzeme.PLA ve ABS, yaygın filament türleridir.",
      "image":"./images/filament.jpeg"
    }
  ]
  