### Kelas `Kendaraan` (Superclass)
- **Deskripsi Umum**: Kelas dasar untuk semua jenis kendaraan. Menyediakan properti dan metode umum yang dapat diwarisi oleh kelas-kelas turunan.
- **Properti**:
  - `merk`: Nama atau merek kendaraan.
  - `tahunPembuatan`: Tahun pembuatan kendaraan.
- **Metode**:
  - `start()`: Menunjukkan bahwa kendaraan telah dinyalakan.
  - `stop()`: Menunjukkan bahwa kendaraan telah dimatikan.
  - `info()`: Menampilkan informasi dasar tentang kendaraan, seperti merek dan tahun pembuatan.
- **Getter dan Setter**:
  - Getter dan setter untuk properti `merk` dan `tahunPembuatan` untuk mengakses dan mengubah properti ini.
- **Penggunaan dalam Pewarisan**: Kelas ini menjadi superclass yang dapat diwarisi oleh kelas-kelas turunan seperti `Mobil`, `Motor`, `Sepeda`, dan `Truk`.

```java
public class Kendaraan {
    protected String merk;
    protected int tahunPembuatan;

    // Konstruktor
    public Kendaraan(String merk, int tahunPembuatan) {
        this.merk = merk;
        this.tahunPembuatan = tahunPembuatan;
    }

    // Metode
    public void start() {
        System.out.println("Kendaraan " + merk + " telah dinyalakan.");
    }

    public void stop() {
        System.out.println("Kendaraan " + merk + " telah dimatikan.");
    }

    public void info() {
        System.out.println("Merk: " + merk + ", Tahun: " + tahunPembuatan);
    }

    // Getter dan Setter
    public String getMerk() {
        return merk;
    }

    public void setMerk(String merk) {
        this.merk = merk;
    }

    public int getTahunPembuatan() {
        return tahunPembuatan;
    }

    public void setTahunPembuatan(int tahunPembuatan) {
        this.tahunPembuatan = tahunPembuatan;
    }
}
```

### Kelas `Mobil` (Subclass dari `Kendaraan`)
- **Deskripsi Umum**: Kelas turunan yang mewakili mobil. Mewarisi dari `Kendaraan` dan memiliki properti serta metode khusus untuk mobil.
- **Properti**:
  - `jumlahPintu`: Jumlah pintu pada mobil.
- **Metode**:
  - `info()`: Menampilkan informasi tentang mobil, termasuk jumlah pintu. Metode ini menimpa metode `info()` dari `Kendaraan`.
- **Getter dan Setter**:
  - Getter dan setter untuk properti `jumlahPintu`.
- **Pewarisan**: Kelas ini mewarisi dari `Kendaraan`. Metode `info()` ditimpa untuk menampilkan informasi tambahan tentang mobil.

```java
public class Mobil extends Kendaraan {
    private int jumlahPintu;

    public Mobil(String merk, int tahunPembuatan, int jumlahPintu) {
        super(merk, tahunPembuatan); // Memanggil konstruktor superclass
        this.jumlahPintu = jumlahPintu;
    }

    // Menimpa metode info()
    @Override
    public void info() {
        super.info(); // Memanggil metode superclass
        System.out.println("Jumlah Pintu: " + jumlahPintu);
    }

    // Getter dan Setter untuk jumlah pintu
    public int getJumlahPintu() {
        return jumlahPintu;
    }

    public void setJumlahPintu(int jumlahPintu) {
        this.jumlahPintu = jumlahPintu;
    }
}
```

### Kelas `Motor` (Subclass dari `Kendaraan`)
- **Deskripsi Umum**: Kelas turunan yang mewakili motor. Mewarisi dari `Kendaraan` dan memiliki properti serta metode khusus untuk motor.
- **Properti**:
  - `memilikiBagasi`: Indikator apakah motor memiliki bagasi atau tidak.
- **Metode**:
  - `info()`: Menampilkan informasi tentang motor, termasuk apakah memiliki bagasi.
