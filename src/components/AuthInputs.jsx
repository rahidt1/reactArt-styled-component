import { useState } from "react";
import {
  Action,
  AuthInputStyled,
  Button,
  ButtonText,
  Control,
  Input,
  Label,
} from "./styles/AuthInput.styles";

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes("@");
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <AuthInputStyled>
      <Control>
        <p>
          {/* Using $ sign because 'invalid' is a built in prop. Prefixing with $ makes the warning go away */}
          <Label $invalid={emailNotValid}>Email</Label>
          <Input
            $invalid={emailNotValid}
            type="email"
            onChange={(event) => handleInputChange("email", event.target.value)}
          />
        </p>
        <p>
          <Label $invalid={passwordNotValid}>Password</Label>
          <Input
            type="password"
            $invalid={passwordNotValid}
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
          />
        </p>
      </Control>
      <Action className="actions">
        <ButtonText type="button" className="text-button">
          Create a new account
        </ButtonText>
        <Button className="button" onClick={handleLogin}>
          Sign In
        </Button>
      </Action>
    </AuthInputStyled>
  );
}
