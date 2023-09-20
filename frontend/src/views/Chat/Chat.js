import Main from 'layouts/Main';
import Container from 'components/Container';
import { Hero } from './components';
import { ChatOpener } from './components/ChatOpener';

const Chat = () => {
  return (
    <Main colorInvert={true}>
      <Hero />
      <Container>
        <ChatOpener />
      </Container>
    </Main>
  );
};

export default Chat;
