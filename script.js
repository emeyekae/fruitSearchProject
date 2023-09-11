const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = [ 'Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	const searchTerm = str.toLowerCase();
    const results = fruit.filter(fruitName =>
		fruitName.toLowerCase().includes(( searchTerm.trim()))
	);
return results;
}

function searchHandler(e) {
	let typedText = e.target.value;
    if (typedText === ""){typedText ='""'}				  
	const results = search(typedText);
	showSuggestions(results);
}

function showSuggestions(results) {
    suggestions.innerHTML = '';
		results.forEach((result) => {
		const item = document.createElement('li');
		item.textContent = result;
		suggestions.appendChild(item);
	});
}

function useSuggestion(e) {
  const clickedElementText = e.target.innerHTML;
  console.log(clickedElementText )
  const element =  document.getElementById("fruit") 
  element.value = clickedElementText;
  suggestions.innerHTML = '';								
}

function highlightHoverSuggestion(e){
	const hoveredElement = e.target;
 };

function unHighlightHoverSuggestion(e){
	const hoveredElement = e.target;
	hoveredElement.style.backgroundColor = "";
	hoveredElement.style.border = "";
   };


input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
suggestions.addEventListener('mouseover', highlightHoverSuggestion) 
suggestions.addEventListener("mouseout", unHighlightHoverSuggestion)
																	

																	





