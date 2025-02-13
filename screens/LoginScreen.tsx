import React from "react";
import { Button, ButtonText } from "@/components/ui/button";
import { FormControl, FormControlError, FormControlErrorText, FormControlErrorIcon, FormControlLabel, FormControlLabelText } from "@/components/ui/form-control";
import { Input, InputField } from "@/components/ui/input";
import { VStack } from "@/components/ui/vstack";
import { Text } from "@/components/ui/text";
import { AlertCircleIcon } from "@/components/ui/icon";
import { Formik, FormikValues } from "formik";
import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Debe ser un email válido").required("El email es obligatorio"),
  password: Yup.string().min(6, "Debe contener al menos 6 caracteres").required("La contraseña es obligatoria"),
});

export default function LoginScreen() {
  const handleSubmit = (values:FormikValues ) => {
    console.log("Formulario válido:", values);
  };

  return (

    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={loginSchema}
      onSubmit={handleSubmit}
    >
      {({ handleChange, handleSubmit, values, errors, touched }) => (

        <VStack className="flex w-screen h-screen justify-center items-center bg-red-300">

          <Text className=" pl-[-20px] text-base text-white font-bold">Inicia Sesión con tu cuenta</Text>
          <Text className=" pl-[-20px] text-sm text-white font-bold">No tienes centa?, Crea una</Text>
          
          <VStack className="max-h-[550px] max-w-[500px] flex flex-col justify-center items-center rounded-xl border border-background-200 p-4 mt-4">
            
            <FormControl isInvalid={touched.email && !!errors.email}>
              <FormControlLabel>
                <FormControlLabelText className="text-white">Email</FormControlLabelText>
              </FormControlLabel>
              <Input className="my-1" size="lg">
                <InputField
                  type="text"
                  placeholder="email"
                  value={values.email}
                  onChangeText={handleChange('email')}
                />
              </Input>
              {touched.email && errors.email && (
                <FormControlError>
                  <FormControlErrorIcon as={AlertCircleIcon} />
                  <FormControlErrorText>{errors.email}</FormControlErrorText>
                </FormControlError>
              )}
            </FormControl>

            <FormControl isInvalid={touched.password && !!errors.password}>
              <FormControlLabel>
                <FormControlLabelText className="text-white">Password</FormControlLabelText>
              </FormControlLabel>
              <Input className="my-1" size="lg">
                <InputField
                  type="password"
                  placeholder="password"
                  value={values.password}
                  onChangeText={handleChange('password')}
                />
              </Input>
              {touched.password && errors.password && (
                <FormControlError>
                  <FormControlErrorIcon as={AlertCircleIcon} />
                  <FormControlErrorText>{errors.password}</FormControlErrorText>
                </FormControlError>
              )}
            </FormControl>

            <Button className="w-fit self-end mt-4" size="sm" onPress={() => handleSubmit()}>
              <ButtonText className="text-white">Iniciar Sesion</ButtonText>
            </Button>
          </VStack>
        </VStack>

      )}
    </Formik>
  );
}
