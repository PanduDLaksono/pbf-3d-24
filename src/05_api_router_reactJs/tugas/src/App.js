import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import {
  Navbar,
  Nav,
  NavDropdown,
  Button,
  Card,
  Container
} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function Beranda() {
  return (
    <Container>
      <div className='mt-5'></div>
      <Card>
        <Card.Header>API dan React Router di ReactJS</Card.Header>
        <Card.Body>
          <Card.Text>Pada codelab ini Anda akan mempelajari tentang pengambilan data melalui API (Application Programming Interface)
             dan membuat navigasi untuk berpindah halaman menggunakan React Router.</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

function Tentang() {
  return (
    <Container>
      <div className='mt-5'></div>
      <Card>
        <Card.Header>Tentang</Card.Header>
        <Card.Body>
          <Card.Title>NIM: 1941723006</Card.Title>
          <Card.Title>Nama: Pandu Dwi Laksono</Card.Title>
        </Card.Body>
      </Card>
    </Container>
  );
}
function Berita(props) {
  return (
    <Container>
      <div className='mt-5'></div>
      <Card>
        <Card.Body>
          <div>
            <h3>{props.judul}</h3>
            <div>{props.isiArtikel}</div>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

function Topik() {
  let { topicId } = useParams();
  return (
    <Container>
      <Card>
        <Card.Body>
          <h3>Topik yang terpilih: {topicId}</h3>
        </Card.Body>
      </Card>
    </Container>
  );
}

function Codelabs() {
  let match = useRouteMatch();

  return (
    <Container>
      <div>
        <h2>Codelabs</h2>
        <ul>
          <li>
            <Link to={`${match.url}/konsep-reactjs`}>Konsep ReactJS</Link>
          </li>
          <li>
            <Link to={`${match.url}/belajar-react-router`}>
              Belajar React Router
          </Link>
          </li>
        </ul>

        {/* Pada halaman Codelabs ini memiliki <Switch> sendiri dengan beberapa route lagi
          di dalam URL /codelabs . Pada bagian route kedua merupakan route default atau
          jika tidak satu pun link topik dipilih. */}
        <Switch>
          <Route path={`${match.path}/:topicId`}>
            <Topik />
          </Route>
          <Route path={match.path}>
            <h3>Silakan Pilih Topik Codelab yang tersedia.</h3>
          </Route>
        </Switch>
      </div>
    </Container>
  );
}

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,         // jika terjadi gagal ambil data dari API
      isLoaded: false,     // untuk status ketika sedang memuat
      dataArtikel: []      // untuk menampung data API
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(
        (dataJson) => {
          this.setState({
            isLoaded: true,
            dataArtikel: dataJson
          })
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        })
  }

  render() {
    const { error, isLoaded, dataArtikel } = this.state;

    if (error) {
      return <div>Terjadi galat: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Sedang memuat...</div>;
    } else {
      return (
        <Container>
          <div>
            <h2>Daftar Artikel</h2>
            {
              dataArtikel.map(artikel => {
                return <Berita judul={artikel.title} isiArtikel={artikel.body} />
              })
            }
          </div>
        </Container>
      );
    }
  }
}

export default function App() {
  return (
    <Router>
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">Pemrograman Berbasis Framework</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Beranda</Nav.Link>
            <Nav.Link href="/berita">Berita</Nav.Link>
            <Nav.Link href="/tentang">Tentang</Nav.Link>
            <NavDropdown title="Codelabs" id="collasible-nav-dropdown" href="/codelabs">
              <NavDropdown.Item href="/codelabs/konsep-reactjs">Konsep ReactJS</NavDropdown.Item>
              <NavDropdown.Item href="/codelabs/belajar-react-router">Belajar React Router</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar>

        <Switch>
          <Route path="/berita">
            <Blog />
          </Route>
          <Route path="/tentang">
            <Tentang />
          </Route>
          <Route path="/codelabs">
            <Codelabs />
          </Route>
          <Route path="/">
            <Beranda />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}