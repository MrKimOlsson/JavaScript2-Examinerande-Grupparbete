const BASE_URL = 'https://fnd22-shared.azurewebsites.net/api/Cases/';
console.log(BASE_URL);
const errands = []


const output = document.querySelector('#output');

const getPosts = async () => {
  const res = await fetch(BASE_URL)
  const posts = await res.json()

  console.log(posts)
  // Loopar igenom Post som kommer från databasen
  posts.forEach(post => {
    errands.push(post)
    //Lägg till ett nytt element i output
    output.appendChild(createCardElement(post))
  })
}


getPosts()

// Skapa ett card element med information från post > från databsen
const createCardElement = (post) => {
    const card = document.createElement('a')
    card.className = 'card'
    
  // card.href = `details.html?id=${post.id}`
  card.setAttribute('href', `details.html?id=${post.id}`)

  const subject = document.createElement('h2')
  subject.innerText = post.subject
  const message = document.createElement('p')
  message.innerText = post.message

  card.appendChild(subject)
  card.appendChild(message)

  return card
}