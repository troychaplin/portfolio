import { Article } from "./components/Article/Article";
import { Section } from "./components/Section/Section";

function App() {
  return (
    <Section maxWidth="5xl">
      <Article>
        <h1>Troy Chaplin</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
          sollicitudin risus porta.
        </p>
      </Article>
      <Article>
        <h2>My Work</h2>
        <p>
          Praesent quis posuere dui, ornare imperdiet augue. Morbi iaculis erat
          sed metus sollicitudin, nec luctus.
        </p>
      </Article>
      <Article>
        <h2>Experience</h2>
        <p>
          Etiam feugiat ac tortor ac ornare. Suspendisse tincidunt elit quis
          blandit tincidunt. Etiam eu tellus volutpat, porta leo rhoncus, luctus
          enim.
        </p>
      </Article>
    </Section>
  );
}

export default App;
