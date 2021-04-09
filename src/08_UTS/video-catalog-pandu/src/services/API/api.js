import React from 'react';

function DaftarArtikel(props) {
    return (
        <div class="col-lg-4 col-md-6 col-sm-12 tm-catalog-item">
            <div class="position-relative tm-thumbnail-container">
                <img src={props.gambar} alt="Image" class="img-fluid tm-catalog-item-img" />
                <a href="/video" class="position-absolute tm-img-overlay">
                    <i class="fas fa-play tm-overlay-icon"></i>
                </a>
            </div>
            <div class="p-4 tm-bg-gray tm-catalog-item-description">
                <h3 class="tm-text-primary mb-3 tm-catalog-item-title">{props.judul}</h3>
                <p class="tm-catalog-item-text">{props.deskripsi}</p>
            </div>
        </div>
    );
}

class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,         // jika terjadi gagal ambil data dari API
            isLoaded: false,     // untuk status ketika sedang memuat
            dataBlog: []      // untuk menampung data API
        };
    }

    componentDidMount() {
        fetch("https://my-json-server.typicode.com/PanduDLaksono/PanduDLaksono.github.io/blog/")
            .then(response => response.json())
            .then(
                (dataJson) => {
                    this.setState({
                        isLoaded: true,
                        dataBlog: dataJson
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
        const { error, isLoaded, dataBlog } = this.state;

        if (error) {
            return <div>Terjadi galat: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Sedang memuat...</div>;
        } else {
            return (
                <div class="row tm-catalog-item-list">
                    {
                        dataBlog.map(artikel => {
                            return <DaftarArtikel
                                id={artikel.id}
                                judul={artikel.judul}
                                deskripsi={artikel.deskripsi}
                                gambar={artikel.gambar}
                            />
                        })
                    }
                </div>
            );
        }
    }
}

export default Blog;