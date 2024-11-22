document.addEventListener("DOMContentLoaded", () => {
    let cpfInput = document.querySelector(".input-cpf");
    let celularInput = document.querySelector(".input-celular");

    
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

document.getElementById("btnSalvar").addEventListener("click", (e) => {
    const funcionario = {
        codigo: Date.now(),
        nome: document.getElementById("inputNome").value,
        cargo: document.getElementById("inputCargo").value,
        cpf: document.getElementById("inputCpf").value,
        email: document.getElementById("inputEmail").value,
        celular: document.getElementById("inputCelular").value,
    }

    const cardFuncionario = card(funcionario);
    document.getElementById("listaCardFuncionarios").innerHTML += cardFuncionario;

    
})

function card(funcionario) {
    return `
        <div class="card-funcionario" id="${funcionario.codigo}">
            <div class="container-img-user">
                <svg class="img-user" width="42" height="42" viewBox="0 0 33 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27.3764 28.3573H5.89417V25.7856C5.89417 22.2348 8.89977 19.3562 12.6074 19.3562H20.6632C24.3708 19.3562 27.3764 22.2348 27.3764 25.7856V28.3573ZM16.6353 16.7845C12.1862 16.7845 8.57945 13.3303 8.57945 9.0693C8.57945 4.80831 12.1862 1.3541 16.6353 1.3541C21.0844 1.3541 24.6911 4.80831 24.6911 9.0693C24.6911 13.3303 21.0844 16.7845 16.6353 16.7845Z" 
                    fill="#333333"/>
                </svg>
            </div>
            <div class="container-text">
                <h3>${funcionario.nome}</h3>
                <h5>${funcionario.cargo}</h5>
            </div>
            <div class="container-buttons-card">
                <button class="btn-edit" id="btnEdit" title="Editar Funcionário">
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1_174)">
                        <path d="M17.0803 3.94533L15.0803 5.94533H5.32288V19.9453H19.3229V10.188L21.3229 8.18798V20.9453C21.3229 21.4976 20.8752 21.9453 20.3229 21.9453H4.32288C3.7706 21.9453 3.32288 21.4976 3.32288 20.9453V4.94533C3.32288 4.39305 3.7706 3.94533 4.32288 3.94533H17.0803ZM20.8082 3.04584L22.2224 4.46005L13.03 13.6524L11.6183 13.6549L11.6158 12.2382L20.8082 3.04584Z" fill="white"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_1_174">
                        <path d="M0.322876 10.9485C0.322876 5.4257 4.80003 0.948547 10.3229 0.948547H24.4904V24.0942H6.32288C3.00917 24.0942 0.322876 21.4079 0.322876 18.0942V10.9485Z" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>
                </button>
                <button class="btn-remove" id="btnRemove" title="Remover Funcionário">
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.4415 6.45337H22.4764V8.38217H20.4624V20.9194C20.4624 21.452 20.0116 21.8838 19.4555 21.8838H5.35773C4.8016 21.8838 4.35075 21.452 4.35075 20.9194V8.38217H2.33679V6.45337H7.3717V3.56017C7.3717 3.02755 7.82254 2.59577 8.37868 2.59577H16.4345C16.9907 2.59577 17.4415 3.02755 17.4415 3.56017V6.45337ZM18.4485 8.38217H6.36472V19.955H18.4485V8.38217ZM9.38566 11.2754H11.3996V17.0618H9.38566V11.2754ZM13.4136 11.2754H15.4275V17.0618H13.4136V11.2754ZM9.38566 4.52457V6.45337H15.4275V4.52457H9.38566Z" fill="white"/>
                    </svg>    
                </button>
            </div>
        </div>
    `;
}
