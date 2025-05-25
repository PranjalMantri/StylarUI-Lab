import useComponentStore from "../../store/componentStore";
import ButtonPreview from "../Button/Button-Preview/ButtonPreview";

function ComponentPreview() {
  const { currentComponent } = useComponentStore();

  switch (currentComponent.id) {
    case "button":
      return <ButtonPreview />;
  }
}

export default ComponentPreview;
