import { useEffect, useState } from "react";
import { url } from "../Constants";

export default function Details({ info }) {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch(`${url}${info.id}.json`)
      .then((res) => res.json())
      .then((json) => setDetails(json));
  }, [info.id]);

  return (
    <div className="card">
      <img src={details.avatar} className="card-img-top" alt={details.name} />
      <div className="card-body">
        <h5 className="card-title">{details.name}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">City: {details.details.city}</li>
        <li className="list-group-item">Company: {details.details.company}</li>
        <li className="list-group-item">
          Position: {details.details.position}
        </li>
      </ul>
    </div>
  );
}
