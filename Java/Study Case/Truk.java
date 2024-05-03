public class Truk extends Kendaraan {
    private int kapasitasMuatan;

    public Truk(String merk, int tahunPembuatan, int kapasitasMuatan) {
        super(merk, tahunPembuatan);
        this.kapasitasMuatan = kapasitasMuatan;
    }

    public int getKapasitasMuatan() {
        return kapasitasMuatan;
    }

    public void setKapasitasMuatan(int kapasitasMuatan) {
        this.kapasitasMuatan = kapasitasMuatan;
    }

    @Override
    public void info() {
        super.info();
        System.out.println("Kapasitas Muatan: " + kapasitasMuatan + " ton");
    }
}
