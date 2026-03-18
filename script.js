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
        blurb: `The earth is suddenly invaded by aliens who call themselves the Daegi causing humanity to fight and prevent their extinction...<br><br>
                Roshan, our young MC faces bullying and disgrace due to his lack of abilities and strength, but one day, he stumbles upon into a ditch and finds a book which granted him access to an unimaginable power...<br><br>
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
        links: [{ name: "GoodNovel", url: "https://www.goodnovel.com/book/Fall-In-Love-My-Billionaire-CEO_31001218937" }],
        blurb: `Alyssa paused, "You don't believe in love at first sight," she said.<br><br>
                "I do not believe in love," the man shot back. He pulled out the ring she had given him. "I do not need this either."<br><br>
                Christmas takes a wild turn when Alyssa Rodriguez finds herself in a marriage with multi-billionaire Harrison Alexander the Fifth. At first it's silly, because she just met him. Who marries a stranger?<br><br>
                But after the massive betrayal of her fiancé and her step-sister, Alyssa would do anything to fill the hole in her heart. Then it becomes a wild game of romance, tension, mini golf, and secret babies.`
    },
    {
        title: "SSS URBAN CHEF: ENDLESS COOKING IN THE APOCALYPSE",
        cover: "cover3.jpg",
        genre: "action",
        links: [], // Add link here when available
        blurb: `Earth was invaded by strange races (elves, werewolves, vampires, Orcs), and brought to ruin... The aliens decided to make it a playground and released poisonous substances to mutate plants.<br><br>
                Humanity strived to live until some very first humans became mutated, paving the way for the upcoming mutant generation. <br><br>
                Rayden goes back in time after being murdered, and with the awakening of his new system, he swears to become stronger and build the biggest strong hold on earth.`
    },
    {
        title: "MAGNUS DEI: CRIMSON RESOLVE",
        cover: "cover4.jpg",
        genre: "action",
        links: [{ name: "MegaNovel", url: "https://www.meganovel.com/story/MAGNUS-DEI-SYSTEM-CRIMSON-RESOLVE_31001142667" }],
        blurb: `The SYN virus turned men into flesh-craving monsters, causing the Earth to lose more than half of its population. Alex Ray, just sixteen, was never meant to survive. Shot for defying a corrupt officer, his body is dumped in the Outer Regions—Earth’s deadliest horror land.<br><br>
                <strong>[Congratulations, Mortal, you have obtained the Magnus Dei System.]</strong><br>
                <strong>[Host’s potential: Unlimited.]</strong><br><br>
                Alex holds within his blood the cure to the virus, and now he must prevent both the system and the cure from falling into the wrong hands.`
    }
];

const bookGrid = document.getElementById('bookGrid');
const modal = document.getElementById('bookModal');
const modalCover = document.getElementById('modalCover');
const linkContainer = document.getElementById('linkContainer');

books.forEach((book, index) => {
    const bookDiv = document.createElement('div');
    bookDiv.className = 'book-item';
    bookDiv.innerHTML = `
        <div class="book-card-inner">
            <img src="${book.cover}" alt="${book.title}">
            <div class="book-title-overlay"><h3>${book.title}</h3></div>
        </div>
    `;
    bookDiv.onclick = () => openModal(index);
    bookGrid.appendChild(bookDiv);
});

function openModal(index) {
    const book = books[index];
    document.getElementById('modalTitle').innerText = book.title;
    document.getElementById('modalBlurb').innerHTML = book.blurb;
    modalCover.src = book.cover;
    
    // Clear previous links and add new ones
    linkContainer.innerHTML = '';
    if (book.links.length > 0) {
        book.links.forEach(link => {
            const a = document.createElement('a');
            a.href = link.url;
            a.target = "_blank";
            a.className = "btn-buy";
            a.innerText = `Read on ${link.name}`;
            linkContainer.appendChild(a);
        });
    } else {
        linkContainer.innerHTML = '<p>Coming Soon!</p>';
    }

    modalCover.onclick = (e) => spawnEmojis(book.genre, e);
    modal.style.display = "block";
}

function spawnEmojis(genre, event) {
    const emoji = (genre === 'romance') ? '❤️' : '🔥';
    for (let i = 0; i < 15; i++) {
        const e = document.createElement('div');
        e.innerText = emoji;
        e.className = 'floating-emoji';
        e.style.left = event.clientX + 'px';
        e.style.top = event.clientY + 'px';
        document.body.appendChild(e);

        const destX = (Math.random() - 0.5) * 400;
        const destY = (Math.random() - 0.5) * 400;

        setTimeout(() => {
            e.style.transform = `translate(${destX}px, ${destY}px) scale(1.5)`;
            e.style.opacity = '0';
        }, 10);
        setTimeout(() => e.remove(), 1000);
    }
}

document.querySelector('.close').onclick = () => modal.style.display = "none";
window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; }
