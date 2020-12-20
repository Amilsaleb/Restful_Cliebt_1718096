async function getData() {
    let url = 'http://localhost/ferdi/sepatu';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderData() {
    let json = await getData();
    let html = '';

    console.log(json);
    json.data.forEach(data => {
        let htmlSegment = `
            <div class="card mr-4 mb-4" style="width: 18rem;" >
                <div class="card-body">
                    <h5 class="card-title">${data.nama_sepatu}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">ID : ${data.id}</h6>
                    <br>
                    <button class="card-link btn btn-info" id="set-detail" data-target="#modal-detail" data-toggle="modal" data-nama_sepatu="${data.nama_sepatu}"  data-jenis_sepatu="${data.jenis_sepatu}" data-warna="${data.warna} "data-ukuran="${data.ukuran}" "data-jumlah="${data.jumlah}" "data-id="${data.id}">Detail</button>
                </div>
            </div>
                        `;

        html += htmlSegment;
    });

    let container = document.querySelector('#tampil');
    container.innerHTML = html;
}

renderData();

$(document).ready(function () {
    $(document).on('click', '#set-detail',function () {
        var nama_sepatu = $(this).data('nama_sepatu');
        var jenis_sepatu = $(this).data('jenis_sepatu');
        var warna = $(this).data('warna');
        var ukuran = $(this).data('ukuran');
        var jumlah = $(this).data('jumlah');
        var id = $(this).data('id');

        $('#modal-nama_sepatu').html(nama_sepatu);     
        $('#modal-jenis_sepatu').html(jenis_sepatu);     
        $('#modal-warna').html(warna);     
        $('#modal-ukuran').html(ukuran);
        $('#modal-jumlah').html(jumlah);     
        $('#modal-id').html(id);     
    });
});

