import Cards from "./components/cards/Cards";
import Tittle from "./components/titulo/Tittle";
import { CARDS } from './constants/cards';

const App = () => {
	return (
		<>
		<Tittle
		text1='Reliable, efficient delivery'
		text2='Powered by Technology'
		text3='Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful'
		/>
		<div className="container">
		{
		CARDS.map(cards=>(
		<Cards
		key={cards.id}
		src={cards.src}
		alt={cards.alt}
		color={cards.color}
		text1={cards.text1}
		text2={cards.text2}
		/>
		))}
		</div>
		</>
	)
};

export default App;
