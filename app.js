document.querySelectorAll('.emotion').forEach(img => {
    img.addEventListener('click', async () => {
        const emotion = img.getAttribute('data-emotion');
        document.querySelector('#emotion-selected').textContent = emotion;
        console.log("🚀 ~ img.addEventListener ~ emotion:", emotion)

        try {

            // TODO: COMPLETAR: Necesitamos hacer un fetch al endpoint correcto, procesar los datos y asignar el libro recuperado a la variable 'book'
            // async function recommendBook (){}


                
            
            
            const response  = await fetch(`https://emotional-shelf.onrender.com/api/books/recommendations/${emotion}/random` );
            console.log("🚀 ~ img.addEventListener ~ response:", response)

            const data = await response.json()
            console.log("🚀 ~ img.addEventListener ~ data:", data);
            console.log('mensaje', data.message);
            
            console.log("titulo", data.results[0].title);
            

                        
            const book = {
                title: data.results[0].title,
                isbn: data.results[0].isbn,
                price: data.results[0].price,
                description: data.results[0].description,
                imageURL: data.results[0].imageURL
            }; // TODO: Aquí deberíamos tener un objeto con información del libro de la REST API

            // NO MODIFICAR A PARTIR DE AQUÍ
            document.querySelector('#book-title').textContent = book.title;
            document.querySelector('#book-isbn').textContent = book.isbn;
            document.querySelector('#book-price').textContent = book.price;
            document.querySelector('#book-description').textContent = book.description;
            document.querySelector('#book-image').src = book.imageURL;

            document.querySelector('#book-container').style.display = 'block';

        } catch (error) {
            console.error('Error fetching book:', error.message);
            alert('An error ocurred. Use the developers tools!');
        }
    });
});
