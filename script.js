const whatsappNumber = "6282111403413"; // Ganti nomor WhatsApp toko kamu (pakai kode negara tanpa tanda +)

const products = [
  { name: "Cutie Chick", size: "9 x 5", image: "img/cutie-chick.jpg", whatsappMessage: "Halo, saya ingin memesan Cutie Chick ukuran 9x5 dari NasCute." },
  { name: "Cute Bunny", size: "12 x 7", image: "img/cute-bunny.jpg", whatsappMessage: "Halo, saya ingin memesan Cute Bunny ukuran 12x7 dari NasCute." },
  { name: "Mini Cardigan", size: "S-M", image: "img/mini-cardigan.jpg", whatsappMessage: "Halo, saya ingin memesan Mini Cardigan dari NasCute." },
  { name: "Woolen Hat", size: "All Size", image: "img/woolen-hat.jpg", whatsappMessage: "Halo, saya ingin memesan Woolen Hat dari NasCute." },
  { name: "Tote Bag", size: "Medium", image: "img/tote-bag.jpg", whatsappMessage: "Halo, saya ingin memesan Tote Bag dari NasCute." },
  { name: "Knitted Doll", size: "20 cm", image: "img/knitted-doll.jpg", whatsappMessage: "Halo, saya ingin memesan Knitted Doll dari NasCute." },
  { name: "Cozy Scarf", size: "180 x 20 cm", image: "img/cozy-scarf.jpg", whatsappMessage: "Halo, saya ingin memesan Cozy Scarf dari NasCute." },
  { name: "Baby Socks", size: "Newborn", image: "img/baby-socks.jpg", whatsappMessage: "Halo, saya ingin memesan Baby Socks dari NasCute." },
  { name: "Wool Mittens", size: "Medium", image: "img/wool-mittens.jpg", whatsappMessage: "Halo, saya ingin memesan Wool Mittens dari NasCute." },
  { name: "Plaid Blanket", size: "150 x 200 cm", image: "img/plaid-blanket.jpg", whatsappMessage: "Halo, saya ingin memesan Plaid Blanket dari NasCute." },
  { name: "Cutie Chick 2", size: "9 x 5", image: "img/cutie-chick-2.jpg", whatsappMessage: "Halo, saya ingin memesan Cutie Chick ukuran 9x5 dari NasCute." },
  { name: "Cute Bunny 2", size: "12 x 7", image: "img/cute-bunny-2.jpg", whatsappMessage: "Halo, saya ingin memesan Cute Bunny ukuran 12x7 dari NasCute." },
  { name: "Mini Cardigan 2", size: "S-M", image: "img/mini-cardigan-2.jpg", whatsappMessage: "Halo, saya ingin memesan Mini Cardigan dari NasCute." },
  { name: "Woolen Hat 2", size: "All Size", image: "img/woolen-hat-2.jpg", whatsappMessage: "Halo, saya ingin memesan Woolen Hat dari NasCute." },
  { name: "Tote Bag 2", size: "Medium", image: "img/tote-bag-2.jpg", whatsappMessage: "Halo, saya ingin memesan Tote Bag dari NasCute." },
  { name: "Knitted Doll 2", size: "20 cm", image: "img/knitted-doll-2.jpg", whatsappMessage: "Halo, saya ingin memesan Knitted Doll dari NasCute." },
  { name: "Cozy Scarf 2", size: "180 x 20 cm", image: "img/cozy-scarf-2.jpg", whatsappMessage: "Halo, saya ingin memesan Cozy Scarf dari NasCute." },
  { name: "Baby Socks 2", size: "Newborn", image: "img/baby-socks-2.jpg", whatsappMessage: "Halo, saya ingin memesan Baby Socks dari NasCute." },
  { name: "Wool Mittens 2", size: "Medium", image: "img/wool-mittens-2.jpg", whatsappMessage: "Halo, saya ingin memesan Wool Mittens dari NasCute." },
  { name: "Plaid Blanket 2", size: "150 x 200 cm", image: "img/plaid-blanket-2.jpg", whatsappMessage: "Halo, saya ingin memesan Plaid Blanket dari NasCute." }
];

// Fungsi untuk membuat elemen katalog produk secara dinamis
function createCatalogCard(product, index) {
  const card = document.createElement("div");
  card.className = "catalog-item";
  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}" />
    <h3>${product.name}</h3>
    <p class="size">${product.size}</p>
    <button data-idx="${index}">Order to WhatsApp</button>
  `;
  return card;
}

// Menampilkan katalog penuh di halaman catalog.html
const catalogGrid = document.getElementById("catalog-grid");
if (catalogGrid) {
  products.forEach((product, idx) => {
    const card = createCatalogCard(product, idx);
    catalogGrid.appendChild(card);
  });

  const buttons = catalogGrid.querySelectorAll("button");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = btn.getAttribute("data-idx");
      openWhatsapp(products[idx].whatsappMessage);
    });
  });
}

// Menampilkan preview katalog di homepage (hanya 5 produk)
const catalogPreviewGrid = document.getElementById("catalog-preview-grid");
if (catalogPreviewGrid) {
  products.slice(0, 5).forEach((product, idx) => {
    const card = createCatalogCard(product, idx);
    catalogPreviewGrid.appendChild(card);
  });

  const buttons = catalogPreviewGrid.querySelectorAll("button");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = btn.getAttribute("data-idx");
      openWhatsapp(products[idx].whatsappMessage);
    });
  });
}

// Fungsi untuk membuka WhatsApp dengan pesan tertentu
function openWhatsapp(message) {
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

// Tombol konsultasi WhatsApp di index.html
const btnWhatsappConsult = document.getElementById("btn-whatsapp-consult");
if (btnWhatsappConsult) {
  btnWhatsappConsult.addEventListener("click", () => {
    openWhatsapp("Halo, saya ingin konsultasi membuat rajutan custom dari NasCute.");
  });
}
