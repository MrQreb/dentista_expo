
import React from "react";
import LoginScreen from "@/screens/LoginScreen";
import { VStack } from "@/components/ui/vstack";

export default function Login() {
  return (
    <VStack className="w-screen h-screen">
       <LoginScreen></LoginScreen>
    </VStack>
  );
}