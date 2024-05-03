public class main {
    public static void main(String[] args) {

        Mobil mobil = new Mobil("Toyota", 2020, 4);
        Motor motor = new Motor("Yamaha", 2018, true);
        Sepeda sepeda = new Sepeda("Polygon", 2019, 21);
        Truk truk = new Truk("Volvo", 2015, 20);

        System.out.println("Mobil: " + mobil.getMerk() + ", Tahun: " + mobil.getTahunPembuatan() + ", Jumlah Pintu: " + mobil.getJumlahPintu());
        System.out.println();
        System.out.println("Motor: " + motor.getMerk() + ", Tahun: " + motor.getTahunPembuatan() + ", Memiliki Bagasi: " + motor.isMemilikiBagasi());
        System.out.println();
        System.out.println("Sepeda: " + sepeda.getMerk() + ", Tahun: " + sepeda.getTahunPembuatan() + ", Jumlah Gigi: " + sepeda.getJumlahGigi());
        System.out.println();
        System.out.println("Truk: " + truk.getMerk() + ", Tahun: " + truk.getTahunPembuatan() + ", Kapasitas Muatan: " + truk.getKapasitasMuatan() + " ton");
        System.out.println();

        mobil.setMerk("Honda");
        mobil.setTahunPembuatan(2021);
        mobil.setJumlahPintu(2);

        motor.setMerk("Suzuki");
        motor.setMemilikiBagasi(false);

        sepeda.setJumlahGigi(18);

        truk.setKapasitasMuatan(25);

        mobil.start();
        mobil.info();
        mobil.stop();
        System.out.println();

        motor.start();
        motor.info();
        motor.stop();
        System.out.println();

        sepeda.start();
        sepeda.info();
        sepeda.stop();
        System.out.println();

        truk.start();
        truk.info();
        truk.stop();
        System.out.println();
    }
}
