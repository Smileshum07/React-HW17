import './App.css';
import Post from './Post'
import iconLike from './icons/IconLike.png'
import iconComment from './icons/IconComment.png'
import iconShare from './icons/IconShare.png'


function App() {
  const AVA = "https://www.pokemoncenter.com/site/binaries/content/gallery/bloomreach/page-content/featured-characters/featured_characters_pikachu.jpg"
  const IMAGE = "https://www.staffsunion.com/asset/Event/21388/fizfguzcu61y.jpg?thumbnail_width=720&thumbnail_height=720&resize_type=ResizeWidth"

  return (
    <div className = "App">
      <header className = "App-header">
        <Post author = {{
            name: "Pikachu",
            photo: AVA,
            nickname: "@pikachu_nice_pokemon"
        }}
            content = "Pokemons like The Christmas. What about you? Write in the comments how you like to celebrate the New Year :)"
            image = {IMAGE}
            iconLike = {iconLike}
            iconComment = {iconComment}
          iconShare={iconShare} />
      </header>
    </div>
  );
}

export default App;
