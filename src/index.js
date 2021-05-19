import './sass/main.scss';

const makePromise = async () => await new Promise(resolve => resolve(5));

makePromise().then(console.log);
