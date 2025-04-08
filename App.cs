body {
  font-family: Ariel, sans -serif;
  margin: 0;
  padding: 0;
    background-color: #f5f5f5;
}
.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}
header {
  background-color: #4CAF50;
  padding: 20px 0;
  margin-bottom: 20px;
}
.nav-container {
  display: flex;
  justify-content: cemter; 
  align-items: center;
  flex-wrap: wrap;
}
.nav-link { 
  color: white;
  text-decoration: none;
  padding: 10px 20px;
  margin: 5px;
  background-color: #388E3C;
  border-radius: 5px;
  transition: background-color 0.3s;
}
.nav-link:hover {
  background-color: #2E7D32;
}
.active {
  background-color: #2E7D32;
  font-weight: bold;
}
.page-title {
  color: #2E7D32;
  text-align: center;
  margin-bottom: 20px;
}
.home-container {
  text-align: center;
}
.home-container img {
  max-width: 100%;
  height: auto;
  margin: 20px 0;
  border-radius: 10px;
}
.welcome-message {
  background-color: ##E8F5E9;
  padding: 20x;
  border-radius: 10px;
  margin-borrom: 20px;
  .dino-list {
    display: grid;
    grid=template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
  }
  .dino-card {
    background-color: white;
    border-radius: 10px;
    padding: 15px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
  }
  .dino-card:hover {
    transform: translateY(-5px); 
