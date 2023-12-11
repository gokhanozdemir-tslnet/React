import Card from "../Card/card.component";

const Home = () => {
  return (
    <div className="container">
      <div className="container px-4 text-center">
        <div className="row gx-5">
          <div className="col">
            <div className="p-3">
              <Card />
            </div>
          </div>
          <div className="col">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
