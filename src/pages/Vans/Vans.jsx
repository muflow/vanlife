import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

export default function Vans() {
  const [vansData, setVansData] = useState([]);

  useEffect(() => {
    async function fetchVansData() {
      try {
        const res = await fetch('/api/vans');
        const data = await res.json();
        localStorage.setItem('vanList', JSON.stringify(data.vans));
        setVansData(JSON.parse(localStorage.getItem('vanList')));
        console.log('Data fetched and stored in local storage:', data);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    }
    fetchVansData();
  }, []);

  /*
   useEffect(() => {
    fetch('/api/vans')
      .then((rest) => rest.json())
      .then((data) => setVansData(data.vans));
  }, []); 
*/

  const vanElements = vansData.map((van) => (
    <div key={van.id} className="van-tile">
      <Link to={`/vans/${van.id}`}>
        <img src={van.imageUrl} />
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>
            ${van.price}
            <span>/day</span>
          </p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </Link>
    </div>
  ));

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list">{vanElements}</div>
    </div>
  );
}

 Vans.propTypes = {
   vansData: PropTypes.node,
 };
