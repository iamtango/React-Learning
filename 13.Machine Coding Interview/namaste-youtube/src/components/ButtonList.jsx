import React from "react";
import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="flex">
      <Button name={"ALL"} />
      <Button name={"Martial Art"} />
      <Button name={"Music"} />
      <Button name={"UFC"} />
      <Button name={"MMA"} />
      <Button name={"Karate"} />
      <Button name={"Kick Boxing"} />
      <Button name={"Mixes"} />
      <Button name={"Podcasts"} />
      <Button name={"Comedy Club"} />
      <Button name={"Boxing"} />
    </div>
  );
};

export default ButtonList;
