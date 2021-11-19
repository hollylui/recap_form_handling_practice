import { useState } from "react";
import Form from "./Form";

export default function Landing() {
  // state -------------------------------
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [redBorder, setRedBorder] = useState(false);
  const [birthday, setBirthday] = useState("");
  const [imageFile, setImageFile] = useState("");
  const [password, setPassword] = useState("");
  const [selectPet, setSelectPet] = useState("");
  const [luckyNumber, setLuckyNumber] = useState("");
  const [message, setMessage] = useState("");
  const [gender, setGender] = useState("");

  // callback ----------------------------
  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const onChangeEmail = (e) => {
    setRedBorder(e.target.value.includes("@") ? false : true);
    setEmail(e.target.value);
  };

  const onChangeBirthday = (e) => {
    setBirthday(e.target.value);
  };

  const onChangeImageFile = (e) => {
    setImageFile(e.target.files[0]);
  };

  // new inputs ----------------------

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangeSelectPet = (e) => {
    setSelectPet(e.target.value);
  };

  const onChangeLuckyNumber = (e) => {
    setLuckyNumber(e.target.value);
  };

  const onChangeMessage = (e) => {
    setMessage(e.target.value);
  };

  const onChangeGender = (e) => {
    setGender(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(
      username,
      email,
      birthday,
      password,
      selectPet,
      luckyNumber,
      message,
      gender
    );
    setUsername("");
    setRedBorder(false);
    setEmail("");
    setBirthday("");
    setImageFile("");
    setPassword("");
    setSelectPet("");
    setLuckyNumber("");
    setMessage("");
    setGender("");
  };

  // props ----------------------------------------
  const props = {
    username,
    onChangeUsername,
    email,
    onChangeEmail,
    redBorder,
    birthday,
    onChangeBirthday,
    imageFile,
    onChangeImageFile,
    formSubmitHandler,
    password,
    onChangePassword,
    selectPet,
    onChangeSelectPet,
    luckyNumber,
    onChangeLuckyNumber,
    message,
    onChangeMessage,
    gender,
    onChangeGender,
  };

  return (
    <div>
      <h1>Landing Page</h1>
      <Form {...props} />
    </div>
  );
}
