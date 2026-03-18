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
        blurb: `The earth is suddenly invaded by aliens who call themselves the Daegi causing humanity to fight and prevent their extinction, when peace treaty is signed between the two forces, humanity realizes that there could be another upcoming war and the race to surpass their limits begin.<br><br>
                Roshan, our young MC faces bullying and disgrace due to his lack of abilities and strength, but one day, he stumbles upon into a ditch and finds a book which granted him access to an unimaginable power and unparalleled strength, pushing him into a universe of strange possibilities.<br><br>
                With each passing day, he undergoes profound transformation evolving him into a being of pure power, a weapon of mass destruction above the limits of humanity. <br><br>
                <strong>[HOST : ROSHAN TALON]</strong><br>
                <strong>[QUEST RECEIVED]</strong><br>
                <strong>[QUEST: RETRIEVE THE GEM OF A KING TIER]</strong><br>
                <strong>[QUEST REWARD: NEW ABILITY]</strong>`
    },
    {
        title: "FALL IN LOVE MY BILLIONAIRE CEO",
        cover: "cover2.jpg", 
        genre: "romance",
        links: [
            { name: "GoodNovel", url: "https://www.goodnovel.com/book/Fall-In-Love-My-Billionaire-CEO_31001218937" }
        ],
        blurb: `Alyssa paused, "You don't believe in love at first sight," she said.<br><br>
                "I do not believe in love," the man shot back. He pulled out the ring she had given him. "I do not need this either."<br><br>
                "What if I make you fall in love?" Alyssa blurted out. "Give me 30 days to make you fall in love. Let me marry you."<br><br>
                Christmas takes a wild turn when Alyssa Rodriguez finds herself in a marriage with multi-billionaire Harrison Alexander the Fifth. At first it's silly, because she just met him. Who marries a stranger? But after the massive betrayal of her fiancé and her step-sister, Alyssa would do anything to fill the hole in her heart.`
    },
    {
        title: "SSS URBAN CHEF",
        cover: "cover3.jpg", 
        genre: "action",
        links: [],
        blurb: `Earth was invaded by strange races (elves, werewolves, vampires, Orcs), and brought to ruin. The race who emerged on top were Aliens. They decided to make earth a playground and released poisonous substances to mutate more than eighty percent of earth’s wildlife and plants. <br><br>
                Rayden goes back in time after being murdered, and with the awakening of his new system, he swears to become stronger and build the biggest strong hold on earth.`
    },
    {
        title: "MAGNUS DEI: CRIMSON RESOLVE",
        cover: "cover4.jpg", 
        genre: "action",
        links: [
            { name: "MegaNovel", url: "https://www.meganovel.com/story/MAGNUS-DEI-SYSTEM-CRIMSON-RESOLVE_31001142667" }
        ],
        blurb: `The SYN virus turned men into flesh-craving monsters. Alex Ray, just turned sixteen, was never meant to survive. Shot for defying a corrupt officer, his body is dumped in the Outer Regions—Earth’s deadliest horror land. However, God had other plans.<br><br>
                <strong>[Congratulations, Mortal, you have fulfilled all requirements and obtained the Magnus Dei System.]</strong><br><br>
                Alex holds within his blood the cure to the virus, and now he must prevent both the system and the cure from falling into the wrong hands.`
    }
];

const bookGrid = document.getElementById('bookGrid');
const modal = document.getElementById('bookModal');

// Populate the grid
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
    
    // Clear and update links
    const linkContainer = document.querySelector('.link-list');
    linkContainer.innerHTML = ''; 
    if(book.links.length > 0) {
        book.links.forEach(link => {
            const a = document.createElement('a');
            a.href = link.url;
            a.target = "_blank";
            a.innerText = `Read on ${link.name}`;
            linkContainer.appendChild(a);
        });
    } else {
        linkContainer.innerHTML = '<p>Links coming soon!</p>';
    }

    // Attach emoji trigger to the cover image click
    document.getElementById('modalCover').onclick = (e) => spawnEmojis(e, book.genre);
    
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; 
}

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
