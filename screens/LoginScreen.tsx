import { Button, ButtonText } from "@/components/ui/button";
import { FormControl, FormControlError, FormControlErrorText, FormControlErrorIcon, FormControlLabel, FormControlLabelText, FormControlHelper, FormControlHelperText } from "@/components/ui/form-control";
import { Input, InputField } from "@/components/ui/input";
import { VStack } from "@/components/ui/vstack";
import { Text } from "@/components/ui/text"

import { AlertCircleIcon } from "@/components/ui/icon";
import React from "react";

export default function LoginScreen() {
  const [isInvalid, setIsInvalid] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('12345');

  const handleSubmit = () => {

    if (inputValue.length < 6) {
      setIsInvalid(true);
    } else {
      setIsInvalid(false);
    }
  };

  return (
    <VStack className="flex h-screen justify-center items-center">
      <VStack className="max-h-[550px] max-w-[350px] flex flex-col justify-center items-center rounded-xl border border-background-200 p-4">
        <FormControl  isInvalid={isInvalid} size="md" isDisabled={false} isReadOnly={false} isRequired={false} >
        <Text size="xl" className="text-white font-bold mb-6">Login</Text>
          <FormControlLabel>
            <FormControlLabelText>Email</FormControlLabelText>
          </FormControlLabel>
          <Input className="my-1" size={'lg'}>
            <InputField
              type="text"
              placeholder="email"
              value={inputValue}
              onChangeText={(text) => setInputValue(text)}
            />
          </Input>
          <FormControlError>
            <FormControlErrorIcon as={AlertCircleIcon} />
            <FormControlErrorText>
              Atleast 6 characters are required.
            </FormControlErrorText>
          </FormControlError>
        </FormControl>

        <FormControl isInvalid={isInvalid} size="md" isDisabled={false} isReadOnly={false} isRequired={false} >
          <FormControlLabel>
            <FormControlLabelText>Password</FormControlLabelText>
          </FormControlLabel>
          <Input className="my-1" size={'lg'}>
            <InputField
              type="password"
              placeholder="password"
              value={inputValue}
              onChangeText={(text) => setInputValue(text)}
            />
          </Input>
          <FormControlError>
            <FormControlErrorIcon as={AlertCircleIcon} />
            <FormControlErrorText>
              Atleast 6 characters are required.
            </FormControlErrorText>
          </FormControlError>
        </FormControl>


        <Button className="w-fit self-end mt-4" size="sm" onPress={handleSubmit}>
          <ButtonText>Iniciar Sesion</ButtonText>
        </Button>
      </VStack>
    </VStack>
  );
};