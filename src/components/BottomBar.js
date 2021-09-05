import { Container, Footer, FlexBottom, Frame } from "./style";

export default function BottomBar(props) {
  const { posterURL, title, children } = props;

  return (
    <Footer>
      <Container>
        <FlexBottom>
          <Frame>
            <img src={posterURL} alt={title} />
          </Frame>
          <article>{children}</article>
        </FlexBottom>
      </Container>
    </Footer>
  );
}
