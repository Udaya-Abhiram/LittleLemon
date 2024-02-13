let listContainer = document.getElementById('list-container');

function displayList() {
    let listContainer = document.getElementById('list-container');
    
    if (listContainer.style.display === 'none') {
        listContainer.style.display = 'block';
        document.getElementById('list').innerHTML = '';
        // Add list items dynamically
        let items = [
            { name: 'Home', url: 'index.html' },
            { name: 'Menu', url: 'menu.html' },
            { name: 'About', url: 'about.html' },
            { name: 'Register', url: 'register.html' }
        ];
        items.forEach(function(item) {
            let li = document.createElement('li');
            li.textContent = item.name;
            li.addEventListener('click', function() {
                // Redirect to the corresponding page when the list item is clicked
                window.location.href = item.url;
            });
            document.getElementById('list').appendChild(li);
        });
    } else {
        listContainer.style.display = 'none';
    }
    
}

window.addEventListener('resize', function() {
    if(window.innerWidth>560){
        listContainer.style.display = 'none';
    }
});