const dynamicList = document.getElementById('list');

const items = [
    {
        name: 'apple',
        price: 100,
        photo: 'https://domf5oio6qrcr.cloudfront.net/medialibrary/11525/0a5ae820-7051-4495-bcca-61bf02897472.jpg'
    }, {
        name: 'banana',
        price: 200,
        photo: 'https://target.scene7.com/is/image/Target/GUEST_cf4773e6-afec-4aa1-89e7-74b7dfc09973?wid=488&hei=488&fmt=pjpeg'
    }, {
        name: 'kiwi',
        price: 300,
        photo: 'https://cdn.food.ru/unsigned/fit/640/480/ce/0/czM6Ly9tZWRpYS9waWN0dXJlcy9wcm9kdWN0cy8xMTUvY292ZXJzL0hRazJXOC5qcGc.jpg'
    },
    {
        name: 'orange',
        price: 150,
        photo: 'https://healthjade.com/wp-content/uploads/2017/10/orange-fruit.jpg'
    }, {
        name: 'mango',
        price: 350,
        photo: 'https://www.heddensofwoodtown.co.uk/wp-content/uploads/2020/07/Mango_opt.jpg'
    }, {
        name: 'pineapple',
        price: 400,
        photo: 'https://bazarekpolski.pl/wp-content/uploads/2020/10/ananas-600x600.jpg'
    },{
        name: 'strawberry',
        price: 180,
        photo: 'https://weresmartworld.com/sites/default/files/styles/full_screen/public/2021-05/aardbeien-3.jpg?itok=VKyyMjjg'
    }, {
        name: 'watermallon',
        price: 150,
        photo: 'https://cdn.britannica.com/99/143599-050-C3289491/Watermelon.jpg'
    }, {
        name: 'plum',
        price: 100,
        photo: 'https://static.libertyprim.com/files/familles/prune-large.jpg?1569271837'
    }
];


function createList() {
    
    const markup = items.map((product) => 
    `<li class="products__card">
        <h3 class="prosucts__title">Назва:${product.name}</h3>
        <h4 class="prosucts__price">Ціна: ${product.price}</h4>
        <img class="products__img" src="${product.photo}" alt="">
    </li>`
    ).join('');
  dynamicList.innerHTML = markup;
  return markup
}
console.log(createList());


function openInfoModal() {
    dynamicList.addEventListener('click',(e) => {
        document.querySelector('backdrop').classList.toggle('is-hidden')
    }
    );
}

