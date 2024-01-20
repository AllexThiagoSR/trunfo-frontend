import React, { useState } from 'react';

function CardsPageFilters({ fetcher }) {
  const [form, setForm] = useState({
    q: '',
    rarity: '',
    isTrunfo: ''
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({
      ...form,
      [name]: value,
    })
  };

  return (
    <section>
      <form>
        <label htmlFor="q">
          <input type="text" name="q" onChange={ handleChange } />
        </label>
        <label htmlFor="normal">
          <input name="rarity" id="normal" type="radio" value={ 1 } onChange={ handleChange } /> Normal
        </label>
        <label htmlFor="rare">
          <input name="rarity" id="rare" type="radio" value={ 2 } onChange={ handleChange } /> Rara
        </label>
        <label htmlFor="very-rare">
          <input name="rarity" id="very-rare" type="radio" value={ 3 } onChange={ handleChange } /> Muito Rara
        </label>
        <label htmlFor="epic">
          <input name="rarity" id="epic" type="radio" value={ 4 } onChange={ handleChange } /> Épica
        </label>
        <label htmlFor="legendary">
          <input name="rarity" id="legendary" type="radio" value={ 5 } onChange={ handleChange } /> Lendária
        </label>
        <label htmlFor="isTrunfo">
          <select
            onChange={ handleChange }
            name='isTrunfo'
          >
            <option value={ '' } >Todas</option>
            <option value={ 'true' } >Super Trunfo</option>
            <option value={ 'false' }>Não Super Trunfos</option>
          </select>
        </label>
        <button
          type="reset"
          onClick={() => {
            setForm({
              q: '',
              rarity: '',
              isTrunfo: '',
            });
            fetcher();
          }}
        >Limpar</button>
        <button
          onClick={ (e) => {
            e.preventDefault();
            fetcher(form.q, form.rarity, form.isTrunfo);
          }}
        >Filtrar</button>
      </form>
    </section>
  );
}

export default CardsPageFilters;
