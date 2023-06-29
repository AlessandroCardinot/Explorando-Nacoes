let btn_procurar = document.getElementById("btn-pais");

btn_procurar.addEventListener("click", (e) => {
    e.preventDefault();

    let texto = document.getElementById("texto");
    let bandeira = document.getElementById("bandeira");
    let brasao = document.getElementById("brasao");
    

    let nome_do_pais = document.getElementById("pais-requisitado").value;
    let finalURL = `https://restcountries.com/v3.1/translation/${nome_do_pais}`;
    document.getElementById("titulo").innerHTML = nome_do_pais;
    console.log(nome_do_pais);
    console.log(finalURL);
    

    fetch(finalURL).then((response) => response.json()).then((dados) => {
        console.log(dados[0]);
        console.log(dados[0].altSpellings[1]);
        var info = {
            moeda: Object.values(dados[0].currencies)[0].name,
            continente: dados[0].subregion,
            idioma: Object.values(dados[0].languages)[0],
            nome: dados[0].altSpellings[1]
        };
        console.log(info);
        var info_traduzida = {};
        bandeira.setAttribute('src',dados[0].flags.svg)
        brasao.setAttribute('src', dados[0].coatOfArms.svg)

        //Tradução
        for (c in info){
            
            var traducao = `https://api.mymemory.translated.net/get?q=${info[c]}!&langpair=en|pt`;
            fetch(traducao).then((r) => r.json()).then((dado) => {
                
                info_traduzida[c] = dado.responseData.translatedText;
                console.log(info_traduzida);
        })}
        
    });
});