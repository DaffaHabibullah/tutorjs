// function insertAfter(newNode, referenceNode) {
//     referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
// }

// let inputpass = document.querySelector("#passwordInput");

// let email_h1 = document.createElement("h1");
// email_h1.innerText = "Email";
// document.body.appendChild(email_h1);
// insertAfter(email_h1, inputpass)

// let email_input = document.createElement("input");
// email_input.placeholder = "alamat email";
// insertAfter(email_input, email_h1);


// let batal_btn = document.createElement("button");
// batal_btn.innerText = "Batal";
// document.body.appendChild(batal_btn);

// let data = []

// let buttonTarget = document.querySelector("#buttonTamba");

// buttonTarget.addEventListener("click", function(){
//     data.push({
//         id: data.length + 1,
//         img: "./public/Screenshot_5.png",
//         judul: "gacha",
//         harga: 10000
//     })

//     for(let i = 0; i < data.length-1; i++){
//         document.querySelector(".card1").remove();

//     }

//     data.map(element => {

//         //create element
//         let card = document.createElement("div");
//         let img = document.createElement("img");
//         let judul = document.createElement("h1");
//         let harga = document.createElement("p");
//         let btn = document.createElement("button");
        
//         //set attribute img
//         img.setAttribute('src', element.img);
//         judul.innerText = element.judul;
//         harga.innerText = element.harga;
//         btn.innerText = "gatcha now!";
    
//         //set classname
//         card.className = "card1";
//         img.className = "img";
//         judul.className = "judul";
//         harga.className = "harga";
//         btn.className = "btn";
    
//         document.body.appendChild(card);
//         card.appendChild(img);
//         card.appendChild(judul);
//         card.appendChild(harga);
//         card.appendChild(btn);
//     });
// })

let tambah = [{
    id: 1,
    img: "./public/Screenshot_5.png",
    judul: "gacha",
    harga: 10000

},
{
    id: 2,
    img: "./public/Screenshot_5.png",
    judul: "gacha",
    harga: 10000
}]

tambah.map(element => {
    let card = document.createElement("div");
    let img = document.createElement("img");
    let judul = document.createElement("h1");
    let harga = document.createElement("p");
    let btn = document.createElement("button");
    
    //set attribute img
    img.setAttribute('src', element.img);
    judul.innerText = element.judul;
    harga.innerText = element.harga;
    btn.innerText = "gatcha now!";

    //set classname
    card.className = "card1";
    img.className = "img";
    judul.className = "judul";
    harga.className = "harga";
    btn.className = "btn";

    document.body.appendChild(card);
    card.appendChild(img);
    card.appendChild(judul);
    card.appendChild(harga);
    card.appendChild(btn);
})

let bunttonTambah = document.querySelector("#buttonTamba");

bunttonTambah.addEventListener("click", function(){
    tambah.push({
        id: tambah.length + 1,
        img: "./public/Screenshot_5.png",
        judul: "gacha", 
        harga: tambah.length + 10000
    })

    
    let card = document.createElement("div");
    let img = document.createElement("img");
    let judul = document.createElement("h1");
    let harga = document.createElement("p");
    let btn = document.createElement("button");

    card.className = "card1";

    img.setAttribute('src', "./public/Screenshot_5.png");
    judul.innerText = tambah[tambah.length - 1].judul;
    harga.innerText = `Rp.${tambah[tambah.length - 1].harga}`;
    btn.innerText = "gatcha now!";

    document.body.appendChild(card);
    card.appendChild(img);
    card.appendChild(judul);
    card.appendChild(harga);
    card.appendChild(btn);
    console.log(tambah.length);
})
    