const books = [
    {
        title: "LEVELLING UP",
        cover: "cover1.jpg", 
        genre: "action",
        links: [
            { name: "MegaNovel", url: "https://www.meganovel.com/story/LEVEL-UP_31000324809" },
            { name: "WebNovel", url: "https://m.webnovel.com/book/levelling-up_24032541206612605" },
            { name: "JoyRead", url: "https://www.joyread.com/5245-Levelling-Up?fromChapter=1" }
        ],
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
        links: [
            { name: "GoodNovel", url: "https://www.goodnovel.com/book/Fall-In-Love-My-Billionaire-CEO_31001218937" }
        ],
        blurb: `Alyssa paused, "You don't believe in love at first sight," she said.<br><br>
                "I do not believe in love," the man shot back...<br><br>
                Christmas takes a wild turn when Alyssa Rodriguez finds herself in a marriage with multi-billionaire Harrison Alexander the Fifth.`
    },
    {
        title: "SSS URBAN CHEF",
        cover: "cover3.jpg", 
        genre: "action",
        links: [],
        blurb: `Earth was invaded by strange races and brought to ruin. Humanity strived to live until some very first humans became mutated.<br><br>
                Rayden goes back in time after being murdered, and with the awakening of his new system, he swears to become stronger and build the biggest stronghold on earth.`
    },
    {
        title: "MAGNUS DEI: CRIMSON RESOLVE",
        cover: "cover4.jpg", 
        genre: "action",
        links: [
            { name: "MegaNovel", url: "https://www.meganovel.com/story/MAGNUS-DEI-SYSTEM-CRIMSON-RESOLVE_31001142667" }
        ],
        blurb: `The SYN virus turned men into flesh-craving monsters. Alex Ray, just sixteen, was never meant to survive.<br><br>
                <strong>[Congratulations, Mortal, you have obtained the Magnus Dei System.]</strong><br><br>
                Alex holds within his blood the cure to the virus.`
    }
];

const bookGrid = document.getElementById('bookGrid');
const modal = document.getElementById('bookModal');

// 1. Create the Book Cards on the main page
books.forEach((book, index) => {
    const card = document.createElement('div');
    card.className = 'book-item';
    card.innerHTML = `<img src="${book.cover}" alt="${book.title}"><h3>${book.title}</h3>`;
    card.onclick = () => openModal(index);
    bookGrid.appendChild(card);
});

// 2. Open the Modal and fill it with data
function openModal(index) {
    const book = books[index];
    document.getElementById('modalTitle').innerText = book.title;
    document.getElementById('modalBlurb').innerHTML = book.blurb;
    document.getElementById('modalCover').src = book.cover;
    
    // Fill the link-list container
    const linkContainer = document.querySelector('.link-list');
    linkContainer.innerHTML = ''; 
    if(book.links.length > 0) {
        book.links.forEach(link => {
            linkContainer.innerHTML += `<a href="${link.url}" target="_blank" class="buy-btn">Read on ${link.name}</a>`;
        });
    } else {
        linkContainer.innerHTML = '<p>Links coming soon!</p>';
    }

    // 3. Set up the emoji click on the cover
    document.getElementById('modalCover').onclick = (e) => spawnEmojis(e, book.genre);
    
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Disable scroll
}

// 4. The Emoji "Burst" Function
function spawnEmojis(e, genre) {
    const emojiType = (genre === 'romance') ? '❤️' : '🔥';
    for (let i = 0; i < 15; i++) {
        const span = document.createElement('span');
        span.className = 'emoji-fly';
        span.innerText = emojiType;
        
        // Random scatter coordinates
        const x = (Math.random() - 0.5) * 400;
        const y = (Math.random() - 0.5) * 400;
        
        span.style.setProperty('--x', `${x}px`);
        span.style.setProperty('--y', `${y}px`);
        span.style.left = `${e.clientX}px`;
        span.style.top = `${e.clientY}px`;
        
        document.body.appendChild(span);
        setTimeout(() => span.remove(), 1500); // Remove after animation
    }
}

// Close Button
document.querySelector('.close').onclick = () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
};

// Click outside to close
window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
};
