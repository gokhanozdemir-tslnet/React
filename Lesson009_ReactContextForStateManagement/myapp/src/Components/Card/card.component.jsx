import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";

 

const Card = () => {
    const { currentUser } = useContext(UserContext);
    console.log(currentUser);
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      <div className="card">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
                  <h5 className="card-title">{ currentUser?.email??"sdf"}</h5>
          <p className="card-text">
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
