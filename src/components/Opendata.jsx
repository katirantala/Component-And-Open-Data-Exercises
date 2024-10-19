import { useState } from 'react'
import './Opendata.css';

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
         <h1>Hauvaenergiaa!</h1><br/>
          <h3>Painamalla nappia näet päivän kuvan.</h3>
         <button className='button' onClick={fetchDogImage}>Klikkaa</button>
         <div className='image'>
            {imageUrl && <img src={imageUrl} alt="Random Dog"/>}
         </div>
      </div>
   );
}

export default DogImage;