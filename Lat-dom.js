// const body = document.getElementsByTagName('body')[0];

// function ubahWarna() {
//     body.style.backgroundColor = 'red';
// } 

// const tombol = document.getElementsByClassName('button-54')[0];

// tombol.addEventListener('click', ubahWarna);

const button = document.getElementsByClassName('button-54')[0];

button.addEventListener('click', function() {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);

    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
})