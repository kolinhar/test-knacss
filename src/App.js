import { useEffect, useRef, useState } from 'react';
import './App.scss';

function App() {
  const refMenu = useRef();
  const [radio, setRadio] = useState({ selectedOption: 'radio2' });
  const [checkbox, setCheckbox] = useState({
    check1: true,
    check2: null,
    check3: false,
  });
  const [select, setSelect] = useState({ selectedOption: 'oignons' });

  useEffect(() => {
    document.body.classList.add('layout-maxed');
  }, []);

  const handleClickMenu = () => {
    refMenu.current.classList.toggle('is-active');
  };

  const handleChangeRadio = (e) => {
    setRadio({ selectedOption: e.target.value });
  };

  const handleChangeCheckbox = (e) => {
    setCheckbox({
      ...checkbox,
      [e.target.value]: e.target.checked,
    });
  };

  const handleChangeSelect = (e) => {
    setSelect({
      selectedOption: e.target.value,
    });
  };

  return (
    <>
      <header>
        <h1 className='text-center'>Header</h1>
      </header>
      <main>
        <h1>Main</h1>
        <button
          id='burgerButton'
          ref={refMenu}
          onClick={handleClickMenu}
          className='burger-button'
        >
          <span></span>
        </button>
        <span> &larr; click me, animation by addind CSS class</span>
        <p className='mt-20 underline'>
          Note: try resizing screen to see how it works
        </p>
        <hr />
        <article>
          <h2 className='text-center'>CSS Classes visibility</h2>
          <p>
            prefix (eg: <code>sm:hidden</code>, <code>md:hidden</code>...)
          </p>
          <ul>
            Visiblility:
            <li className='sm:hidden'>
              <code>sm:hidden</code> small screens only
            </li>
            <li className='md:hidden'>
              <code>md:hidden</code> medium screens and smaller
            </li>
            <li className='lg:hidden'>
              <code>lg:hidden</code> large screens and smaller
            </li>
            <li className='xl:hidden'>
              <code>xl:hidden</code> extra large screens and smaller
            </li>
          </ul>
        </article>
        <hr />
        <article>
          <h2 className='text-center'>input type text</h2>
          <label>
            Text Label :&nbsp;
            <input type='text' />
          </label>
        </article>
        <hr />
        <h2 className='text-center'>input type checkbox</h2>
        <section className='grid sm:grid-cols-2'>
          <article>
            <ul className='is-unstyled'>
              <li>
                <label>
                  <input
                    type='checkbox'
                    className='checkbox'
                    onChange={handleChangeCheckbox}
                    value='check1'
                    defaultChecked='checked'
                  />
                  check 1
                </label>
              </li>
              <li>
                <label>
                  <input
                    type='checkbox'
                    className='checkbox'
                    onChange={handleChangeCheckbox}
                    value='check2'
                  />
                  check 2
                </label>
              </li>
              <li>
                <label>
                  <input
                    type='checkbox'
                    className='checkbox'
                    value='check3'
                    disabled='disabled'
                  />
                  check 3
                </label>
              </li>
            </ul>
          </article>
          <article>
            <span>Selection: {JSON.stringify(checkbox)}</span>
          </article>
        </section>
        <hr />
        <h2 className='text-center'>input type radio</h2>
        <span>(display flex + grid)</span>
        <section className='flex flex-col sm:flex-row md:flex-row lg:flex-row'>
          <article className='flex-grow'>
            <ul className='is-unstyled grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
              <li>
                <label>
                  <input
                    type='radio'
                    className='radio'
                    name='r1'
                    value='radio1'
                    onChange={handleChangeRadio}
                    checked={radio.selectedOption === 'radio1'}
                  />
                  radio1
                </label>
              </li>
              <li>
                <label>
                  <input
                    type='radio'
                    className='radio'
                    name='r1'
                    value='radio2'
                    onChange={handleChangeRadio}
                    checked={radio.selectedOption === 'radio2'}
                  />
                  radio2
                </label>
              </li>
              <li>
                <label>
                  <input
                    type='radio'
                    className='radio'
                    name='r1'
                    value='radio3'
                    onChange={handleChangeRadio}
                    checked={radio.selectedOption === 'radio3'}
                    disabled
                  />
                  radio3
                </label>
              </li>
              <li>
                <label>
                  <input
                    type='radio'
                    className='radio'
                    name='r1'
                    value='radio4'
                    onChange={handleChangeRadio}
                    checked={radio.selectedOption === 'radio4'}
                  />
                  radio4
                </label>
              </li>
            </ul>
          </article>
          <article>
            <span>Selection: {radio.selectedOption}</span>
          </article>
        </section>
        <hr />
        <h2 className='text-center'>Select</h2>
        <section className='flex flex-col sm:flex-row'>
          <article className='flex-grow'>
            <label htmlFor='mySelect'>Choose a vegetable :</label>
            <select
              id='mySelect'
              onChange={handleChangeSelect}
              value={select.selectedOption}
            >
              <option value='salade'>salade</option>
              <option value='tomate'>tomate</option>
              <option value='oignons'>oignons</option>
            </select>
          </article>
          <article className='flex-grow'>
            <p>Selected Value: {select.selectedOption}</p>
          </article>
        </section>
      </main>
      <footer>
        <h1 className='my-0 text-center'>Footer</h1>
      </footer>
    </>
  );
}

export default App;