- **Getter dan Setter**:
  - Getter dan setter untuk properti `memilikiBagasi`.
- **Pewarisan**: Metode `info()` ditimpa untuk menampilkan informasi tentang motor, termasuk status bagasi.

```java
public class Motor extends Kendaraan {
    private boolean memilikiBagasi;

    public Motor(String merk, int tahunPembuatan, boolean memilikiBagasi) {
        super(merk, tahunPembuatan); // Memanggil konstruktor superclass
        this.memilikiBagasi = memilikiBagasi;
    }

    @Override
    public void info() {
        super.info(); // Memanggil metode superclass
        System.out.println("Memiliki Bagasi: " + (memilikiBagasi ? "Ya" : "Tidak"));
    }

    // Getter dan Setter untuk properti memiliki bagasi
    public boolean isMemilikiBagasi() {
        return memilikiBagasi;
    }

    public void setMemilikiBagasi(boolean memilikiBagasi) {
        this.memilikiBagasi = memilikiBagasi;
    }
}
```

### Kelas `Sepeda` (Subclass dari `Kendaraan`)
- **Deskripsi Umum**: Kelas turunan yang mewakili sepeda. Mewarisi dari `Kendaraan` dan memiliki properti serta metode khusus untuk sepeda.
- **Properti**:
  - `jumlahGigi`: Jumlah gigi pada sepeda.
- **Metode**:
  - `info()`: Menampilkan informasi tentang sepeda, termasuk jumlah gigi.
- **Getter dan Setter**:
  - Getter dan setter untuk properti `jumlahGigi`.
- **Pewarisan**: Konstruktor `Sepeda` memanggil konstruktor superclass, dan metode `info()` ditimpa untuk menampilkan informasi tentang jumlah gigi.

```java
public class Sepeda extends Kendaraan {
    private int jumlahGigi;

    public Sepeda(String merk, int tahunPembuatan, int jumlahGigi) {
        super(merk, tahunPembuatan); // Memanggil konstruktor superclass
        this.jumlahGigi = jumlahGigi;
    }

    @Override
    public void info() {
        super.info(); // Memanggil metode superclass
        System.out.println("Jumlah Gigi: " + jumlahGigi);
    }

    // Getter dan Setter untuk properti jumlah gigi
    public int getJumlahGigi() {
        return jumlahGigi;
    }

    public void setJumlahGigi(int jumlahGigi) {
        this.jumlahGigi = jumlahGigi;
    }
}
```

### Kelas `Truk` (Subclass dari `Kendaraan`)
- **Deskripsi Umum**: Kelas turunan yang mewakili truk. Mewarisi dari `Kendaraan` dan memiliki properti serta metode khusus untuk truk.
- **Properti**:
  - `kapasitasMuatan`: Kapasitas muatan truk dalam ton.
- **Metode**:
  - `info()`: Menampilkan informasi tentang truk, termasuk kapasitas muatan.
- **Getter dan Setter**:
  - Getter dan setter untuk properti `kapasitasMuatan`.
- **Pewarisan**: Metode `info()` ditimpa untuk menampilkan informasi tentang truk, termasuk kapasitas muatan.

```java
public class Truk extends Kendaraan {
    private int kapasitasMuatan;

    public Truk(String merk, int tahunPembuatan, int kapasitasMuatan) {
        super(merk, tahunPembuatan); // Memanggil konstruktor superclass
        this.kapasitasMuatan = kapasitasMuatan;
    }

    @Override
    public void info() {
        super.info(); // Memanggil metode superclass
        System.out.println("Kapasitas Muatan: " + kapasitasMuatan + " ton");
    }

    // Getter dan Setter untuk kapasitas muatan
    public int getKapasitasMuatan() {
        return kapasitasMuatan;
    }

    public void setKapasitasMuatan(int kapasitasMuatan) {
        this.kapasitasMuatan = kapasitasMuatan;
    }
}
```

