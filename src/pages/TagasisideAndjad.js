import { useState } from "react";
import andjateFail from '../nimed.json';

function TagasisedeAndjad() {

  const [andjad, uuendaAndjad] = useState(andjateFail);

  const filtreeriM = () => {
    const vastus = andjad.filter(element =>
      element.startsWith('M'));
    uuendaAndjad(vastus);
  }

  const filtreeri6 = () => {
    const vastus6 = andjad.filter(element =>
      element.length === 6);
    uuendaAndjad(vastus6);
  }

  const filtreeriY = () => {
    const vastusY = andjad.filter((element) =>
      (element.slice(-1)).startsWith('y'));
    uuendaAndjad(vastusY);
  }

  const filtreeriZA = () => {
    const vastusZA = andjad.sort().reverse();
    uuendaAndjad(vastusZA);
  }


  return (
    <div>
      <div>Valitud kokku {andjad.length} nimesid</div>
      <button onClick={() => filtreeriM()}>Filtreri ehk jätta kõik M tähega algavad nimed alles</button>
      <br />
      <button onClick={() => filtreeri6()}>Filtreeri ehk jätta kõik täpselt 6 kohalised nimed alles</button>
      <br />
      <button onClick={() => filtreeriY()}>Filtreeri ehk jätta kõik Y tähega lõpevad nimed alles</button>
      <br />
      <button onClick={() => filtreeriZA()}>Sorteeri Z-A</button>
      <br />
      <button>Proovi map funktsiooni - kirjuta iga nime ette EST-</button>
      <br />
      <button>
        Leia üles mis on nime Paul järjekorranumber - console või HTML
      </button>
      <br />
      <button>Kuva tähestikus esimene, kellel on D tähega algav nimi. Console või HTML</button>
      <br />
      {andjad.map((element) => <div>{element}</div>)}
    </div>
  );
}

export default TagasisedeAndjad;
