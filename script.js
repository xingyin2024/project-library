const BOOKS = [
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    year: 1925,
    genre: 'Fiction',
    rating: 4.2,
    description:
      'A classic novel set in the Roaring Twenties, it explores themes of wealth, love, and the American Dream through the enigmatic Jay Gatsby.',
    image: './books-images/the-great-gatsby.jpg'
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    year: 1960,
    genre: 'Fiction',
    rating: 4.5,
    description:
      'Set in the American South, this novel tackles issues of racism and injustice through the eyes of young Scout Finch.',
    image: './books-images/to-kill-a-mockingbird.jpg'
  },
  {
    title: '1984',
    author: 'George Orwell',
    year: 1949,
    genre: 'Science Fiction',
    rating: 4.4,
    description:
      'A dystopian classic that explores totalitarianism and the consequences of a surveillance state in a bleak future.',
    image: './books-images/1984.jpg'
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    year: 1813,
    genre: 'Fiction',
    rating: 4.25,
    description:
      'A timeless romance novel that examines societal expectations and the misunderstandings that can arise from pride and prejudice.',
    image: './books-images/pride-and-prejudice.jpg'
  },
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    year: 1951,
    genre: 'Fiction',
    rating: 4,
    description:
      'Narrated by the teenage Holden Caulfield, the novel explores themes of alienation and the search for authenticity.',
    image: './books-images/unknown.jpg'
  },
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    year: 1937,
    genre: 'Fantasy',
    rating: 4.6,
    description:
      'A fantasy adventure novel that follows Bilbo Baggins on a quest to help a group of dwarves reclaim their homeland from a dragon.',
    image: './books-images/the-hobbit.jpg'
  },
    {
    title: 'Moby-Dick',
    author: 'Herman Melville',
    year: 1851,
    genre: 'Adventure',
    rating: 4.1,
    description:
      'An epic tale of obsession, revenge, and the relentless pursuit of the great white whale, Moby Dick.',
    image: './books-images/moby-dick.jpg'
  },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    author: 'J.R.R. Tolkien',
    year: 1954,
    genre: 'Fantasy',
    rating: 4.55,
    description:
      'The first volume of the epic fantasy trilogy follows Frodo Baggins and the Fellowship on their quest to destroy the One Ring.',
    image: './books-images/the-lord-of-the-rings.jpg'
  },
  {
    title: 'The Shining',
    author: 'Stephen King',
    year: 1977,
    genre: 'Horror',
    rating: 4.3,
    description:
      "A psychological horror novel that tells the story of the Torrance family's terrifying experiences at the haunted Overlook Hotel.",
    image: './books-images/unknown.jpg'
  },
  {
    title: 'The Chronicles of Narnia: The Lion, the Witch and the Wardrobe',
    author: 'C.S. Lewis',
    year: 1950,
    genre: 'Fantasy',
    rating: 4.15,
    description:
      'The first book in the Chronicles of Narnia series, it follows the adventures of children who discover the magical land of Narnia.',
    image: './books-images/the-chronicles-of-narnia.jpg'
  },
  {
    title: 'The Da Vinci Code',
    author: 'Dan Brown',
    year: 2003,
    genre: 'Mystery',
    rating: 3.8,
    description:
      'A gripping mystery thriller that follows Harvard symbologist Robert Langdon as he unravels the secrets of the Da Vinci Code.',
    image: './books-images/unknown.jpg'
  },
  {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    year: 1988,
    genre: 'Fiction',
    rating: 4.25,
    description:
      'A philosophical novel that tells the story of Santiago, a shepherd boy, on his quest to discover his personal legend.',
    image: './books-images/unknown.jpg'
  },
  {
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    year: 2008,
    genre: 'Science Fiction',
    rating: 4.3,
    description:
      "In a dystopian future, Katniss Everdeen becomes a symbol of rebellion when she volunteers to take her sister's place in the brutal Hunger Games.",
    image: './books-images/unknown.jpg'
  },
  {
    title: 'The Girl with the Dragon Tattoo',
    author: 'Stieg Larsson',
    year: 2005,
    genre: 'Mystery',
    rating: 4.1,
    description:
      'A gripping mystery novel featuring investigative journalist Mikael Blomkvist and the enigmatic hacker Lisbeth Salander.',
    image: './books-images/unknown.jpg'
  },
  {
    title: 'The Road',
    author: 'Cormac McCarthy',
    year: 2006,
    genre: 'Dystopian',
    rating: 4,
    description:
      "Set in a post-apocalyptic world, it follows a father and son's harrowing journey to survive and find safety.",
    image: './books-images/unknown.jpg'
  },
  {
    title: 'The Giver',
    author: 'Lois Lowry',
    year: 1993,
    genre: 'Dystopian',
    rating: 4.12,
    description:
      'A dystopian novel set in a seemingly perfect society where young Jonas discovers the dark truth beneath the surface.',
    image: './books-images/unknown.jpg'
  }
]

console.table(BOOKS)

