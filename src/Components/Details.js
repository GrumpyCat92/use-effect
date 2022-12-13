import { useEffect, useState } from "react";
import { url } from "../Constants";

export default function Details({ info }) {
  const [details, setDetails] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
    fetch(`${url}${info.id}.json`)
      .then((res) => res.json())
      .then((json) => {
        setDetails(json);
        setLoaded(true);
      });
  }, [info.id]);

  return (
    <div>
      {loaded ? (
        <div className="card">
          <img
            src={details.avatar}
            className="card-img-top"
            alt={details.name}
          />
          <div className="card-body">
            <h5 className="card-title">{details.name}</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">City: {details.details?.city}</li>
            <li className="list-group-item">
              Company: {details.details?.company}
            </li>
            <li className="list-group-item">
              Position: {details.details?.position}
            </li>
          </ul>
        </div>
      ) : (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
    </div>
  );
}
