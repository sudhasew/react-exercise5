import { useState } from "react";
import { Pet } from "./Pet";
import "./ArrayEx.css";
export function ArraysEx() {
  const Colors = ["red", "orange", "yellow"];
  const [pets, setNewPets] = useState<Pet[]>([
    {
      name: "Fluffer Nutter",
      type: "cat",
      id: 1,
    },
    {
      name: "Mocha",
      type: "dog",
      id: 2,
    },
    {
      name: "sophie",
      type: "hamster",
      id: 3,
    },
  ]);
  const [addNewColor, setAddNewColor] = useState("");
  function addColor(color: string): void {
    Colors.push(color);
  }

  return (
    <div>
      <h1>Arrays Exercise</h1>
      <h2>Colors</h2>

      <ol>
        {Colors.map((color, index) => (
          <li key={index}>
            <h3>{color}</h3>
          </li>
        ))}
        <li>
          <h3 {...addColor}>{addNewColor}</h3>
        </li>
      </ol>

      <button onClick={() => setAddNewColor("Green")}>Add Green</button>
      <button onClick={() => setAddNewColor("Blue")}>Add Blue</button>
      <button onClick={() => setAddNewColor("Violet")}>Add Violet</button>

      <h1>Pets</h1>
      <div>
        <tr>
          <th>Name</th>
          <th>Type</th>
        </tr>
      </div>
      <td>
        {pets.map((pet) => (
          <tr key={pet.id}>
            <tr>{pet.name}</tr>
          </tr>
        ))}
      </td>
      <td>
        {pets.map((pet) => (
          <tr key={pet.id}>
            <td>{pet.type}</td>
          </tr>
        ))}
      </td>
      {/* <table>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Action</th>
        </tr>
        <tr>
          <td>Fiffer Nutter</td>
          <td>cat</td>
          <td>
            <button>Delete</button>
          </td>
        </tr>
        <tr>
          <td>Mocha</td>
          <td>dog</td>
          <td>
            <button>Delete</button>
          </td>
        </tr>
        <tr>
          <td>Sophie</td>
          <td>hamster</td>
          <td>
            <button>Delete</button>
          </td>
        </tr>
      </table> */}
    </div>
  );
}
