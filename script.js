document.title =  "Dom e Eventos alt";
document.body.style.background = "blue";
document.body.style.backgroundImage = "url('tijolo.jpg')";
document.write("<h1>um title</h1>");
document.write("<p>paragrafo</p>");
document.write("<h1>um title</h1> <br>pulando linha<br>");

setTimeout(() => {
    document.getElementById('idcustomize1').innerHTML = "<b>Eu sou o HTML no JS</b>";
    document.getElementById('idcustomize2').innerText = "eu sou texto simples";
    
    const names = document.getElementsByName('name');
    names[0].innerHTML = "<b>div por nome no js</b>";
    names[1].innerHTML = "<b>div por nome no js</b>";
    names[2].innerHTML = "<b>div por nome no js</b>";

    const mclasses = document.getElementsByClassName('mclass');
    mclasses[0].innerHTML = "Primeiro Inner";
    mclasses[1].innerHTML = "<b>Inner</b>";

    const h1Tags = document.getElementsByTagName('h1');
    h1Tags[1].innerHTML = "Elemento por Tagname";

    const pTags = document.getElementsByTagName('p');
    pTags[2].innerHTML = "Elemento por Tagname Paragrafo";
    
    document.querySelector('#idQualquer').innerHTML = "<b>id qualquer quatro</b>";
    document.querySelector('p').innerHTML = "Conteudo P";  
    document.querySelector('.classeQualquerNove').innerText = "texto...";
}, 3000);
