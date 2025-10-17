export function createCard(parent, { id, title, desc, src, alt, link } = {}) {
    // console.log('id:', id);
    // console.log('title:', title);
    // console.log('desc:', desc);
    // console.log('src:', src);
    // console.log('alt:', alt);
    // console.log('parent:', parent);'// console.log(id, title, desc, src, alt);
    if (!parent) return;
    const card = document.createElement('div');
    if (title) card.id = `${title.toLowerCase()}Card`;
    card.classList.add('card-item');

    if(src) {
        // Image Div
        const srcDiv = document.createElement('div');
        srcDiv.classList.add('card-item-image');
        // Image Tag
        const img = document.createElement('img');
        img.src = src;
        img.alt = alt || `${title} Card Image`;
        const aTag = document.createElement('a');
        aTag.href = link;
        aTag.rel = 'noopener noreferrer';
        aTag.target = '_blank';
        aTag.appendChild(img);
        console.log(`<a> tag for image ${id}:`, aTag);
        console.log('href:', link);
        srcDiv.appendChild(aTag)
        // Append Elements
        card.appendChild(srcDiv);
    }

    if(title || desc) {
        // Content Div
        const contentDiv = document.createElement('div');
        contentDiv.classList.add('card-item-content');
        // Title Div
        const titleDiv = document.createElement('div');
        titleDiv.classList.add('card-item-title');
        titleDiv.textContent = title || '';
        // Desc Div
        const descDiv = document.createElement('div');
        descDiv.classList.add('card-item-desc');
        descDiv.textContent = desc || '';
        // Append Elements
        contentDiv.appendChild(titleDiv);
        contentDiv.appendChild(descDiv);
        card.appendChild(contentDiv);
    }

    parent.appendChild(card);

    return card
}

export function createCardBatch(parent, cardsData, fn = createCard) {
    const cardsValues = Object.values(cardsData);
    console.log('cardsValues:', cardsValues);
    cardsValues.forEach((data) => {
        fn(parent, data);
    });
}