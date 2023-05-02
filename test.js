const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arrSlice = arr.slice(0, 3);

const arrayOfObject = [
  {
    name: 'Paul',
    country: 'Canada',
    img: { name: 'image1', link: 'http://sdfsdf.com' },
  },
  {
    name: 'Leas',
    country: 'Jostan',
    img: { name: 'image2', link: 'http://hkgogfhsdg.org' },
  },
  {
    name: 'John',
    country: 'Italy',
    img: { name: 'image3', link: 'http://awgnhcf.ru' },
  },
  {
    name: 'Johny',
    country: 'Greece',
    img: { name: 'image3', link: 'http://awgnhcf.ru' },
  },
];

// const handleUserMovieSearch = (list) => {
//   const filteredList = list.filter((obj) => {
//     //loop through each object
//     for (let key in obj) {
//       //check if object value contains value you are looking for
//       if (obj[key].toLowerCase().includes('le')) {
//         //add this object to the filtered array
//         return obj;
//       }
//     }
//   });
//   return filteredList;
// };

const handleUserMovieSearch = (list) => {
  return list.filter(
    (obj) =>
      obj.name.toLowerCase().includes('jo') ||
      obj.country.toLowerCase().includes('jo')
  );
};

console.log(handleUserMovieSearch(arrayOfObject));

// console.log(typeof arrayOfObject);
