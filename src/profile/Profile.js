import React from "react";
import PropTypes from "prop-types";
import HermineGrangerImage from "/Users/carole/Dropbox/Gomycode/React/Props/Checkpoint/mythirdapp/src/assets/HermineGranger.jpeg";

function Profile(props) {
  const { fullName, bio, profession, children, handleName } = props;

  const handleClick = () => {
    alert(`Profile user's name: ${fullName}`);
  };

  return (
    <div style={{ width: "400px", marginLeft: "40%" }}>
      <h2>{fullName}</h2>
      <p>Bio: {bio}</p>
      <p>Profession: {profession}</p>
      <img
        src={HermineGrangerImage}
        alt="Hermine Granger"
        style={{ width: "400px" }}
      />
      <div style={{ marginTop: "10px" }}>
        <button onClick={handleClick}>Show Name</button>
      </div>
    </div>
  );
}

Profile.defaultProps = {
  fullName: "Hermine Jean Granger",
  bio: "Hermine Jean Granger is the best friend of Harry and Ron. During their adventures together, she can often contribute important knowledge and skills. Her wand is made of the wood of a vine and the core is the heart fiber of a dragon.",
  profession: "Wizard student at Hogwarts.",
};

Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  handleName: PropTypes.func.isRequired,
};

export default Profile;
