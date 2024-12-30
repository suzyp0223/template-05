import Nav from './components/Nav.js';
import NewsList from './components/NewsList.js';

document.addEventListener('DOMContentLoaded', () => {
 const root = document.getElementById('root');
});

//  Nav와 NewsList 컴포넌트를 초기화하고 DOM에 추가
const nav = Nav();
const newsList = NewsList();

root.appendChild(nav);
root.appendChild(newsList);

nav.addEventListener('click', (event) => {
  if (event.target.classList.contains('category-items')) {
    const category = event.target.id;
    newsList.update(category);
  };
});