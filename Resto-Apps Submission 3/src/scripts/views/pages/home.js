import TheRestoDbSource from '../../data/therestodb-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
        <section class="content">
            <div class="restaurant">
                <h1 class="restaurant__label">Explore Restaurant</h1>
                <div id="posts" class="posts"></div>    
            </div>
            <blockquote class="quotes">
            People want honest, flavourful food, not some show-off meal that takes days to prepare
            <span>- Ted Allen</span>
            </blockquote>
        </section>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const restaurants = await TheRestoDbSource.home();
    const restosContainer = document.querySelector('#posts');
    restaurants.forEach((restaurant) => {
      restosContainer.innerHTML += createRestoItemTemplate(restaurant);
    });
  },
};

export default Home;
