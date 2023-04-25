import './App.css';
import IncrementNumberSection from './components/IncrementNumberSection';
import SnackProductsSection from './components/SnackProductsSection';
import KitchenItemsSection from './components/KitchenItemsSection';
import RecipeInformationSection from './components/RecipeInformationSection';
import ToggleCardSection from './components/ToggleCardSection';
import AddSnackSection from './components/AddSnackSection';

function App() {

  return (
    <div>
      <h1>React App Demo</h1>
      <h2>Creating Interactive User Interface Components using React.js</h2>
      <IncrementNumberSection></IncrementNumberSection>
      <SnackProductsSection></SnackProductsSection>
      <KitchenItemsSection></KitchenItemsSection>
      <RecipeInformationSection></RecipeInformationSection>
      <ToggleCardSection></ToggleCardSection>
      <AddSnackSection></AddSnackSection>
    </div>
  )
}

export default App;
