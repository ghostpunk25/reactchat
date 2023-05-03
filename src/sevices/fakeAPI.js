import girl1 from '../img/Catalog/girl-1.jpg';
import girl2 from '../img/Catalog/girl-2.jpg';
import girl3 from '../img/Catalog/girl-3.jpg';
import girl4 from '../img/Catalog/girl-4.jpg';
import girl5 from '../img/Catalog/girl-5.jpg';
import girl6 from '../img/Catalog/girl-6.jpg';
import girl7 from '../img/Catalog/girl-7.jpg';
import girl8 from '../img/Catalog/girl-8.jpg';
import girl9 from '../img/Catalog/girl-9.jpg';
import girl10 from '../img/Catalog/girl-10.jpg';

const catalogList = [
   { id: 1, img: girl1, gender: 'famale', online: true, name: 'Hanna' },
   { id: 2, img: girl2, gender: 'famale', online: true, name: 'Candy' },
   { id: 3, img: girl3, gender: 'famale', online: false, name: 'Angelila_23' },
   { id: 4, img: girl4, gender: 'famale', online: false, name: 'Candy' },
   { id: 5, img: girl5, gender: 'famale', online: true, name: 'Angelila_23' },
   { id: 6, img: girl6, gender: 'famale', online: false, name: 'Hanna' },
   { id: 7, img: girl7, gender: 'famale', online: false, name: 'Candy' },
   { id: 8, img: girl8, gender: 'famale', online: false, name: 'Angelila_23' },
   { id: 9, img: girl9, gender: 'famale', online: true, name: 'Hanna' },
   { id: 10, img: girl10, gender: 'famale', online: true, name: 'Candy' }
];

export const getCatalogList = () => {
   return Promise.resolve(catalogList);
};

export const getProfileById = profileId => {
   return Promise.resolve(catalogList.find(profile => profile.id === profileId));
};