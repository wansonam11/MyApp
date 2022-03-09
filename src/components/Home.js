import React from "react";
import "../scss/style.css";

function Home() {
  return (
    <div>
      <main className="morning">
        <header>
          <h1> My Application</h1>
          <ul id="gnb"></ul>
        </header>
        <article>
          <p>
            <strong>Time Permits。</strong>
          </p>
          <em>今日も頑張りましょう！</em>
        </article>
        <figure>
          <div className="screen">
            <em className="am">AM</em>
            <em className="pm">AM</em>
            <span>00</span> : <span>00</span> : <span>00</span>
          </div>
        </figure>
        <nav>
          <span className="on">Morning</span>
          <span>Afternoon</span>
          <span>Evening</span>
          <span>Night</span>
        </nav>
      </main>
    </div>
  );
}

export default Home;
