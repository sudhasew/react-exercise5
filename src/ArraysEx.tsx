import { useState } from "react";

export function ArraysEx() {
  const Colors = ["red", "orange", "yellow"];
  const [addNewColor, setAddNewColor] = useState("");
  function addColor(color: string): void {
    Colors.push(color);
  }

  return (
    <div>
      <h1>Arrays Exercise</h1>
      <h2>Colors</h2>
      <ol>
        <li>
          <h3>{Colors[0]}</h3>
        </li>
        <li>
          <h3>{Colors[1]}</h3>
        </li>
        <li>
          <h3>{Colors[2]}</h3>
        </li>
        <li>
          <h3 {...addColor}>{addNewColor}</h3>
        </li>
      </ol>

      <button onClick={() => setAddNewColor("Green")}>Add Green</button>
      <button onClick={() => setAddNewColor("Blue")}>Add Blue</button>
      <button onClick={() => setAddNewColor("Violet")}>Add Violet</button>

      <h1>Pets</h1>

      <table>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Action</th>
        </tr>
        <tr>
          <td>Fluffer Nutters</td>
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
      </table>
    </div>
  );
}

//   return (
//     <ul>
//       {Colors.colors.map((color, index) => (
//         <li key={index}> {color.name} </li>
//       ))}
//     </ul>
//   );
