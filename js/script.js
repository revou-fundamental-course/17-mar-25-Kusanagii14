//Ini Javascript Eksternal

// Fungsi untuk mengubah tampilan form berdasarkan bentuk yang dipilih
function changeForm() {
    let shape = document.getElementById("shape").value;
    let shapeImage = document.getElementById("shapeImage");
    
    // Jika bentuk yang dipilih adalah persegi
    if (shape === "square") {
        document.getElementById("squareForm").style.display = "block";
        document.getElementById("rectangleForm").style.display = "none";
        shapeImage.src = "../assets/Persegi.png";
        shapeImage.alt = "Gambar Persegi";
        shapeImage.style.width = "200px";
        shapeImage.style.height = "auto";
    } else {
         // Jika bentuk yang dipilih adalah persegi panjang
        document.getElementById("squareForm").style.display = "none";
        document.getElementById("rectangleForm").style.display = "block";
        shapeImage.src = "../assets/Persegi Panjang.png";
        shapeImage.alt = "Gambar Persegi Panjang";
        shapeImage.style.width = "400px";
        shapeImage.style.height = "auto";
    }
    
    
}

// Fungsi untuk menghitung luas atau keliling berdasarkan bentuk yang dipilih
function calculate(type) {
    let shape = document.getElementById("shape").value;
    let result = document.getElementById("result");

    if (shape === "square") {
        let side = parseFloat(document.getElementById("side").value);
        if (!side || side <= 0) {
            result.innerText = "Silahkan masukkan angka yang valid";
            return;
        }
        if (type === "area") {
            result.innerText = `Luas: ${side * side}`;
        } else {
            result.innerText = `Keliling: ${4 * side}`;
        }
    } else {
        let length = parseFloat(document.getElementById("length").value);
        let width = parseFloat(document.getElementById("width").value);
        if (!length || !width || length <= 0 || width <= 0) {
            result.innerText = "Silahkan masukkan panjang dan lebar yang valid";
            return;
        }
        if (type === "area") {
            result.innerText = `Luas: ${length * width}`;
        } else {
            result.innerText = `Keliling: ${2 * (length + width)}`;
        }
    }
}