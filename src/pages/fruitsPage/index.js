//importando o useSelector do react-redux
import { useSelector } from "react-redux";

const FruitsPage = () => {
  //acessando o estado global e pegando o state fruits
  const fruits = useSelector((state) => state.fruits);

  return (
    <div className="fruits">
      <h2>Lista de frutas</h2>
      <ul>
        {fruits.map((e, i) => (
          <li key={i}> {e}</li>
        ))}
      </ul>
    </div>
  );
};
export default FruitsPage;
