import './assets/fonts.css'
import './style.css'
import './assets/gallery.css'
import './assets/modal.css'
import './assets/cards.css'
import leftImg from './images/gallery/left@2x.jpg'
import rightTopImg from './images/gallery/right-top@2x.jpg'
import rightBottomImg from './images/gallery/right-bottom@2x.jpg'
import leftImgHRes from './images/gallery/left@3x.jpg'
import rightTopImgHRes from './images/gallery/right-top@3x.jpg'
import rightBottomImgHRes from './images/gallery/right-bottom@3x.jpg'
import redCard from './images/cards/red@2x.jpg'
import greenCard from './images/cards/green@2x.jpg'
import whiteCard from './images/cards/white@2x.jpg'
import { openModal, closeModal, setModalContent } from './modal'
import { createCardBatch } from './cards'

document.querySelector('#app').innerHTML = `
  <main>
    <section id="gallerySection" class="gallery-section section">
      <div class="gutter">
        <div class="gallery-holder">
          <div class="gallery" style="grid-area: holder-1">
            <div class="gallery-item" style="grid-area: item-1" data-obj="leftImgHRes">
              <img src="${leftImg}" alt="Gallery Image 1" />
            </div>
            <div class="gallery-item" style="grid-area: item-2" data-obj="rightTopImgHRes">
              <img src="${rightTopImg}" alt="Gallery Image 2" />
            </div>
            <div class="gallery-item" style="grid-area: item-3" data-obj="rightBottomImgHRes">
              <img src="${rightBottomImg}" alt="Gallery Image 3" />
            </div>
          </div>
          <div class="gallery-content" style="grid-area: holder-2">
            <div class="content-title">WHAT DOES COOKING MEAN?</div>
            <hr class="divider" />
            <p>Is it simply applying heat to a food product? A way of making certain food safe to eat? Or a way to create flavour and make food more appealing? This is just part of what Hervé This, the father of molecular gastronomy, has dedicated his life to finding out. We spoke to him to find out what his experiments have told him. And in the process even discovered the secret to cooking the perfect egg...</p>
            <div class="perfect-egg">THE PERFECT EGG</div>
            <div class="content-footer">Keep water between 67 and 68°C for a flavourful, tender yolk</div>
          </div>
        </div>
      </div>
    </section>
    <section id="cardsSection" class="cards-section section">
      <div class="gutter">
        <div class="section-title">
          <h1 class="relative mx-auto">Taste the Colour</h1>
        </div>
        <div class="cards-holder">

        </div>
      </div>
    </section>
    <div id="modalBackdrop" class="modal-backdrop fixed inset-0" aria-hidden="true">
      <div class="modal-content main-gutter" role="dialog" tabindex="-1">
        <div class="modal-header">
          <div class="modal-close-btn" aria-label="Close Modal">&times;</div>
        </div>
        <div class="modal-image">
          <img src="" alt="Modal Image" />
        </div>
      </div>
    </div>
  </main>
`
// GALLERY
const galImages = document.querySelectorAll('.gallery-item')
const modalBackdrop = document.getElementById('modalBackdrop');
const modalImage = modalBackdrop.querySelector('.modal-image img');
const modalCloseBtn = modalBackdrop.querySelector('.modal-close-btn');
const modalContent = modalBackdrop.querySelector('.modal-content');
// CARDS SECTION
const cardsHolder = document.querySelector('.cards-holder');

// SAMPLE OBJECTS FOR DATA
const modalData = {
  leftImgHRes: {
    src: leftImgHRes,
    alt: 'Modal Image 1',
    orientation: 'portrait',
  },
  rightTopImgHRes: {
    src: rightTopImgHRes,
    alt: 'Modal Image 2',
    orientation: 'landscape',
  },
  rightBottomImgHRes: {
    src: rightBottomImgHRes,
    alt: 'Modal Image 3',
    orientation: 'landscape',
  }
};

const cardsData = {
  redCard: {
    id: 1,
    title: 'Red',
    desc: 'Red foods remind us of berries and soft fruits, so we anticipate a sweet taste.',
    src: redCard,
    alt: 'Red Card Image',
    link: '#',
  },
  greenCard: {
    id: 2,
    title: 'Green',
    desc: 'Fresh, zingy green colours are reminiscent of unripe fruit, promising sour or acid flavours',
    src: greenCard,
    alt: 'Green Card Image',
    link: '#',
  },
  whiteCard: {
    id: 3,
    title: 'White',
    desc: 'White foods evoke memories of salt and salty flavours, driving the expectation of a savoury treat.',
    src: whiteCard,
    alt: 'White Card Image',
    link: '#',
  },
  // whiteCards: {
  //   id: 4,
  //   title: 'Whites',
  //   desc: 'White foods evoke memories of salt and salty flavours, driving the expectation of a savoury treats.',
  //   src: whiteCard,
  //   alt: 'White Card Images',
  //   link: '#',
  // },
}

// CREATE CARDS
createCardBatch(cardsHolder, cardsData);

// ADD EVENT LISTENERS
galImages.forEach((img) => {
  img.addEventListener('click', (e) => {
    const dataObj = img.getAttribute('data-obj');
    const { src, alt, orientation } = modalData[dataObj] || {
      src: 'https://placehold.co/600x400',
      alt: 'Placeholder Image',
      orientation: 'landscape'
    }
    setModalContent(modalContent, modalImage, src, alt, orientation);
    openModal(modalBackdrop, e.currentTarget);
  });
});

modalBackdrop.addEventListener('click', (e) => {
  if (e.target === modalBackdrop) {
    closeModal(modalBackdrop);
  }
});
modalCloseBtn.addEventListener('click', () => {
  closeModal(modalBackdrop);
});