const container = document.getElementById("container")
const filterDropdown = document.getElementById("dropdown")
const favouritesContainer = document.getElementById("favourites")
let favouriteBooks = [] // Array to store favorite books
const sortContainer = document.getElementById("sortContainer") 

// Function to render the sort menu and toggle visibility
const toggleSortMenu = () => {
  sortContainer.innerHTML = "" // Clean up the sort container
  
   // Add the button and the sort menu dynamically
  sortContainer.innerHTML += `
    <button class="sort-toggle" id="sortToggle">Sort &#x25BC</button>
    <div id="sortMenu" class="sort-menu hidden">
      <label>
        <input type="radio" name="sort" value="year-desc" onclick="sortBooksBy('year-desc')">
        Sort by Year: Descending
      </label>
      <label>
        <input type="radio" name="sort" value="year-asc" onclick="sortBooksBy('year-asc')">
        Sort by Year: Ascending
      </label>
      <label>
        <input type="radio" name="sort" value="rating-low-high" onclick="sortBooksBy('rating-low-high')">
        Sort by Rating: Low to High
      </label>
      <label>
        <input type="radio" name="sort" value="rating-high-low" onclick="sortBooksBy('rating-high-low')">
        Sort by Rating: High to Low
      </label>
    </div>`

  // Add click event listener to the sort button for toggling menu vsibility
  const sortToggleButton = document.getElementById("sortToggle")
  sortToggleButton.addEventListener("click", () => {
    const sortMenu = document.getElementById("sortMenu")
    if (sortMenu.classList.contains('hidden')) {
      sortMenu.classList.remove('hidden')
    } else {
      sortMenu.classList.add('hidden')
    }
  })
}

// Global sorting function
  const sortBooksBy = (value) => {
    let sortedBooks

    switch (value) {
      case 'year-desc':
        sortedBooks = BOOKS.slice().sort((a, b) => b.year - a.year)
        break
      
      case 'year-asc':
        sortedBooks = BOOKS.slice().sort((a, b) => a.year - b.year)
        break
      
      case 'rating-low-high':
        sortedBooks = BOOKS.slice().sort((a, b) => a.rating - b.rating)
        break
      
      case 'rating-high-low':
        sortedBooks = BOOKS.slice().sort((a, b) => b.rating - a.rating)
        break      
    }

    getBooks(sortedBooks) // Re-render the books
  }



// Function to display books
const getBooks = (bookArray) => {
  container.innerHTML = "" // Clean up the container
  bookArray.forEach(book => {
    const isFavourite = favouriteBooks.includes(book) // Check if the book is a favorite
    const buttonText = isFavourite
      ? "Remove from Favourites"
      : "Add to Favourites" // Change the text on the favo button
    
    container.innerHTML += `
      <div class="card">
        <img src=${book.image} alt=${book.title} />
        <h2>${book.title}</h2>
        <hr>
        <p><b>Author: </b>${book.author}</p>
        <p><b>Year: </b>${book.year}</p>
        <p><b>Genre: </b>${book.genre}</p>
        <p><b>Rating: </b>${book.rating}</p>
        <button onclick="toggleDescription('${book.title}')">Read More</button>
        <p id="desc-${book.title}" class="description" style="display: none;"><br>${book.description}</p>
        <button onclick="toggleFavourite('${book.title}')">${buttonText}</button>
      </div>`
  })
}

// Function to toggle Read More
const toggleDescription = (bookTitle) => {
  const descriptionElement = document.getElementById(`desc-${bookTitle}`)
  if (descriptionElement.style.display === "none") {
    descriptionElement.style.display = "block"
  } else {
    descriptionElement.style.display = "none"
  }
}

// Function to display favourite books
const displayFavourites = () => {
  favouritesContainer.innerHTML = "<h2>Favorite Books</h2>"
  favouriteBooks.forEach(book => {
    favouritesContainer.innerHTML += `<p> ${book.title}</p>`
  })
}

// Function to toggle favourite books (add/remove)
const toggleFavourite = (bookTitle) => {
  const book = BOOKS.find(book => book.title === bookTitle)
  const bookIndex = favouriteBooks.indexOf(book)

  if (bookIndex > -1) {
    favouriteBooks.splice(bookIndex,1) // If the book is already in the favorites, remove it
  } else {
    favouriteBooks.push(book) // Otherwise, add it to the favorites
  }

  getBooks(BOOKS) // Refresh the book list
  console.table(BOOKS)
  displayFavourites() // Update the favorite books list  
  console.table(favouriteBooks)
}

// Function to filter books based on genre
const filterBooks = () => {
  // get the value from the select
  const value = filterDropdown.value
  if (value === "all") {
    getBooks(BOOKS) //  Display all books
  } else {
    const filteredList = BOOKS.filter(book => book.genre === value) // Filter books by genre
    getBooks(filteredList)
  }
}

filterDropdown.addEventListener("change", filterBooks)

toggleSortMenu()

getBooks(BOOKS)