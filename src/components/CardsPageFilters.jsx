import React from 'react';

function CardsPageFilters() {
  return (
    <section>
      <form>
        <label htmlFor="name">
          <input type="text" name="name" />
        </label>
        <label htmlFor="normal">
          <input name="rarity" id="normal" type="checkbox" value={ 1 } /> Normal
        </label>
        <label htmlFor="rare">
          <input name="rarity" id="rare" type="checkbox" value={ 2 } /> Rara
        </label>
        <label htmlFor="very-rare">
          <input name="rarity" id="very-rare" type="checkbox" value={ 3 } /> Muito Rara
        </label>
        <label htmlFor="epic">
          <input name="rarity" id="epic" type="checkbox" value={ 4 } /> Épica
        </label>
        <label htmlFor="legendary">
          <input name="rarity" id="legendary" type="checkbox" value={ 5 } /> Lendária
        </label>
        <label htmlFor="isTrunfo">
          <input name="isTrunfo" id="isTrunfo" type="checkbox" />Trunfo
        </label>
        <button type="reset">Limpar</button>
        <button>Filtrar</button>
      </form>
    </section>
  );
}

export default CardsPageFilters;
