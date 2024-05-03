public class Kendaraan {
    protected String merk;
    protected int tahunPembuatan;

    public Kendaraan(String merk, int tahunPembuatan) {
        this.merk = merk;
        this.tahunPembuatan = tahunPembuatan;
    }

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

    public void start() {
        System.out.println("Kendaraan " + merk + " telah dinyalakan.");
    }

    public void stop() {
        System.out.println("Kendaraan " + merk + " telah dimatikan.");
    }

    public void info() {
        System.out.println("Merk: " + merk + ", Tahun: " + tahunPembuatan);
    }
}