### Kelas `Main`
- **Deskripsi Umum**: Kelas ini adalah kelas utama yang menjalankan program dan menguji fungsionalitas pewarisan serta penggunaan getter dan setter.
- **Interaksi**:
  - Membuat objek-objek dari kelas `Mobil`, `Motor`, `Sepeda`, dan `Truk`.
  - Menggunakan getter untuk mendapatkan informasi tentang kendaraan dan setter untuk mengubah properti.
  - Memanggil metode `start()`, `info()`, dan `stop()` untuk menunjukkan perilaku kendaraan.
  - Menampilkan informasi dengan `System.out.println()` dan memisahkan setiap bagian informasi dengan newline.

```java
public class Main {
    public static void main(String[] args) {
        Mobil mobil = new Mobil("Toyota", 2020, 4);
        Motor motor = new Motor("Yamaha", 2018, true

);
        Sepeda sepeda = new Sepeda("Polygon", 2019, 21);
        Truk truk = new Truk("Volvo", 2015, 20);

        // Menggunakan getter untuk mendapatkan informasi
        System.out.println("Informasi Kendaraan:");
        System.out.println("Mobil:");
        System.out.println("  Merk: " + mobil.getMerk());
        System.out.println("  Tahun: " + mobil.getTahunPembuatan());
        System.out.println("  Jumlah Pintu: " + mobil.getJumlahPintu() + "\n");

        System.out.println("Motor:");
        System.out.println("  Merk: " + motor.getMerk());
        System.out.println("  Tahun: " + motor.getTahunPembuatan());
        System.out.println("  Memiliki Bagasi: " + (motor.isMemilikiBagasi() ? "Ya" : "Tidak") + "\n");

        System.out.println("Sepeda:");
        System.out.println("  Merk: " + sepeda.getMerk());
        System.out.println("  Tahun: " + sepeda.getTahunPembuatan());
        System.out.println("  Jumlah Gigi: " + sepeda.getJumlahGigi() + "\n");

        System.out.println("Truk:");
        System.out.println("  Merk: " + truk.getMerk());
        System.out.println("  Tahun: " + truk.getTahunPembuatan());
        System.out.println("  Kapasitas Muatan: " + truk.getKapasitasMuatan() + " ton\n");

        // Menggunakan setter untuk mengubah properti
        mobil.setMerk("Honda");
        mobil.setTahunPembuatan(2021);
        mobil.setJumlahPintu(2);

        motor.setMerk("Suzuki");
        motor.setMemilikiBagasi(false);

        sepeda.setJumlahGigi(18);

        truk.setKapasitasMuatan(25);

        // Memanggil metode setelah perubahan dengan setter
        mobil.start();
        mobil.info();
        mobil.stop();

        motor.start();
        motor.info();
        motor.stop();

        sepeda.start();
        sepeda.info();
        sepeda.stop();

        truk.start();
        truk.info();
        truk.stop();
    }
}
```

### Ringkasan
- **Konsep Pewarisan**: Kelas dasar `Kendaraan` dengan kelas turunan (`Mobil`, `Motor`, `Sepeda`, dan `Truk`). Kelas turunan mewarisi properti dan metode dari kelas dasar dan dapat menambahkan properti serta menimpa metode.
- **Getter dan Setter**: Digunakan untuk mengakses dan mengubah properti kendaraan dengan cara yang aman dan terkontrol.
- **Kelas `Main`**: Menguji interaksi antar kelas, menunjukkan penggunaan getter dan setter, dan memanggil metode untuk menampilkan perilaku kendaraan.
- **Penggunaan Newline dan Struktur Output**: Menggunakan newline untuk merapikan output dan memberikan pemisahan yang jelas antar informasi.
- **Implementasi OOP**: Program ini mendemonstrasikan prinsip dasar OOP, khususnya pewarisan dan enkapsulasi, dan menunjukkan bagaimana kelas turunan dapat menambahkan karakteristik dan perilaku spesifik masing-masing.
