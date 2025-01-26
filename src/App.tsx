import './App.css';
import Header from './components/ui/Header';
import Footer from './components/ui/Footer';

function App() {

  return (
    <>
      <Header />

      <main className='m-16'>

      
          <div className="card">
            <h1 className='text-3xl font-bold'>Reservar de Hora</h1>
            <div className="mt-2">
              <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-black">
                <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">Icono</div>
                <input
                  id="seach"
                  name="seach"
                  type="text"
                  placeholder="Ingrese nombre del especialista"
                  className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                />
              </div>
       
          </div>
        </div>
      </main>

    <Footer />

    </>
  )
}

export default App
