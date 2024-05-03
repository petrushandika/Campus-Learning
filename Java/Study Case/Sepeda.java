public class Sepeda extends Kendaraan {
    private int jumlahGigi;

    public Sepeda(String merk, int tahunPembuatan, int jumlahGigi) {
        super(merk, tahunPembuatan);
        this.jumlahGigi = jumlahGigi;
    }

    public int getJumlahGigi() {
        return jumlahGigi;
    }

    public void setJumlahGigi(int jumlahGigi) {
        this.jumlahGigi = jumlahGigi;
    }

    @Override
    public void info() {
        super.info();
        System.out.println("Jumlah Gigi: " + jumlahGigi);
    }
}
