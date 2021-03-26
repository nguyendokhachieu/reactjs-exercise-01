import "./App.css";
import Button from "./components/Button/Button";
import Article from "./components/Article/Article";

function App() {

  let news_data = {
    title: "Only Someone Who's Seen The Mummy Will Pass This",
    description: "Markdown is a lightweight markup language with plain-text-formatting syntax. Its design allows it to…",
    authorName: "John Doe",
    authorImageLink: "/images/john-doe.png", 
    backgroundImageLink: "/images/blog-1.jpg",
    category: ["news", "technology"],
    categoryLink: ["/", "/"],
    datePublished: "June 09, 2020",
    timePublished: "2 min",
    link: "/",
    authorLink: "/",
  }

  return (
    <div className="App">
      <Button isLoading={ true }>React JS</Button>
      <Article data={ news_data } type="latest"></Article>    
    </div>
  );
}

export default App;
