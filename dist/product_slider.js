import { Carousel, Fancybox } from '../node_modules/@fancyapps/ui/dist/index.esm.js';
import { Thumbs } from '../node_modules/@fancyapps/ui/dist/carousel/carousel.thumbs.esm.js';

const productCarousel = new Carousel(
  document.getElementById('productCarousel'),
  {
    transition: 'slide',
    preload: 3, // Smoother navigation when using lazy loaded images
    Dots: false,
    Thumbs: {
      type: 'classic',
      Carousel: {
        dragFree: false,
        slidesPerPage: 'auto',
        Navigation: true,
        axis: 'x',
        breakpoints: {
          '(min-width: 768px)': {
            axis: 'y',
          },
        },
      },
    },
  },
  { Thumbs }
);

Fancybox.bind('[data-fancybox="gallery"]', {
  // Configuration options for Fancybox
});
