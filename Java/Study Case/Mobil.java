public class Mobil extends Kendaraan {
    private int jumlahPintu;

    public Mobil(String merk, int tahunPembuatan, int jumlahPintu) {
        super(merk, tahunPembuatan);
        this.jumlahPintu = jumlahPintu;
    }

    public int getJumlahPintu() {
        return jumlahPintu;
    }

    public void setJumlahPintu(int jumlahPintu) {
        this.jumlahPintu = jumlahPintu;
    }

    @Override
    public void info() {
        super.info();
        System.out.println("Jumlah Pintu: " + jumlahPintu);
    }
}
