import "./home.style.scss";
import { MyButton, MyDiv, MySecondButton } from "./home.styles";

const BUTTON_TYPE_CLASSES = {
  firstButton: "base",
  secondButton: "second",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.firstButton) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: MyButton,
    [BUTTON_TYPE_CLASSES.secondButton]: MySecondButton,
  }[buttonType]);

const Home = () => {
  const CustomButton = getButton(BUTTON_TYPE_CLASSES.secondButton);

  return (
    <div>
      Home Page
      <div className="main">classic div</div>
      <MyDiv>styled div content</MyDiv>
      <MyDiv as="span">styled div change to span</MyDiv>
      <MyButton>My Button</MyButton>
      <MySecondButton>Test</MySecondButton>
      <CustomButton>TEST</CustomButton>
    </div>
  );
};

export default Home;
