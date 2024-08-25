# Pokémon Search App

The Pokémon Search App allows users to search for Pokémon by name or ID and view detailed information about the selected Pokémon, including its stats, type, and sprite.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Code Snippets](#code-snippets)

## Features

- **Search Functionality**: Users can search for Pokémon by entering either the Pokémon's name or ID number.
- **Pokémon Details**: The app displays detailed information about the Pokémon, such as its name, ID, weight, height, base stats (HP, Attack, Defense, etc.), and types.
- **Pokémon Sprite**: A sprite image of the Pokémon is displayed alongside its details.

## Technologies Used

- **HTML**: For structuring the web page.
- **CSS**: For styling the web page, making it visually appealing and responsive.
- **JavaScript**: For handling user interactions and fetching data from the Pokémon API.

## Usage

1. Open the app in your web browser.
2. Enter the name or ID of the Pokémon you want to search for in the search bar.
3. Click the "Search" button to retrieve and display the Pokémon's information.

## File Structure

- `index.html`: The main HTML file containing the structure of the web page.
- `styles.css`: The CSS file for styling the web page.
- `script.js`: The JavaScript file that handles the app's logic, including fetching data from the Pokémon API.

## Code Snippets

### HTML

```html
<form class="form-block">
    <label for="search-input">Search for Pokémon Name or ID:</label>
    <div class="input-button">
        <input id="search-input" name="search-input" type="text">
        <button id="search-button" type="button">Search</button>
    </div>
</form>
```

### CSS

```css
#entire-page {
    background-color: rgb(29, 7, 29);
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
}

#search-button {
    width: 4rem;
    background-color: rgb(61, 9, 129);
    color: white;
    font-weight: 800;
}
```

### JavaScript

```javascript
document.getElementById('search-button').addEventListener('click', async () => {
    const searchInput = document.getElementById('search-input').value.trim();
    
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchInput.toLowerCase()}`);
        if (!response.ok) throw new Error('Pokémon not found');
        
        const pokemon = await response.json();
        document.getElementById('pokemon-name').textContent = pokemon.name.toUpperCase();
        // Other data population code...
    } catch (error) {
        alert(error.message);
    }
});
```
