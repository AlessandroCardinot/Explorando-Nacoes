let btn_procurar = document.getElementById("btn-pais");

btn_procurar.addEventListener("click", (e) => {
    e.preventDefault();
    let nome_do_pais = document.getElementById("pais-requisitado").value;
    let finalURL = `https://restcountries.com/v3.1/translation/${nome_do_pais}`;
    console.log(nome_do_pais);
    console.log(finalURL);
    fetch(finalURL).then((response) => response.json()).then((dados) => {
        console.log(dados[0])
    })
})