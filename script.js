* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
  background: #f0f2f5;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

header {
  background: #4267B2;
  color: white;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
}

header h1 {
  font-size: 18px;
}

header nav {
  display: flex;
  gap: 10px;
}

header nav a {
  color: white;
  text-decoration: none;
  font-size: 20px;
}

header input {
  padding: 5px;
  border-radius: 5px;
  border: none;
  flex: 1;
  margin-left: 10px;
  max-width: 120px;
}

.container {
  margin: 80px auto 20px auto;
  width: 95%;
  max-width: 600px;
  background: #fff;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 0 8px rgba(0,0,0,0.1);
  flex: 1;
}

.perfil {
  text-align: center;
  margin-bottom: 20px;
}

.perfil img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
}

.perfil h2 {
  font-size: 18px;
  margin-top: 10px;
}

.postar textarea {
  width: 100%;
  height: 70px;
  padding: 10px;
  resize: vertical;
}

.postar button {
  background: #4267B2;
  color: white;
  border: none;
  padding: 8px 12px;
  margin-top: 5px;
  cursor: pointer;
  border-radius: 5px;
}

.botoes-midia {
  margin: 10px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.botoes-midia button {
  background: #f0f0f0;
  border: 1px solid #ccc;
  padding: 6px 10px;
  cursor: pointer;
  border-radius: 5px;
  flex: 1;
}

.post {
  background: #fdfdfd;
  margin-top: 15px;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 3px rgba(0,0,0,0.05);
}

button.curtir {
  background: #f0f0f0;
  border: 1px solid #ccc;
  padding: 5px;
  margin-top: 8px;
  cursor: pointer;
  border-radius: 5px;
}

.comentarios {
  margin-top: 10px;
}

.comentarios input {
  width: 100%;
  padding: 5px;
  margin-top: 5px;
}

.comentario, .resposta {
  background: #e5e5e5;
  padding: 5px;
  margin-top: 5px;
  border-radius: 3px;
}

.resposta {
  margin-left: 20px;
}

#timeline {
  max-height: 500px;
  overflow-y: auto;
  margin-top: 20px;
}

footer {
  background: #4267B2;
  color: white;
  text-align: center;
  padding: 8px;
  font-size: 14px;
  margin-top: 20px;
}

/* Responsivo */
@media (max-width: 600px) {
  header {
    flex-wrap: wrap;
    justify-content: space-between;
  }

  header input {
    margin: 10px 0 0 0;
    flex: 1 1 100%;
    max-width: 100%;
  }

  .botoes-midia button {
    flex: 1 1 30%;
  }
}
