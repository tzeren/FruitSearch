const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

// Search for the fruits that comtain the input letters (convert input and fruit names to lower case before search)
function search(str) {

	let lowerStr = str.toLowerCase();
	let results = fruit.filter(a => (a.toLowerCase().search(lowerStr) >= 0) ? true : false);
	return results;
}

// when a new letter is entered search for the fruits that contain and show on the screen
function searchHandler(e) {
// if no letter is entered, make sure no fruit is displayed, remove any previous fruits that were shown	
	if (input.value === '') {
		removeLis();
		return;
	}
	let results = search(input.value);
	showSuggestions(results, input.value);
}

// Add the fruit names that contains the letters to the unordered list to display on the screen
function showSuggestions(results, inputVal) {
	removeLis();
	if (results.length > 0){
		suggestions.style.border = 'black solid 1px';
		results.forEach(function(a) {
		let newLi = document.createElement('li');
		newLi.innerText = a;
		suggestions.appendChild(newLi);	
		})
	} 
}

// Remove previously added list items from the unordered list before adding the new fruit list
function removeLis(){
	let liElements = document.querySelectorAll('.suggestions ul li');
	for (let liElement of liElements){
		liElement.remove();
		suggestions.style.border = 'none';
	}
}

// When user select one of the fruits in the list, use that selection and update the input field
function useSuggestion(e) {
	input.value = e.target.innerText;
	removeLis();
}

// Event listener for new letters entered to the input field
input.addEventListener('keyup', searchHandler);

// Event listener for selection of a fruit from the list
suggestions.addEventListener('click', useSuggestion);