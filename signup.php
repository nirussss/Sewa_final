<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Signup</title>
  <link rel="stylesheet" href="style.css">
  <script type="text/javascript" src="validation.js" defer></script>
  <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
</head>
<body>
  <div class="wrapper">
    <h1>Signup</h1>
    <p id="error-message"></p>
    <form id="form">
      <div>
        <label for="firstname-input">
          <box-icon name='user' type='solid' ></box-icon>
        </label>
        <input type="text" name="name" id="firstname-input" placeholder="Name">
      </div>
      <div>
        <label for="email-input">
          <span>@</span>
        </label>
        <input type="email" name="email" id="email-input" placeholder="Email">
      </div>
      <div>
        <label for="password-input">
          <box-icon type='solid' name='lock'></box-icon>
        </label>
        <input type="password" name="password" id="password-input" placeholder="Password">
      </div>
      <div>
        <label for="confirm-password-input">
          <box-icon type='solid' name='lock'></box-icon>
        </label>
        <input type="password" name="confirm-password" id="confirm-password-input" placeholder="Confirm Password">
      </div>
      <button type="submit">Signup</button>
    </form>
    <p>Already have an Account? <a href="login.html">login</a> </p>
  </div>
</body>
</html>