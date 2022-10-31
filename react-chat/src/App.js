import { useState } from "react";

function App() {
  const [username, setUsername] = useState("username");
  return (
    <div className="container">
      <div class="d-flex flex-column align-items-stretch flex-shrink-0 bg-white">
        <div class="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom">
          <input
            class="fs-5 fw-semibold"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div class="list-group list-group-flush border-bottom scrollarea">
          <div class="list-group-item list-group-item-action py-3 lh-sm">
            <div class="d-flex w-100 align-items-center justify-content-between">
              <strong class="mb-1">List group item heading</strong>
              <small class="text-muted">Tues</small>
            </div>
            <div class="col-10 mb-1 small">
              Some placeholder content in a paragraph below the heading and
              date.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
