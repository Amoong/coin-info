import ToggleButton from "atoms/ToggleButton";

interface Props {
  isLightTheme: boolean;
  setIsLightTheme: (value: boolean) => void;
}

function ThemeButton(props: Props) {
  const toggleTheme = () => {
    props.setIsLightTheme(!props.isLightTheme);
  };

  return (
    <ToggleButton
      isChecked={props.isLightTheme}
      onClick={toggleTheme}
      value1={"🌞"}
      value2={"🌙"}
    />
  );
}

export default ThemeButton;
