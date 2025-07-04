import React from 'react';
import { FaShoppingCart, FaHeart, FaStar } from 'react-icons/fa';
import BrowseGames from './BrowseGames';

const games = [
  {
    id: 1,
    title: 'Elden Ring',
    image: 'https://images4.alphacoders.com/115/thumb-1920-1151249.jpg',
    genre: 'RPG',
    rating: 4.8,
    price: 49.99,
    oldPrice: 59.99,
  },
  {
    id: 2,
    title: 'Genshin Impact',
    image: 'https://external-preview.redd.it/RQxiPS7Bbqse3evWzhB-B3tSDGR5VZy_32Eu_9hTFa8.jpg?width=1080&crop=smart&auto=webp&s=2c829691193d6118640028584a3ddcdd0264e10d',
    genre: 'Action RPG',
    rating: 4.6,
    price: 34.99,
  },
  {
    id: 3,
    title: 'Cyber Punk 2077',
    image: 'https://images.alphacoders.com/130/thumb-1920-1309784.png',
    genre: 'Sci-Fi, Open World',
    rating: 4.9,
    price: 39.99,
    oldPrice: 49.99,
  },
  {
    id: 4,
    title: 'Honkai StarRail',
    image: 'https://preview.redd.it/3-0-official-illustration-hq-v0-7saa439sdeae1.jpeg?width=1080&crop=smart&auto=webp&s=9186fc269592cd4a50a38adef574424bc883d968',
    genre: 'Turn-based RPG',
    rating: 4.4,
    price: 0.00,
  },
];

export default function BrowseGames() {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}><span style={styles.fire}>🔥</span> Featured Games</h2>
      <div style={styles.grid}>
        {games.map((game) => (
          <div key={game.id} style={styles.card}>
            <div style={styles.imageWrapper}>
              <img src={game.image} alt={game.title} style={styles.image} />
              <div style={styles.genre}>{game.genre}</div>
              <div style={styles.heart}><FaHeart /></div>
            </div>
            <div style={styles.cardBody}>
              <h3 style={styles.gameTitle}>{game.title}</h3>
              <div style={styles.rating}>
                {Array.from({ length: 5 }, (_, i) => (
                  <FaStar key={i} color={i < Math.round(game.rating) ? '#fbc02d' : '#ccc'} size={16} />
                ))}
                <span style={styles.ratingNum}>{game.rating}</span>
              </div>
              <div style={styles.priceBlock}>
                <span style={styles.price}>${game.price.toFixed(2)}</span>
                {game.oldPrice && (
                  <span style={styles.oldPrice}>${game.oldPrice.toFixed(2)}</span>
                )}
                <button style={styles.addBtn}><FaShoppingCart />&nbsp;Add</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '50px',
    fontFamily: 'sans-serif',
    background: 'linear-gradient(135deg, #6a6a91, #cfcfe2)',
    minHeight: '100vh',
    color: '#fff',
  },
  title: {
    fontSize: '32px',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '40px',
  },
  fire: {
    marginRight: '12px',
  },
  grid: {
    display: 'flex',
    gap: '30px',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  card: {
    width: '280px',
    backgroundColor: '#2e2e3e',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
    position: 'relative',
    transition: 'transform 0.3s',
  },
  imageWrapper: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
  },
  genre: {
    position: 'absolute',
    top: '12px',
    left: '12px',
    backgroundColor: '#8b4dff',
    padding: '6px 10px',
    borderRadius: '8px',
    fontSize: '13px',
    fontWeight: 'bold',
  },
  heart: {
    position: 'absolute',
    top: '12px',
    right: '12px',
    backgroundColor: '#444',
    padding: '6px',
    borderRadius: '50%',
    cursor: 'pointer',
  },
  cardBody: {
    padding: '20px',
    backgroundColor: '#3a3a4e',
  },
  gameTitle: {
    margin: '0 0 12px 0',
    fontSize: '18px',
  },
  rating: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    marginBottom: '12px',
  },
  ratingNum: {
    fontSize: '14px',
    marginLeft: 'auto',
    color: '#ccc',
  },
  priceBlock: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  price: {
    color: '#4caf50',
    fontWeight: 'bold',
    fontSize: '18px',
  },
  oldPrice: {
    color: '#999',
    textDecoration: 'line-through',
    fontSize: '14px',
  },
  addBtn: {
    marginLeft: 'auto',
    backgroundColor: '#a259ff',
    border: 'none',
    color: 'white',
    padding: '8px 16px',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    fontSize: '15px',
  },
};
