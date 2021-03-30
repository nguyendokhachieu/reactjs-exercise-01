import Button from "./components/Button/Button";
import Article from "./components/Article/Article";
import Shopping from "./components/Shopping/Shopping";

function App() {
  let news_data = {
    title: "Only Someone Who's Seen The Mummy Will Pass This",
    description: `Markdown is a lightweight markup 
                  language with plain-text-formatting syntax. 
                  Its design allows it to…`,
    authorName: "John Doe",
    authorImageLink: "/images/john-doe.png",
    backgroundImageLink: "/images/blog-1.jpg",
    category: [
      {
        name: "News",
        URL: "/news",
      },
      {
        name: "Technology",
        URL: "/tech",
      },
    ],
    datePublished: "June 09, 2020",
    timePublished: "2 min",
    link: "/",
    authorLink: "/",
  };

  let URL = "https://google.com";

  return (
    <div className="App">
      <Button isLoading={ false } size="small" primaryColor="orange" href={URL} disabled={ false }>React JS</Button>

      {/* <Article data={news_data} type="latest"></Article> */}
    
      {/* <Article data={news_data} type="popular"></Article> */}
      
      {/* <Article data={news_data} type="normal"></Article> */}

      {/* <Shopping /> */}
    </div>
  );
}

export default App;