import './App.css';
import IncrementNumberSection from './components/IncrementNumberSection';
import SnackProductsSection from './components/SnackProductsSection';
import KitchenItemsSection from './components/KitchenItemsSection';
import RecipeInformationSection from './components/RecipeInformationSection';

function App() {

  return (
    <div>
      <h1>Advanced React Demo</h1>
      <p>Exploring advanced features of React.js</p>
      <IncrementNumberSection></IncrementNumberSection>
      <SnackProductsSection></SnackProductsSection>
      <KitchenItemsSection></KitchenItemsSection>
      <RecipeInformationSection></RecipeInformationSection>
    </div>
  )
}

export default App;
