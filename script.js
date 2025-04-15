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
    midiaSelecionada = `<video controls style="max-width:100%; margin-top:10px; border-radius:5px;"><source src="${url}"></video>`;
  }
}

function publicar() {
  let texto = document.querySelector(".postar textarea").value;
  if (texto.trim() === "" && midiaSelecionada === "") {
    alert("Digite algo ou adicione uma mídia!");
    return;
  }

  let post = document.createElement("div");
  post.className = "post";
  post.innerHTML = `<p>${texto}</p>${midiaSelecionada}
    <button class="curtir">Curtir</button>
    <div class="comentarios">
      <input type="text" placeholder="Comentar...">
    </div>`;
  document.getElementById("timeline").prepend(post);

  document.querySelector(".postar textarea").value = "";
  midiaSelecionada = "";
}
