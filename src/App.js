import './App.css';
import pagero from './Captura.PNG';



function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <span>Felicidades Ángel 😊</span>
        <h2>Te ha tocado el mejor amigo invisible, ¡Qué suerte!</h2>
        <p>
          Ya sabemos que eres 100% pagero, y queremos seguir animándote a serlo con este regalo
        </p>  
        <div class="">
          <div class="col-xs">
              <div class="box">
              <img src={pagero} width={"75%"} alt="100% pagero"/>
              </div>
          </div>
        </div>
        <h2>Enhorabuena, tienes un mes de Game Pass Ultimate!! 😍</h2>
        <div className="Code">
          <p>3R4H7-P4PPJ-M7G7X-4QMYQ-DM7GZ</p>
        </div>
        <p>La suscrpción ultimate incluye la posibilidad de jugar a los juegos en la nube, 
          por lo que no tendrás que preocuparte del dispositivo que utilices para jugar.
          También se puede utilizar en el móvil!
        </p>
        <p>Aqui tienes una serie de juegos que te recomiendo por si no sabes por donde empezar!🙈</p>
        <div className="Recomendaciones">
          <div className="Card">
            <p className="Titulo">Age of empires IV: Edición Aniversario</p>
            <iframe className="Video" title='dk' width="426px" height="240px" src="https://www.youtube.com/embed/TTaCrP_U4ao" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>         
          </div>
          <div className="Card">
            <p className="Titulo">Assassin's Creed Odyssey</p>
            <iframe className="Video" title='dk' width="426px" height="240px" src="https://www.youtube.com/embed/YZ33nuMX-Og" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>         
          </div>
          <div className="Card">
            <p className="Titulo">Assassin's Creed Origins</p>
            <iframe className="Video" title='dk' width="426px" height="240px" src="https://www.youtube.com/embed/8ZFnvlP0XV0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>         
          </div>
          <div className="Card">
            <p className="Titulo">Escape Academy</p>
            <iframe className="Video" title='dk' width="426px" height="240px" src="https://www.youtube.com/embed/c90ZgeKmAWI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>         
          </div> 
          <div className="Card">
            <p className="Titulo">Firewatch</p>
            <iframe className="Video" title='dk' width="426px" height="240px" src="https://www.youtube.com/embed/d02lhvvVSy8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>         
          </div> 
          <div className="Card">
            <p className="Titulo">Football Manager 2022</p>
            <iframe className="Video" title='dk' width="426px" height="240px" src="https://www.youtube.com/embed/_q9Js7h_I5w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>         
          </div>
          <div className="Card">
            <p className="Titulo">The Forgotten City</p>
            <iframe className="Video" title='dk' width="426px" height="240px" src="https://www.youtube.com/embed/zDF3VFaHSz0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>         
          </div>
          <div className="Card">
            <p className="Titulo">Superliminal</p>
            <iframe className="Video" title='dk' width="426px" height="240px" src="https://www.youtube.com/embed/BTdls2PySC0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>         
          </div>           
        </div>
        <p></p>
      </header>
    </div>
  );
}

export default App;
