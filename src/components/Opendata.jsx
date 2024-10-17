import { useState } from 'react'

function DogImage() {
   const [imageUrl, setImageUrl] = useState('');

   const fetchDogImage = async () => {
      try {
         const response = await fetch('https://dog.ceo/api/breeds/image/random');
         const data = await response.json();
         setImageUrl(data.message);
      } catch (error) {
         console.error('Kuvan lataaminen epäonnistui:', error);
      }
   };

   return (
      <div>
         <h1>Hauvaenergiaa! <br/></h1>
          <h3>Painamalla nappia näet päivän kuvan.</h3>
         <button onClick={fetchDogImage}>Klikkaa</button>
         <div style={{ marginTop: '20px' }}>
            {imageUrl && <img src={imageUrl} alt="Random Dog"/>}
         </div>
      </div>
   );
}

export default DogImage;