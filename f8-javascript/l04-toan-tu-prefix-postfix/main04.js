// Toán tử ++ --
// Prefix & Postfix (Tiền tố & Hậu tố)

var a = 6;

// Tiền tố
// B1: +1 cho a, a = a + 1
// B2: Trả về a sau khi + 1 --> a = 7
++a
console.log(a);

a = 6;
// Hậu tố
// B1: copy a --> a_copy = 6
// B2: + 1 cho a, a = a + 1 --> a = 7
// B3: Trả về a_copy
a++
console.log(a)