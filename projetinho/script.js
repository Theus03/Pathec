document.addEventListener("DOMContentLoaded", () => {
    const cpfInput = document.querySelector(".input-cpf");
    const celularInput = document.querySelector(".input-celular");

    new Cleave(cpfInput, {
        delimiters: ['.', '.', '-'],
        blocks: [3, 3, 3, 2],
        numericOnly: true    
    });

    new Cleave(celularInput, {
        phone: true,
        phoneRegionCode: 'BR',
    })
});

document.getElementById("btnLimpar").addEventListener("click", () => {
    let inputs = document.getElementsByTagName("input");
    Array.from(inputs).forEach(input => {
        input.value = "";
    })
})

document.getElementById("btnSalvar").addEventListener("click", () => {
    console.log("Montar o obj e depois montar a lista")
})
