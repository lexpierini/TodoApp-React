import React from "react";

export default (props) => (
  <nav className="navbar navbar-inverse bg-inverse">
    <div className="container">
      <div className="navbar-header">
        <a href="#" className="navbar-brand">
          <i className="fa fa-calendar-check-o"></i> TodoApp
        </a>
      </div>

      <div id="navbar" className="navbar-collapse collapse">
        <ul className="nav navbar-nav">
          <li>
            <a href="#/todos">Tâches</a>
          </li>
          <li>
            <a href="#/about">À propos</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);
