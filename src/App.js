import './App.css';
import Encabezado from './components/Encabezado';
import Principal from './components/Principal';
import Beneficio from './components/Beneficio';
import Faq from './components/Faq';
import Footer from './components/Footer';
import datosBeneficios from './data/beneficios.json';

function App() {

  const beneficiosKeys = Object.keys(datosBeneficios);

  return (
    <div className="App">
      <section className='seccion-principal'>
        <div className='bg-gradient'></div>
        <Encabezado />
        <Principal />
      </section>
      <section className='seccion-beneficios'>
        {beneficiosKeys.map((key) => (
          <div key={key}>
            <Beneficio {...datosBeneficios[key]} />
            <div className='separador'></div>
          </div>
        ))}
      </section>
      <Faq />
      <div className='separador'></div>
      <Footer />
    </div>
  );
}

export default App;
