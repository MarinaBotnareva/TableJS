const body = document.body;
let main = document.createElement('main');

const news = [
  { src: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fklike.net%2F3089-kartinki-rybalka-35-foto.html&psig=AOvVaw3IIBohpeiXvGrXC4BcEaZy&ust=1645796403822000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCND7n8a7mPYCFQAAAAAdAAAAABAD', title: 'Отличная погода!', text: 'Синоптики обещают отличную погоду в течение всего сезона', button: 'Подробнее'},
  { src: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fklike.net%2F3089-kartinki-rybalka-35-foto.html&psig=AOvVaw3IIBohpeiXvGrXC4BcEaZy&ust=1645796403822000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCND7n8a7mPYCFQAAAAAdAAAAABAD', title: 'Отличная погода!', text: 'Синоптики обещают отличную погоду в течение всего сезона', button: 'Подробнее'},
  { src: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fklike.net%2F3089-kartinki-rybalka-35-foto.html&psig=AOvVaw3IIBohpeiXvGrXC4BcEaZy&ust=1645796403822000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCND7n8a7mPYCFQAAAAAdAAAAABAD', title: 'Отличная погода!', text: 'Синоптики обещают отличную погоду в течение всего сезона', button: 'Подробнее'},
]

news.forEach((value) => {
  let article = document.createElement('article');
  let img = document.createElement('img');
  img.innerHTML = `src: ${value.src} `
  let h3 = document.createElement('h3');
  h3.innerHTML = value.title;
  let p = document.createElement('p');
  p.innerHTML = value.text;
  let button = document.createElement('button');
  button.innerHTML = value.button;

  article.append(img, h3, p, button);
  main.append(article);
})

