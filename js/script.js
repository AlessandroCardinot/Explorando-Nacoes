let btn_procurar = document.getElementById("btn-pais");

btn_procurar.addEventListener("click", (e) => {
    e.preventDefault();
    let nome_do_pais = document.getElementById("pais-requisitado").value;
    let finalURL = `https://restcountries.com/v3.1/translation/${nome_do_pais}`;
    console.log(nome_do_pais);
    console.log(finalURL);

    
    fetch(finalURL).then((response) => response.json()).then((dados) => {
        console.log(dados[0]);
        //Tradução
        let traducao = `https://api.mymemory.translated.net/get?q=${dados[0].flags.alt}!&langpair=en|pt`;
        fetch(traducao).then((r) => r.json()).then((dado) => {
            console.log(dado.responseData.translatedText);
        })
    });
});