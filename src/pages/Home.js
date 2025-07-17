import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-center">
      <h1 className="mb-4">Karibu Nguvu ya Mtaa</h1>
      <p className="lead">
        Tumeamua kuchukua hatua kama jamii ya Nyasaka B kwa kuchangia maendeleo ya barabara. Kila mchango ni hatua ya kweli.
      </p>
      <Link to="/donate" className="btn btn-success mt-3">
        Changia Sasa
      </Link>
    </div>
  );
};

export default Home;
