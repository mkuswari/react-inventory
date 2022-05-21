import React, { Component } from "react";
import { Navbar, Sidebar, Footer, CardStatistic } from "./components";

export default class App extends Component {
  render() {
    return (
      <div id="app">
        <div className="main-wrapper main-wrapper-1">
          <Navbar />
          <Sidebar />
          {/* Main Content */}
          <div className="main-content">
            <section className="section">
              <div className="section-header">
                <h1>Dashboard</h1>
              </div>
              <div className="row">
                <CardStatistic
                  icon="far fa-user"
                  bgColor="bg-primary"
                  label="Total User"
                  value={10}
                />
                <CardStatistic
                  icon="far fa-newspaper"
                  bgColor="bg-danger"
                  label="Total Post"
                  value={25}
                />
                <CardStatistic
                  icon="far fa-file"
                  bgColor="bg-warning"
                  label="Total Pages"
                  value={100}
                />
                <CardStatistic
                  icon="far fa-circle"
                  bgColor="bg-success"
                  label="Online Users"
                  value={25}
                />
              </div>
            </section>
          </div>
        </div>
        <Footer year={2022} label="Muhammad Kuswari" />
      </div>
    );
  }
}
