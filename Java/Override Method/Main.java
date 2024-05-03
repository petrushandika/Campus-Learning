public class Main {
    public static void main(String[] args) {
        Persegi persegi = new Persegi(5);
        System.out.println("Persegi");
        System.out.println("Luas: " + persegi.luas());
        System.out.println("Keliling: " + persegi.keliling());

        Lingkaran lingkaran = new Lingkaran(7);
        System.out.println("\nLingkaran");
        System.out.println("Luas: " + lingkaran.luas());
        System.out.println("Keliling: " + lingkaran.keliling());

        PersegiPanjang persegiPanjang = new PersegiPanjang(4, 6);
        System.out.println("\nPersegi Panjang");
        System.out.println("Luas: " + persegiPanjang.luas());
        System.out.println("Keliling: " + persegiPanjang.keliling());

        Segitiga segitiga = new Segitiga(3, 4, 5, 4, 3);
        System.out.println("\nSegitiga");
        System.out.println("Luas: " + segitiga.luas());
        System.out.println("Keliling: " + segitiga.keliling());
    }
}
