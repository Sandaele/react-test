import './estilo.css'

function App(){

    function info(e){
        var nome = document.getElementById('nome').value
        var email = document.getElementById('email').value
        var nascimento = document.getElementById('nasc').value

        alert(`Nome: ${nome}\nEmail: ${email}\nData de Nascimento: ${nascimento}`);
    }

  return(
    <>
    <form>
        <div className="corpo">
          <div className="espaço">
            <label htmlFor="nome">Nome:</label>
            <input type="text" name="nome" id="nome"/>
          </div>
          <div className="espaço">
            <label htmlFor="email">Email:</label>
            <input type="text" name="email" id="email"/>
          </div>
          <div className="espaço">
            <label htmlFor="nasc">Data de Nascimento:</label>
            <input type="date" name="nasc" id="nasc"/>
          </div>
          <input type="submit" value="Enviar" onClick={info}/>
        </div>
      </form>
    </>
  )
}

export default App