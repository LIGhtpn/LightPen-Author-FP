// 1. Your Book Data
const books = [
    { title: "LEVELLING UP", cover: "levelling_up.jpg" },
    { title: "FALL IN LOVE MY BILLIONAIRE CEO", cover: "billionaire_ceo.jpg" },
    { title: "SSS URBAN CHEF: ENDLESS COOKING IN THE APOCALYPSE", cover: "urban_chef.jpg" },
    { title: "MAGNUS DEI: CRIMSON RESOLVE", cover: "magnus_dei.jpg" }
];

// 2. Logic for the main Gallery (index.html)
const bookGrid = document.getElementById('bookGrid');
if (bookGrid) {
    books.forEach((book, index) => {
        const bookLink = document.createElement('a');
        bookLink.href = `book-details.html?id=${index}`;
        bookLink.className = 'book-item';
        bookLink.innerHTML = `
            <img src="${book.cover}" alt="${book.title}">
            <h3>${book.title}</h3>
        `;
        bookGrid.appendChild(bookLink);
    });
}

// 3. Logic for the Details Page (book-details.html)
function displayBookDetails() {
    const params = new URLSearchParams(window.location.search);
    const bookId = params.get('id');

    if (bookId !== null && books[bookId]) {
        const book = books[bookId];
        document.getElementById('detailTitle').innerText = book.title;
        document.getElementById('detailCover').src = book.cover;
        // Blurb is currently a placeholder as requested
    }
}
