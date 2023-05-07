import './App.css';
import Header from './Header'
import Card from './Card'

function App() {
  return (
    <>
      <Header statement="Task: Add three Card elements" />
      <Card h2="First Card's h2" h3="First Card's h3"/>
      <Card h2="Second Card's h2" h3="Second Card's h3"/>
      <Card h2="Third Card's h2" h3="Third Card's h3"/>

    </>
    )
}

export default App;
