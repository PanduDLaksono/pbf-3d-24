import React from 'react';

function DaftarArtikel(props) {
    return (
        <div class="col-lg-4 col-md-6 col-sm-12 tm-catalog-item">
            <div class="tm-video-description-box">
                <h2 class="mb-5 tm-video-title">{props.judul}</h2>
                <p class="mb-4">{props.deskripsi}</p>
            </div>
        </div>
    );
}

class BlogDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,         // jika terjadi gagal ambil data dari API
            isLoaded: false,     // untuk status ketika sedang memuat
            dataBlog: []      // untuk menampung data API
        };
    }

    componentDidMount = (data) => {
        fetch("https://my-json-server.typicode.com/PanduDLaksono/PanduDLaksono.github.io/blog/${data}")
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
                <div class="col-xl-8 col-lg-7">
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

export default BlogDetail;