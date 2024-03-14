import './style.css';

const data = {
  text: ['xs', 'sm', 'base', 'lg', 'xl'],
  'bg-purple': ['50', '100', '200', '300', '400', '500'],
  'text-slate': ['500', '600', '700', '800', '900'],
  rounded: ['sm', 'lg', 'xl', '2xl', '3xl'],
};

function generateCombinations(test: Record<string, string[]>): string[][] {
  const keys = Object.keys(test);
  const combinations: string[][] = [];

  function generate(current: string[], index: number) {
    if (index === keys.length) {
      combinations.push([...current]);
      return;
    }
      
    const key = keys[index];
    const values = test[key];
      
    for (const value of values) {
      current.push(`${key}-${value}`);
      generate(current, index + 1);
      current.pop();
    }
  }
  generate([], 0);
  
  return combinations;
}

const buttons = generateCombinations(data).map(
  (classes) => `<button class='${classes.join(' ')}'>button</button>`
);

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Тестовое</h1>
    <div class="card">
      ${buttons.join(' ')}
    </div>
  </div>
`;