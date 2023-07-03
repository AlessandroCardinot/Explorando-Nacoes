let btn_procurar = document.getElementById("btn-pais");



btn_procurar.addEventListener("click", async (e) => {
    e.preventDefault();

    let texto = document.getElementById("texto");
    let bandeira = document.getElementById("bandeira");
    let brasao = document.getElementById("brasao");
    let nome_do_pais = document.getElementById("pais-requisitado").value;

    let finalURL = `https://restcountries.com/v3.1/translation/${nome_do_pais}`;
    console.log(nome_do_pais);
    console.log(finalURL);
    

    await fetch(finalURL).then((response) => response.json()).then((dados) => {
        console.log(dados[0]);
        console.log(dados[0].altSpellings[1]);
        var info = {
            moeda: Object.values(dados[0].currencies)[0].name,
            continente: dados[0].subregion,
            idioma: Object.values(dados[0].languages)[0],
            nome_completo: dados[0].name.official,
            nome: dados[0].name.common
        };
        console.log(info);
        var info_traduzida = {};
        bandeira.setAttribute('src',dados[0].flags.svg)
        brasao.setAttribute('src', dados[0].coatOfArms.svg)

        //Tradução

        async function traducao() {
            var traducao = `https://api.mymemory.translated.net/get?q=${info.moeda}!&langpair=en|pt`;
                await fetch(traducao).then((r) => r.json()).then((dado_moeda) => {
                        
                    info_traduzida["moeda"] = dado_moeda.responseData.translatedText;
                    var moeda = dado_moeda.responseData.translatedText;
                    console.log(moeda);
                });
                
        
                var traducao = `https://api.mymemory.translated.net/get?q=${info.continente}!&langpair=en|pt`;
                    await fetch(traducao).then((r) => r.json()).then((dado_continente) => {
                        
                        info_traduzida["continente"] = dado_continente.responseData.translatedText;
                        console.log(info_traduzida);
                });
        
                var traducao = `https://api.mymemory.translated.net/get?q=${info.idioma}!&langpair=en|pt`;
                    await fetch(traducao).then((r) => r.json()).then((dado_idioma) => {
                        
                        info_traduzida["idioma"] = dado_idioma.responseData.translatedText;
                        console.log(info_traduzida);
                });
        
                var traducao = `https://api.mymemory.translated.net/get?q=${info.nome_completo}!&langpair=en|pt`;
                    await fetch(traducao).then((r) => r.json()).then((dado_nome) => {
                        
                        info_traduzida["nome_completo"] = dado_nome.responseData.translatedText;
        
                        document.querySelector(".nome_completo").innerHTML = info_traduzida.nome_completo;
        
                        console.log(info_traduzida);        
                });
                var traducao = `https://api.mymemory.translated.net/get?q=${info.nome}!&langpair=en|pt`;
                    await fetch(traducao).then((r) => r.json()).then((dado_nome) => {
                        
                        info_traduzida["nome"] = dado_nome.responseData.translatedText;
                        console.log(info_traduzida);
                });

                document.querySelector(".titulo").innerHTML = info_traduzida.nome;

                texto.innerHTML = `O país, oficialmente denominado ${info_traduzida.nome_completo}, é uma nação diversificada, com uma população de ${dados[0].population} de habitantes. Sua área territorial abrange aproximadamente ${dados[0].area} de quilômetros quadrados, oferecendo paisagens variadas e recursos naturais abundantes.<br><br>

                A moeda oficial, ${info_traduzida.moeda}, é amplamente aceita em todo o país, facilitando transações comerciais e turismo. Localizado no continente ${info_traduzida.continente}, o país faz fronteira com várias nações vizinhas e desfruta de relações diplomáticas em âmbito internacional. <br><br>
                    
                A capital do país, ${dados[0].capital[0]}, é o epicentro político, econômico e cultural, abrigando importantes instituições governamentais, centros de negócios e atrações culturais que atraem visitantes de todo o mundo. O idioma oficial, ${info_traduzida.idioma}, é amplamente falado e reflete a rica herança linguística e cultural do país. <br><br>

                Além disso, o país é caracterizado por seu índice Gini, um indicador que mede a desigualdade de renda em uma nação. O índice Gini do país, que vale ${Object.values(dados[0].gini)[0]}, reflete sua distribuição de renda, mostrando a disparidade econômica dentro da sociedade. <br><br>
                    
                Com uma sociedade diversa e dinâmica, o país orgulha-se de sua riqueza cultural, gastronomia única, patrimônio histórico e belezas naturais deslumbrantes.`;

                console.log(info_traduzida);
        }

        traducao();
    });
    
});