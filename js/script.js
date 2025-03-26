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
function calculateSquareArea() {
    let side = parseFloat(document.getElementById("sideLuas").value);
    document.getElementById("resultLuas").innerText = side > 0 ? `Luas: ${side * side}` : "Masukkan angka valid!";
}

function calculateSquarePerimeter() {
    let side = parseFloat(document.getElementById("sideKeliling").value);
    document.getElementById("resultKeliling").innerText = side > 0 ? `Keliling: ${4 * side}` : "Masukkan angka valid!";
}

function calculateRectangleArea() {
    let length = parseFloat(document.getElementById("length").value);
    let width = parseFloat(document.getElementById("width").value);
    document.getElementById("resultLuasRectangle").innerText = (length > 0 && width > 0) ? `Luas: ${length * width}` : "Masukkan angka valid!";
}

function calculateRectanglePerimeter() {
    let length = parseFloat(document.getElementById("lengthPerimeter").value);
    let width = parseFloat(document.getElementById("widthPerimeter").value);
    document.getElementById("resultKelilingRectangle").innerText = (length > 0 && width > 0) ? `Keliling: ${2 * (length + width)}` : "Masukkan angka valid!";
}