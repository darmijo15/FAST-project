import './style.css';

const mySearch = document.querySelector('my-search');

mySearch?.addEventListener('find', e => console.log((<CustomEvent>e).detail))

export * from './components/my-search'
export * from './components/pre-built'
export * from './components/user-card'