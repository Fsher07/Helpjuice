import './style.css';

const container = document.getElementById('creator-container'); //container of editor area
const inputContainer = document.querySelector('.input-container');
const creator = document.querySelector('input');

// create h1 element function
const addHeader1Element = (text) => {
  const h1 = document.createElement('h1');
  h1.setAttribute('class', 'text-3xl font-bold w-full mt-5');
  h1.setAttribute('name', 'creator');
  h1.textContent = text;
  container.insertBefore(h1, inputContainer);
};

const addTextElement = (text) => {
  const p = document.createElement('p');
  p.setAttribute('class', 'text-xl w-full mt-5');
  p.setAttribute('name', 'creator');
  p.textContent = text;
  container.insertBefore(p, inputContainer);
};

// when type / shows block, /1 change field for header and /+1 change field for text
const getValue = (command) => {
  let value = command;
  console.log(value);
  if (creator.value === '/1') {
    creator.value = '';
    creator.setAttribute('name', 'creator');
    creator.setAttribute('placeholder', 'Heading 1');
    creator.setAttribute('class', 'text-3xl font-bold w-full mt-5');
  } else if (creator.value === '/+1') {
    creator.value = '';
    creator.setAttribute('name', 'creator');
    creator.setAttribute('placeholder', 'Type your text');
    creator.setAttribute('class', 'text-l w-full mt-5 text-gray-600');
  }
  document.addEventListener('keydown', (e) => {
    if (
      e.key === 'Enter' &&
      e.target.name === 'creator' &&
      e.target.value !== ''
    ) {
      console.log(value);
      if (value === '/1') {
        addHeader1Element(e.target.value);
        creator.value = '';
        value = '';
      } else if (value === '/+1') {
        addTextElement(e.target.value);
        creator.value = '';
        value = '';
      }
      creator.setAttribute(
        'placeholder',
        'Type / for block, @ to link docs or people'
      );
      creator.setAttribute(
        'class',
        'w-full appearance-none mt-5 p-0 opacity-40 text-xl'
      );
    }
  });
};

// when press enter, create element and reset input field
// document.addEventListener('keydown', (e) => {
//   if (
//     e.key === 'Enter' &&
//     e.target.name === 'creator' &&
//     e.target.value !== ''
//   ) {
//     console.log(e.target.value);
//     addHeader1Element(e.target.value);
//     creator.value = '';
//     creator.setAttribute(
//       'placeholder',
//       'Type / for block, @ to link docs or people'
//     );
//     creator.setAttribute(
//       'class',
//       'w-full appearance-none mt-5 p-0 opacity-40 text-xl'
//     );
//   }
// });

// to listen input field everytime it changes to catch requested block
creator.addEventListener('input', (e) => {
  getValue(e.target.value);
  // create block card and remove it depending on input value
  if (creator.value === '/') {
    const model = document.createElement('div');
    model.setAttribute('class', 'model');
    model.innerHTML = `
      <div class="model-content shadow-2xl w-2/5">
        <div class="flex items-center space-x-4">
          <img src="assets/text.png" class="opacity-60 w-16 h-16">
          <div class="model-header">
            <h1 class="text-2xl font-bold">Heading 1</h1>
            <p class="model-close opacity-70">Type 1 to create a header</p>
          </div>
        </div>
        <div class="flex items-center space-x-4 mt-2">
          <img src="assets/text.png" class="opacity-60 w-16 h-16">
          <div class="model-header">
            <h1 class="text-2xl font-bold">Text 1</h1>
            <p class="model-close opacity-70">Type +1 to create a text</p>
          </div>
        </div>
      </div>
        `;
    inputContainer.appendChild(model);
  } else {
    const model = document.querySelector('.model');
    if (model) {
      model.remove();
    }
  }
});
