import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function VanDetails() {
  const params = useParams();
  const [van, setVan] = useState(null);

  
  useEffect(() => {
    async function fetchVanId() {
      try {
        const res = await fetch(`/api/vans/${params.id}`);
        const data = await res.json();
        localStorage.setItem('vanDetails', JSON.stringify(data.vans));
        setVan(JSON.parse(localStorage.getItem('vanDetails')));
        console.log('2 Data fetched and stored in local storage:', data);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    }
    fetchVanId();
  }, [params.id]);


/*
  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);
*/

  return (
    <div className="van-detail-container">
      {van ? (
        <div className="van-detail">
          <img src={van.imageUrl} />
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <h2>{van.name}</h2>
          <p className="van-price">
            <span>${van.price}</span>/day
          </p>
          <p>{van.description}</p>
          <button className="link-button">Rent this van</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}







/* original */
/*
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function VanDetails() {
  const params = useParams();
  const [van, setVan] = useState(null)

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);

  return (
    <div className="van-detail-container">
      {van ? (
        <div className="van-detail">
          <img src={van.imageUrl} />
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <h2>{van.name}</h2>
          <p className="van-price">
            <span>${van.price}</span>/day
          </p>
          <p>{van.description}</p>
          <button className="link-button">Rent this van</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
*/
