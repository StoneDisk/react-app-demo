import './App.css';
import IncrementNumberSection from './components/IncrementNumberSection';
import SnackProductsSection from './components/SnackProductsSection';
import KitchenItemsSection from './components/KitchenItemsSection';
import RecipeInfoSection from './components/RecipeInfoSection';

function App() {

  return (
    <div>
      <h1>Advanced React Demo</h1>
      <p>Exploring the next features of React.js</p>
      <IncrementNumberSection></IncrementNumberSection>
      <SnackProductsSection></SnackProductsSection>
      <KitchenItemsSection></KitchenItemsSection>
    </div>
  )
}

export default App;
