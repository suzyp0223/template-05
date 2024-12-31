const categories = [
  { id: 'all', name: '전체보기' },
  { id: 'business', name: '비즈니스' },
  { id: 'entertainment', name: '엔터테인먼트' },
  { id: 'health', name: '건강' },
  { id: 'science', name: '과학' },
  { id: 'sports', name: '스포츠' },
  { id: 'technology', name: '기술' },
];

const Nav = () => {
  const nav = document.createElement('category-list');
  nav.className = 'category-list';
  const ul = document.createElement('ul');

  categories.forEach(category => {
    const li = document.createElement('li');
    li.id = category.id;
    li.className = 'category-item';
    li.textContent = category.name;

    li.addEventListener('click', () => {
      console.log(`Category ${category.name} clicked`);
    });

    ul.appendChild(li);
  });

  nav.appendChild(ul);
  return nav;
};

export default Nav;