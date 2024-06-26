// import './App.css'
import { Row } from './components/Row'
import { Header } from './components/Header'
import { Banner } from './components/Banner'
import { requests } from './request'

function App() {


  return (
    <>
      <div className='App'>
        <Header />
        <Banner />
        <Row title='NETFLIX ORIGINALS' fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
        <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
        <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
        <Row title='News Movies' fetchUrl={requests.fetchNewsMovies} />
        <Row title='Kids Movies' fetchUrl={requests.fetchKidsMovies} />
        <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
        <Row title='Documentaries' fetchUrl={requests.fetchDocumentMovies} />
      </div>
    </>
  )
}

export default App
