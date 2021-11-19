const Form = ({
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
}) => {
  return (
    <form action="" className="formContainer" onSubmit={formSubmitHandler}>
      {/* username --------------------- */}
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        onChange={onChangeUsername}
        value={username}
      />

      {/* email ----------------------- */}
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        onChange={onChangeEmail}
        value={email}
        // style={redBorder ? { border: "solid 5x blue" } : null}
        style={{ border: redBorder && "solid 5px red" }}
      />

      {/* Birthday --------------------- */}
      <label htmlFor="date">Birthday</label>
      <input
        type="date"
        id="date"
        value={birthday}
        onChange={onChangeBirthday}
      />

      {/* passsord ----------------------*/}
      <label htmlFor="passord">Password</label>
      <input type="password" value={password} onChange={onChangePassword} />

      {/* Select input: pet ------------- */}
      <label htmlFor="pets"></label>
      <select
        name="pets"
        id="pets"
        value={selectPet}
        onChange={onChangeSelectPet}
      >
        <option value="">-- Please choose one pet --</option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
        <option value="fish">Fish</option>
        <option value="horse">Horse</option>
      </select>

      {/* Number ---------------------- */}
      <label htmlFor="number">Lucy Number</label>
      <input type="number" value={luckyNumber} onChange={onChangeLuckyNumber} />

      {/* textarea: message ----------- */}
      <label htmlFor="message">Message</label>
      <textarea
        name="message"
        id="message"
        cols="50"
        rows="10"
        placeholder="Please wirte us..."
        value={message}
        onChange={onChangeMessage}
        style={{ width: "100%", marginBottom: 15 }}
      ></textarea>

      {/* checkbox: gender ------------ */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <input
          type="checkbox"
          id="male"
          name="gender"
          value="male"
          onChange={onChangeGender}
          checked={gender === "male" ? true : false}
        />
        <label htmlFor="gender" style={{ marginRight: 10 }}>
          Male
        </label>

        <input
          type="checkbox"
          id="female"
          name="gender"
          value="female"
          onChange={onChangeGender}
          checked={gender === "female" ? true : false}
        />
        <label htmlFor="gender" style={{ marginRight: 10 }}>
          Female
        </label>

        <input
          type="checkbox"
          id="diverse"
          name="gender"
          value="diverse"
          onChange={onChangeGender}
          checked={gender === "diverse" ? true : false}
        />
        <label htmlFor="gender">Diverse</label>
      </div>

      {/* upload file ------------------- */}
      <label htmlFor="file">Image File</label>
      <input
        type="file"
        id="file"
        accept="image/png, image/jpg"
        imageFile={imageFile}
        onChange={onChangeImageFile}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
