import "./Button.css";
import { useState, useEffect } from "react";
import IconLoading from "./IconLoading";

export default function Button(props) {
  let [isLoading, setIsLoading] = useState(false);
  let [size, setSize] = useState("medium"); //small // medium // large
  let [primaryColor, setPrimaryColor] = useState("#5a67d8");
  let [URL, setURL] = useState("");
  let [isDisabled, setIsDisabled] = useState(false);

  document.documentElement.style.setProperty(
    "--background-color",
    primaryColor
  );

  if (isDisabled) {
    let btnClassList = document.getElementsByClassName("btn")[0].classList;
    btnClassList.remove("btn-hover", "btn-active");
    btnClassList.add("btn-disabled");
  }

  function handleOnButtonClick() {
    if (!!URL) {
      window.open(URL);
    }
  }

  useEffect(() => {
    setIsLoading(props.isLoading);
  }, [props.isLoading]);

  useEffect(() => {
    setPrimaryColor(props.primaryColor);
  }, [props.primaryColor]);

  useEffect(() => {
    setURL(props.href);
  }, [props.href]);

  useEffect(() => {
    setIsDisabled(props.disabled);
  }, [props.disabled]);

  useEffect(() => {
    setSize(props.size);
  }, [props.size]);

  return (
    <button
      type="button"
      className={`btn btn-hover btn-active btn-size-${size}`}
      onClick={handleOnButtonClick}
      disabled={isDisabled}
    >
      <span className="is-loading">{isLoading ? <IconLoading /> : null}</span>
      <span className="btn-content">{props.children}</span>
    </button>
  );
}
