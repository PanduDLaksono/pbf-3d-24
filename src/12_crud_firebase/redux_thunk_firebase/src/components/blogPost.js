//import API from '../services/Artikel';
import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { DB } from '../firebase.config';
import 'bootstrap/dist/css/bootstrap.min.css';

function DaftarArtikel(props) {
    return (
        <div>
            <h3>{props.judul}</h3>
            <div>{props.isiArtikel}</div>
        </div>
    );
}


export default class BlogPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataArtikel: [],      // untuk menampung data API
            postArtikel: {
                userId: 1,
                title: '',
                body: ''
            }
        };
    }

    ambilDataDariServerAPI = () => {
        let ref = DB.ref("articles/");
        ref.on("value", snapshot => {
            if (snapshot.val() !== null)
                this.setState({
                    dataArtikel: snapshot.val()
                })
        });
    }

    simpanDataKeServerAPI = () => {
        DB.ref("articles/").set(this.state.dataArtikel);
    }

    handleTombolSimpan = (e) => {
        e.preventDefault();

        const { dataArtikel, postArtikel } = this.state;

        if (postArtikel.id && postArtikel.title && postArtikel.body) {
            const indeksArtikel = dataArtikel.findIndex(data => {
                return data.id === postArtikel.id
            });

            dataArtikel[indeksArtikel].title = postArtikel.title;
            dataArtikel[indeksArtikel].body = postArtikel.body;
            this.setState({ dataArtikel });
        } else if (postArtikel.title && postArtikel.body) {
            console.log(dataArtikel);
            const id = new Date().getTime().toString();
            let userId = 1; // TODO: set to username/email
            let title = postArtikel.title;
            let body = postArtikel.body;
            dataArtikel.push({ id, userId, title, body });
            this.setState({ dataArtikel });
        }

        postArtikel.id = '';
        postArtikel.title = '';
        postArtikel.body = '';
        this.setState({ postArtikel });
    }

    handleOnChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState(prevState => {
            prevState.postArtikel[name] = value;
            return {
                postArtikel: prevState.postArtikel
            };
        });
    }

    handleTombolHapus = (e) => {
        e.preventDefault();

        API.deleteNewsBlog(e.target.value)
            .then((response) => {
                this.ambilDataDariServerAPI();    // refresh data
                alert('Data berhasil dihapus!');
            });
    }

    componentDidMount() {
        this.ambilDataDariServerAPI()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState !== this.state.dataArtikel) {
            this.simpanDataKeServerAPI();
        }
    }

    render() {
        const { dataArtikel } = this.state;

        return (
            <div>
                <Container>
                    <Form onSubmit={this.handleTombolSimpan}>
                        <Form.Group controlId="inputJudul">
                            <Form.Label>Judul Artikel</Form.Label>
                            <Form.Control required type="text" name="title" placeholder="judul artikel" onChange={this.handleOnChange} />
                        </Form.Group>
                        <Form.Group controlId="inputIsiArtikel">
                            <Form.Label>Isi Artikel</Form.Label>
                            <Form.Control required name="body" onChange={this.handleOnChange} as="textarea" rows={3} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Simpan Artikel
            </Button>
                    </Form>
                </Container>

                <hr />
                <h2>Daftar Artikel</h2>
                {
                    (dataArtikel || []).map(artikel => {
                        return (
                            <div key={artikel.id}>
                                <DaftarArtikel judul={artikel.title} isiArtikel={artikel.body} />
                                <Button variant="danger" value={artikel.id} onClick={this.handleTombolHapus}>Hapus</Button>
                                <hr></hr>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}