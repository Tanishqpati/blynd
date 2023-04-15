import { useState } from "react";
import { Button, Input, VStack } from "@chakra-ui/react";

function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitting form:", { name, email, password });
    // TODO: handle form submission
  };

  const isFormValid = name && email && password;

  return (
    <form onSubmit={handleSubmit}>
      <VStack spacing={4}>
        <Input
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <Input
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button type="submit" disabled={!isFormValid}>
          Signup
        </Button>
      </VStack>
    </form>
  );
}

export default SignupForm;
