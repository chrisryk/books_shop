renderPage();

function renderPage() {
const header = document.createElement('header');
header.classList.add('header');
document.body.appendChild(header)

const h1 = document.createElement('h1');
h1.textContent = 'BookShop';
header.appendChild(h1);

const main = document.createElement('main');
main.classList.add('main');
document.body.appendChild(main)

const catalog = document.createElement('div');
catalog.classList.add('catalog');
main.appendChild(catalog);

const basket = document.createElement('div');
basket.classList.add('basket');
main.appendChild(basket);

const basketTitle = document.createElement('h2');
basketTitle.textContent = 'Your basket:'
basket.appendChild(basketTitle);

const footer = document.createElement('footer');
footer.classList.add('footer');
document.body.appendChild(footer)


async function getBooks() {
    const url = 'books.json';
    try {
        const res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderBookCard() {
    const books = await getBooks();
    books.forEach(b => {
        const card = document.createElement('div');
        card.classList.add('card');
        catalog.appendChild(card);

        const bookImg = document.createElement('img');
        bookImg.setAttribute('src', b.imageLink);
        card.appendChild(bookImg);

        const caption = document.createElement('div');
        caption.classList.add('caption');
        card.appendChild(caption);

        const title = document.createElement('div');
        title.classList.add('title');
        caption.appendChild(title);

        const cardTitle = document.createElement('h4');
        cardTitle.textContent = b.title;
        cardTitle.classList.add('card-title');
        title.appendChild(cardTitle);

        const cardAuthor = document.createElement('h6');
        cardAuthor.textContent = b.author;
        cardAuthor.classList.add('card-author');
        title.appendChild(cardAuthor);

        const price = document.createElement('div');
        price.classList.add('price');
        caption.appendChild(price);

        const spanPrice = document.createElement('span');
        spanPrice.textContent = `${b.price}$`;
        price.appendChild(spanPrice);

        const descriptionButton = document.createElement('button');
        descriptionButton.textContent = 'Show more';
        descriptionButton.classList.add('show-description');
        descriptionButton.addEventListener('click', function () {
            catalog.querySelector('.description').classList.add('visible');
        })
        price.appendChild(descriptionButton);

        const buyButton = document.createElement('button');
        buyButton.textContent = 'Buy!';
        buyButton.classList.add('basket-add');
        price.appendChild(buyButton);

        const description = document.createElement('div');
        description.classList.add('description');
        price.appendChild(description);

        const descriptionContent = document.createElement('div');
        descriptionContent.classList.add('description-content');
        descriptionContent.textContent = b.description;
        description.appendChild(descriptionContent);

        const closeButton = document.createElement('button');
        closeButton.textContent = 'X';
        closeButton.classList.add('close');
        descriptionContent.appendChild(closeButton);
    });
}

renderBookCard();
}