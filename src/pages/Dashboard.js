import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [donations, setDonations] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState({ method: "", sort: "" });

  const TARGET_AMOUNT = 35000000; // Fixed fundraising goal

  useEffect(() => {
    fetchDonations();
  }, []);

  const fetchDonations = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/donations");
      setDonations(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Apply filters/search to get current view
  let filtered = donations
    .filter((d) =>
      d.jina.toLowerCase().includes(search.toLowerCase()) ||
      d.mawasiliano.toLowerCase().includes(search.toLowerCase())
    )
    .filter((d) => (filter.method ? d.method === filter.method : true));

  if (filter.sort === "asc") {
    filtered = [...filtered].sort((a, b) => parseFloat(a.kiasi) - parseFloat(b.kiasi));
  } else if (filter.sort === "desc") {
    filtered = [...filtered].sort((a, b) => parseFloat(b.kiasi) - parseFloat(a.kiasi));
  }

  // Calculations
  const totalContributedAll = donations.reduce((sum, d) => sum + parseFloat(d.kiasi), 0); // Full data
  const totalContributedFiltered = filtered.reduce((sum, d) => sum + parseFloat(d.kiasi), 0); // Filtered
  const totalContributorsFiltered = filtered.length;
  const remainingAmount = Math.max(TARGET_AMOUNT - totalContributedAll, 0); // Unfiltered

  return (
    <div className="container mt-4">
      <h3 className="mb-4">Dashibodi ya Michango</h3>

      {/* Summary Cards */}
      <div className="row mb-4">
        <div className="col-md-3">
          <div className="card text-white bg-primary mb-3">
            <div className="card-body">
              <h5 className="card-title">Pesa Inayohitajika</h5>
              <p className="card-text">{TARGET_AMOUNT.toLocaleString()} TZS</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-white bg-success mb-3">
            <div className="card-body">
              <h5 className="card-title">Pesa Iliyopatikana</h5>
              <p className="card-text">{totalContributedFiltered.toLocaleString()} TZS</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-white bg-info mb-3">
            <div className="card-body">
              <h5 className="card-title">Jumla ya Wachangiaji</h5>
              <p className="card-text">{totalContributorsFiltered}</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-white bg-danger mb-3">
            <div className="card-body">
              <h5 className="card-title">Pesa Iliyobaki</h5>
              <p className="card-text">{remainingAmount.toLocaleString()} TZS</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="row mb-3">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Tafuta jina au mawasiliano..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <select
            className="form-select"
            value={filter.method}
            onChange={(e) => setFilter({ ...filter, method: e.target.value })}
          >
            <option value="">Njia ya Malipo</option>
            <option value="Cash">Cash</option>
            <option value="Mpesa">Mpesa</option>
          </select>
        </div>
        <div className="col-md-3">
          <select
            className="form-select"
            value={filter.sort}
            onChange={(e) => setFilter({ ...filter, sort: e.target.value })}
          >
            <option value="">Panga kwa Kiasi</option>
            <option value="asc">Kiasi (Ndogo - Kubwa)</option>
            <option value="desc">Kiasi (Kubwa - Ndogo)</option>
          </select>
        </div>
        <div className="col-md-2">
          <button
            className="btn btn-outline-secondary w-100"
            onClick={() => setFilter({ method: "", sort: "" })}
          >
            Weka Upya
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Jina</th>
              <th>Kiasi (TZS)</th>
              <th>Mawasiliano</th>
              <th>Njia</th>
              <th>Muda</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((d, i) => (
              <tr key={d.id}>
                <td>{i + 1}</td>
                <td>{d.jina}</td>
                <td>{parseFloat(d.kiasi).toLocaleString()}</td>
                <td>{d.mawasiliano}</td>
                <td>{d.method}</td>
                <td>{new Date(d.created_at).toLocaleString("sw-TZ")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
