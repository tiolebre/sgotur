let midiaSelecionada = "";

function escolherFoto() {
  document.getElementById("inputFoto").click();
}

function escolherGif() {
  alert("Aqui você poderia abrir uma galeria de GIFs ou integrar uma API de GIF.");
}

function escolherVideo() {
  document.getElementById("inputVideo").click();
}

function adicionarFoto(event) {
  let arquivo = event.target.files[0];
  if (arquivo) {
    let url = URL.createObjectURL(arquivo);
    midiaSelecionada = `<img src="${url}" style="max-width:100%; margin-top:10px; border-radius:5px;">`;
  }
}

function adicionarVideo(event) {
  let arquivo = event.target.files[0];
  if (arquivo) {
    let url = URL.createObjectURL(arquivo);
    midiaSelecionada = `<video controls style="max-width:100%; margin-top:10px; border-radius:5px;">
                          <source src="${url}">
                        </video>`;
  }
}

function publicar() {
  let conteudo = document.querySelector("textarea").value;
  if(conteudo !== "" || midiaSelecionada !== "") {
    let novoPost = document.createElement("div");
    novoPost.className = "post";
    novoPost.innerHTML = `
      <p>${conteudo}</p>
      ${midiaSelecionada}
      <button class="curtir" onclick="curtir(this)">❤️ Curtir (<span>0</span>)</button>
      <div class="comentarios">
        <input type="text" placeholder="Comentar..." onkeypress="if(event.key==='Enter') comentar(this)">
      </div>
    `;
    document.getElementById("timeline").prepend(novoPost);
    document.querySelector("textarea").value = "";
    midiaSelecionada = "";
  } else {
    alert("Escreva algo ou selecione uma mídia para postar!");
  }
}

function curtir(botao) {
  let contador = botao.querySelector("span");
  contador.textContent = parseInt(contador.textContent) + 1;
}

function comentar(campo) {
  let texto = campo.value;
  if(texto !== "") {
    let novoComentario = document.createElement("div");
    novoComentario.className = "comentario";
    novoComentario.innerHTML = `
      ${texto}
      <button class="curtir" onclick="curtir(this)">❤️ (<span>0</span>)</button>
      <input type="text" placeholder="Responder..." onkeypress="if(event.key==='Enter') responder(this)">
    `;
    campo.parentElement.appendChild(novoComentario);
    campo.value = "";
  }
}

function responder(campo) {
  let texto = campo.value;
  if(texto !== "") {
    let novaResposta = document.createElement("div");
    novaResposta.className = "resposta";
    novaResposta.textContent = texto;
    campo.parentElement.appendChild(novaResposta);
    campo.value = "";
  }
}
