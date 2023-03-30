import React, { useState } from "react";
import Header from "../components/header/header12";
import Books from "../components/Books/Books";

function Dashboard() {
  const [search, setSearch] = useState("");
  return (
    <div className="dashboard">
      <Header search={search} setSearch={setSearch} />
      <Books search={search} />
    </div>
  );
}

export default Dashboard;
