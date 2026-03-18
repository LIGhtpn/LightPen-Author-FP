const books = [
    {
        title: "LEVELLING UP",
        cover: "cover1.jpg", // Ensure these image names match your files
        genre: "action",
        blurb: `The earth is suddenly invaded by aliens who call themselves the Daegi... <br><br>
                Roshan, our young MC faces bullying and disgrace due to his lack of abilities, but stumbles into a ditch and finds a book which granted him access to an unimaginable power...<br><br>
                <strong>[HOST : ROSHAN TALON]</strong><br>
                <strong>[QUEST RECEIVED]</strong><br>
                <strong>[QUEST: RETRIEVE THE GEM OF A KING TIER]</strong>`
    },
    {
        title: "FALL IN LOVE MY BILLIONAIRE CEO",
        cover: "cover2.jpg",
        genre: "romance",
        blurb: `"Give me 30 days to make you fall in love. Let me marry you." Alyssa blurted out.<br><br>
                Christmas takes a wild turn when Alyssa Rodriguez finds herself in a marriage with multi-billionaire Harrison Alexander the Fifth. After a massive betrayal, it becomes a wild game of romance, tension, and secret babies.<br><br>
                Experts say you can't form a long-lasting relationship in just one month. However, Alyssa sets out to defy the impossible.`
    },
    {
        title: "SSS URBAN CHEF: ENDLESS COOKING IN THE APOCALYPSE",
        cover: "cover3.jpg",
        genre: "action",
        blurb: `Earth was invaded by strange races and brought to ruin. Humanity strived to live until some very first humans became mutated. <br><br>
                Four decades later, the aliens are coming back for another battle. Rayden goes back in time after being murdered, and with the awakening of his new system, he swears to become stronger and build the biggest stronghold on earth.`
    },
    {
        title: "MAGNUS DEI: CRIMSON RESOLVE",
        cover: "cover4.jpg",
        genre: "action",
        blurb: `The SYN virus turned men into flesh-craving monsters. Alex Ray, just sixteen, was never meant to survive. Shot for defying a corrupt officer, his body is dumped in the horror land of the Outer Regions.<br><br>
                <strong>[Congratulations, Mortal, you have obtained the Magnus Dei System.]</strong><br><br>
                Alex holds within his blood the cure to the virus. He must prevent the system and the cure from falling into the wrong hands.`
    }
];

const bookGrid = document.getElementById('bookGrid');
const modal = document.getElementById('bookModal');
const modalCover = document.getElementById('modalCover');

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
    // Use innerHTML to preserve the <br> line breaks
    document.getElementById('modalBlurb').innerHTML = book.blurb;
    modalCover.src = book.cover;
    
    // Set the genre for the emoji effect
    modalCover.onclick = () => spawnEmojis(book.genre);
    
    modal.style.display = "block";
}

// Emoji Burst Logic
function spawnEmojis(genre) {
    const emoji = (genre === 'romance') ? '❤️' : '🔥';
    for (let i = 0; i < 15; i++) {
        const e = document.createElement('div');
        e.innerText = emoji;
        e.style.position = 'fixed';
        e.style.left = event.clientX + 'px';
        e.style.top = event.clientY + 'px';
        e.style.fontSize = '2rem';
        e.style.pointerEvents = 'none';
        e.style.transition = 'all 1s ease-out';
        e.style.zIndex = '2000';
        document.body.appendChild(e);

        // Random movement
        const destX = (Math.random() - 0.5) * 300;
        const destY = (Math.random() - 0.5) * 300;

        setTimeout(() => {
            e.style.transform = `translate(${destX}px, ${destY}px)`;
            e.style.opacity = '0';
        }, 10);

        setTimeout(() => e.remove(), 1000);
    }
}

document.querySelector('.close').onclick = () => modal.style.display = "none";
window.onclick = (event) => { if (event.target == modal) modal.style.display = "none"; }
