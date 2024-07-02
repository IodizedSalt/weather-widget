import React from 'react';
import { useRouter } from 'next/router';

const WeatherForm = ({ selectedCity, onSubmit }) => {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCity = e.target.city.value;
    onSubmit(newCity);
    router.push(`/?city=${newCity}`, undefined, { shallow: true });
  };

  return (
    <form className="form-inline" onSubmit={handleSubmit}>
      <div className="form-group">
        <input type="text" className="form-control" id="city" placeholder="City" defaultValue={selectedCity} />
      </div>
      <button type="submit" className="btn btn-default">Search</button>
    </form>
  );
};

export default WeatherForm;
