const pedirComments= async () => {
    const resp = await fetch('https://jsonplaceholder.typicode.com/comments')
    const data = await resp.json()
    const lista = document.getElementsByClassName('lista');
  
  for (let index = 0; index <10; index++) {
    const li = document.createElement('li');
    li.classList.add('opcion');
    li.innerHTML = `
        <h3>${data[index].name}</h3>
        <p>${data[index].email}</p>
        <p>${data[index].body}</p>
    `
    lista[0].appendChild(li);
  
    }
  }
  
  pedirComments();
  