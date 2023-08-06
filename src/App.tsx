import GlobalStyle, { Container } from 'components/Common.styled';
import reactImage from './images/react.png';
import Icon from 'components/Icon/Icon';
import { cart, heart } from 'components/Icon/icons';
// import { ReactComponent as LogoIcon } from './images/logo.svg';

const App = () => {
	return (
		<>
			<GlobalStyle />
			<Container>
				<h1>Hello, Styled React 2023-08!</h1>
				<h2>ENV test: {process.env.TEST}</h2>
				{/* <LogoIcon />  // на таком использовании пока спотыкается JEST! */}
				<Icon icon={cart} color='white' />
				<Icon icon={heart} color='red' />
				<div style={{ width: '200px', height: '200px' }}>
					<img src={reactImage} alt='test' />
				</div>
			</Container>
		</>
	);
};

export default App;
