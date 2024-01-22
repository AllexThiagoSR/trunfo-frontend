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
    <section className="filter-container">
      <form className="filter-form">
        <label htmlFor="q">
          <input type="text" name="q" onChange={ handleChange } />
        </label>
        <label htmlFor="rarity">
          <select
            onChange={ handleChange }
            name='rarity'
          >
            <option value={ '' }>Todas</option>
            <option name="rarity" id="normal"value={ 1 }>Normal</option>
            <option name="rarity" id="rare" value={ 2 }>Rara</option>
            <option name="rarity" id="very-rare" value={ 3 }>Muito Rara</option>
            <option name="rarity" id="epic" value={ 4 }>Épica</option>
            <option name="rarity" id="legendary" value={ 5 }>Lendária</option>
          </select>
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
      </form>
      <div>
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
          form=''
          onClick={ (e) => {
            e.preventDefault();
            fetcher(form.q, form.rarity, form.isTrunfo);
          }}
        >Filtrar</button>
      </div>
    </section>
  );
}

export default CardsPageFilters;
