window.onload = () =>  {
    let valor = document.getElementById('valor').value;
    var option = document.getElementById('select')
};

function resultado()
{
    var x = select.value;
    var valor = document.getElementById('valor').value;
    if(Number(x) == 1) //segundos selecionado
    {
        var valor = document.getElementById('valor').value;
        r1.innerHTML = `${Number(valor)} segundos equivale a: ${(Number(valor) / 60 / 60 / 24).toFixed(2)} dias`
        r2.innerHTML = `${Number(valor)} segundos equivale a: ${(Number(valor) / 60 / 60).toFixed(2)} horas`
        r3.innerHTML = `${Number(valor)} segundos equivale a: ${(Number(valor) / 60 / 60 / 24 / 7).toFixed(2)} semanas`
    }
    else if(Number(x) == 2)//horas selecionado
    {
        var valor = document.getElementById('valor').value;
        r1.innerHTML = `${Number(valor)} horas equivale a: ${(Number(valor) * 60 * 60).toFixed(2)} segundos`
        r2.innerHTML = `${Number(valor)} horas equivale a: ${(Number(valor) / 24).toFixed(2)} dias`
        r3.innerHTML = `${Number(valor)} horas equivale a: ${(Number(valor) / 24 / 7).toFixed(2)} semanas`
    }
    else if(Number(x) == 3)//dias selecionado
    {
        var valor = document.getElementById('valor').value;
        r1.innerHTML = `${Number(valor)} dias equivale a: ${(Number(valor) * 60 * 60 * 60).toFixed(2)} segundos`
        r2.innerHTML = `${Number(valor)} dias equivale a: ${(Number(valor) * 24).toFixed(2)} horas`
        r3.innerHTML = `${Number(valor)} dias equivale a: ${(Number(valor) / 7).toFixed(2)} semanas`
    }
    else //semanas selecionados
    {
        var valor = document.getElementById('valor').value;
        r1.innerHTML = `${Number(valor)} semanas equivale a: ${(Number(valor) * 60 * 60 * 60 * 60).toFixed(2)} segundos`
        r2.innerHTML = `${Number(valor)} semanas equivale a: ${(Number(valor) * 7 * 24).toFixed(2)} horas`
        r3.innerHTML = `${Number(valor)} semanas equivale a: ${(Number(valor) * 7).toFixed(2)} dias`
    }
    document.getElementById('personaRodape').innerHTML = `  <!-- Imagem inicial da persona -->
    <div style="position: relative; margin-left: 25%;">
      <div class="row">
        <div class="col-9">
          <p id="textoPersona" style="bottom: -30px;">Agora que você ja tem o resultado <br> Que tal aprender mais sobre?<br> Assista o vídeo abaixo <br> para adquirir mais conhecimento!<br> <a href="https://www.youtube.com/watch?v=zs9tPJGpNNo">Vídeo</a></p>
          <img src="/persona.png" alt="" id="persona">
        </div>
      </div>
    </div>
  
    <!-- Rodapé e botões de avaliações -->
    <div id="footer">
      <div class="col-lg-3">
        <a href="/SAC/avaliaçoes/avaliacoesusuarios.html">
          <!--botao para abrir pagina de avaliações-->
          <button type="button" class="btn btn-primary" style="margin: 30px;">Realizar avaliação do site</button>
        </a>
        <div class="row">
          <a href="/SAC/sugestoes/sugestoes.html">
            <!--botao para abrir pagina de novas sugestões-->
            <button type="button" class="btn btn-secondary" style="margin-left: 30px; margin-top: -20px;">Entre
              em contato conosco ou dê
              sugestões</button>
          </a>
        </div>
      </div>
  
      <footer style=" width: 100%; height: 2.5rem; margin-top: 10px;">
        <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
          <p class="footertext">© 2022 Copyright: Desenvolvimento de Interfaces Web -
            <b>ICEI PUC MINAS</b>
          </p>
        </div>
      </footer>
    </div>`
}
