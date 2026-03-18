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
        blurb: `The earth is suddenly invaded by aliens... Roshan stumbles into a ditch and finds a book which granted him access to an unimaginable power.<br><br><strong>[HOST : ROSHAN TALON]</strong><br><strong>[QUEST: RETRIEVE THE GEM]</strong>`
    },
    {
        title: "FALL IN LOVE MY BILLIONAIRE CEO",
        cover: "cover2.jpg", 
        genre: "romance",
        links: [{ name: "GoodNovel", url: "https://www.goodnovel.com/book/Fall-In-Love-My-Billionaire-CEO_31001218937" }],
        blurb: `"Give me 30 days to make you fall in love." Alyssa Rodriguez finds herself in a marriage with multi-billionaire Harrison Alexander the Fifth.`
    },
    {
        title: "SSS URBAN CHEF",
        cover: "cover3.jpg", 
        genre: "action",
        links: [],
        blurb: `Earth was invaded by strange races. Rayden goes back in time after being murdered and swears to build the biggest stronghold on earth.`
    },
    {
        title: "MAGNUS DEI: CRIMSON RESOLVE",
        cover: "cover4.jpg", 
        genre: "action",
        links: [{ name: "MegaNovel", url: "https://www.meganovel.com/story/MAGNUS-DEI-SYSTEM-CRIMSON-RESOLVE_31001142667" }],
        blurb: `The SYN virus turned men into monsters. Alex Ray holds within his blood the cure to the virus.<br><br><strong>[Congratulations, Mortal, you have obtained the Magnus Dei System.]</strong>`
    }
];

const bookGrid = document.getElementById('bookGrid');
const modal = document.getElementById('bookModal');

books.forEach((book, index) => {
    const card = document.createElement('div');
    card.className = 'book-item';
    card.innerHTML = `<img src="${book.cover}" alt="${book.title}"><h3>${book.title}</h3>`;
    card.onclick = () => openModal(index);
    bookGrid.appendChild(card);
});

function openModal(index) {
    const book = books[index];
    document.getElementById('modalTitle').innerText = book.title;
    document.getElementById('modalBlurb').innerHTML = book.blurb;
    document.getElementById('modalCover').src = book.cover;
    
    const linkList = document.querySelector('.link-list');
    linkList.innerHTML = ''; 
    book.links.forEach(link => {
        linkList.innerHTML += `<a href="${link.url}" target="_blank">Read on ${link.name}</a>`;
    });

    document.getElementById('modalCover').onclick = (e) => {
        const emoji = (book.genre === 'romance') ? '❤️' : '🔥';
        for (let i = 0; i < 12; i++) {
            const span = document.createElement('span');
            span.className = 'emoji-fly';
            span.innerText = emoji;
            const x = (Math.random() - 0.5) * 400;
            const y = (Math.random() - 0.5) * 400;
            span.style.setProperty('--x', `${x}px`);
            span.style.setProperty('--y', `${y}px`);
            span.style.left = `${e.clientX}px`;
            span.style.top = `${e.clientY}px`;
            document.body.appendChild(span);
            setTimeout(() => span.remove(), 1200);
        }
    };
    
    modal.style.display = "block";
}

document.querySelector('.close').onclick = () => modal.style.display = "none";
window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; };
function spawnEmojis(e, genre) {
    const emojiType = (genre === 'romance') ? '❤️' : '🔥';
    
    for (let i = 0; i < 15; i++) {
        const span = document.createElement('span');
        span.className = 'emoji-fly';
        span.innerText = emojiType;
        
        // Calculate random scatter coordinates
        const x = (Math.random() - 0.5) * 300;
        const y = (Math.random() - 0.5) * 300;
        
        // Set properties for the CSS animation
        span.style.setProperty('--x', `${x}px`);
        span.style.setProperty('--y', `${y}px`);
        
        // Position at click point
        span.style.left = `${e.clientX}px`;
        span.style.top = `${e.clientY}px`;
        span.style.position = 'fixed';
        
        document.body.appendChild(span);
        
        // Cleanup after animation ends
        setTimeout(() => span.remove(), 1500);
    }
}

// Close Modal logic
document.querySelector('.close').onclick = () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
};

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
};
};
