const books = [
    {
        title: "LEVELLING UP",
        cover: "cover1.jpg", // Replace with actual path
        blurb: "In a world where stats are everything, one man decides to break the system."
    },
    {
        title: "FALL IN LOVE MY BILLIONAIRE CEO",
        cover: "cover2.jpg",
        blurb: "A classic Eliora romance. Will you find love or just a higher tax bracket?"
    },
    {
        title: "SSS URBAN CHEF: ENDLESS COOKING IN THE APOCALYPSE",
        cover: "cover3.jpg",
        blurb: "The world is ending, but the seasoning is perfect. Cooking through the chaos."
    },
    {
        title: "MAGNUS DEI: CRIMSON RESOLVE",
        cover: "cover4.jpg",
        blurb: "A dark fantasy where resolution meets the blade."
    }
];

const bookGrid = document.getElementById('bookGrid');
const modal = document.getElementById('bookModal');

// Load books into the grid
books.forEach((book, index) => {
    const bookDiv = document.createElement('div');
    bookDiv.className = 'book-item';
    bookDiv.innerHTML = `
        <img src="${book.cover}" alt="${book.title}">
        <h3>${book.title}</h3>
    `;
    bookDiv.onclick = () => openModal(index);
    bookGrid.appendChild(bookDiv);
});

function openModal(index) {
    const book = books[index];
    document.getElementById('modalTitle').innerText = book.title;
    document.getElementById('modalBlurb').innerText = book.blurb;
    document.getElementById('modalCover').src = book.cover;
    modal.style.display = "block";
}

document.querySelector('.close').onclick = () => modal.style.display = "none";
window.onclick = (event) => { if (event.target == modal) modal.style.display = "none"; }
