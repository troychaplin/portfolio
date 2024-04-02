import { Experience } from "./components/Experience/Experience";
import { Article } from "./ui-kit/Article/Article";
import { Section } from "./ui-kit/Section/Section";

function App() {
  return (
    <Section maxWidth="5xl">
      <Article>
        <h1>Troy Chaplin</h1>
        <p>Designer and Developer</p>
        <p>This single page portfolio is currently being developed.</p>
      </Article>
      <Experience />
    </Section>
  );
}

export default App;
