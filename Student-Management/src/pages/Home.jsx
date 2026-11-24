function Home() {
  return (
    <div>
      <h1>Welcome to StudentSphere 👋</h1>
      <p>Manage your student records easily.</p>

      <div className="cards">
        <div className="card">
          <h3>Total Students</h3>
          <h2>120</h2>
        </div>

        <div className="card">
          <h3>Male Students</h3>
          <h2>65</h2>
        </div>

        <div className="card">
          <h3>Female Students</h3>
          <h2>55</h2>
        </div>
      </div>
    </div>
  );
}

export default Home;