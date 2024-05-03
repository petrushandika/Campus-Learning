public class Motor extends Kendaraan {
    private boolean memilikiBagasi;

    public Motor(String merk, int tahunPembuatan, boolean memilikiBagasi) {
        super(merk, tahunPembuatan);
        this.memilikiBagasi = memilikiBagasi;
    }

    public boolean isMemilikiBagasi() {
        return memilikiBagasi;
    }

    public void setMemilikiBagasi(boolean memilikiBagasi) {
        this.memilikiBagasi = memilikiBagasi;
    }

    @Override
    public void info() {
        super.info();
        System.out.println("Memiliki Bagasi: " + (memilikiBagasi ? "Ya" : "Tidak"));
    }
}
