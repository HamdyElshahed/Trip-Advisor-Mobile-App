import * as React from "react";
import { FlatList } from "native-base";
import { useContext, useEffect, useState } from "react";
import { View } from "react-native";

// import {
//   Container,
//   Header,
//   Content,
//   CardItem,
//   Card,
//   Text,
//   Body,
//   ScrollView,
//   Center,
// } from "native-base";
import { TextInput } from "react-native";
import Carousel from "react-native-snap-carousel";
import CardCarousel from "../components/cardcarousel";
import { collection, query, where, getDocs } from "firebase/firestore";
import {
  Text,
  Box,
  Input,
  Icon,
  Stack,
  Center,
  FormControl,
  Button ,
  WarningOutlineIcon,
  NativeBaseProvider,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { app, db } from "../config/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginauth, setloginvalue] = useState({
    email: "",
    password: "",
    emailvalid: true,
    emailtext: "",
    passwordvalid: true,
    passwordtext: "",
    disable: false,
  });

  const auth = getAuth(app);
  useEffect(() => {}, []);
  function handle(e , type) {
    const regemail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regpassword =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-_]).{8,}$/;
    switch (type) {
      case "email":
        setloginvalue({
          ...loginauth,
          email: e,
          emailvalid: regemail.test(e) ? true : false,
          emailtext: loginauth.emailvalid ? "" : "email input require",
          // disable: !(loginauth.emailvalid && loginauth.passwordvalid),
        });
        break;
      case "password":
        setloginvalue({
          ...loginauth,
          password: e,
          passwordvalid: regpassword.test(e) ? true : false,
          passwordtext: loginauth.passwordvalid
            ? ""
            : "password must contain at least one lowercase character , uppercase characte , numeric value ,(?=.*[-+_!@#$%^&*., ?]) represents at least one special character. ",
            // disable: !(loginauth.emailvalid && loginauth.passwordvalid),
          });
        console.log(
          `email :  ${loginauth.email} password : ${loginauth.password}`
        );
        break;
      default:
        break;
    }
    console.log(`email :  ${loginauth.email} password : ${loginauth.password}`);
  }

  function submitlogin() {
    signInWithEmailAndPassword(auth, loginauth.email, loginauth.password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        console.log(user.uid);
        console.log('success');
        navigation.navigate("home");
      })
      .catch((error) => {
        alert(error.message);
      });
    console.log(loginauth);
  }
  return (
    <Center flex={1} px="3">
      <Stack space={4} w="100%" alignItems="center">
        <FormControl
          isRequired
          w={{
            base: "75%",
            md: "25%",
          }}
        >
          <FormControl.Label>Email</FormControl.Label>
          <Input
            InputLeftElement={
              <Icon
                as={<MaterialIcons name="email" />}
                size={5}
                ml="2"
                color="black"
              />
            }
            placeholder="example@yahoo.com"
            variant="underlined"
            borderColor={loginauth.passwordvalid?"gray.400":"red"}
            onChangeText={(text) => { setEmail(text); console.log(text) , handle(text , 'email')} }

          />
          {!loginauth.emailvalid ?<Text style={{color:'red'}} >
           {loginauth.emailtext}
          </Text>: '' }
        </FormControl>
        <FormControl
          isRequired
          w={{
            base: "75%",
            md: "25%",
          }}
        >
          <FormControl.Label>Password</FormControl.Label>
          <Input
            // w={{
            //   base: "75%",
            //   md: "25%",
            // }}
            InputLeftElement={
              <Icon
                as={<MaterialIcons name="lock" />}
                size={5}
                ml="2"
                color="black"
              />
            }
            type="password"
            variant="underlined"
            placeholder="Password"
            borderColor={loginauth.passwordvalid?"gray.400":"danger"}
            onChangeText={(text) =>{ setPassword(text) , handle(text , 'password')}}
          />
          {!loginauth.emailvalid ?<Text style={{color:'red'}}>
           {loginauth.passwordtext}
          </Text> :''}
        </FormControl>
        {/* <View
            w={{
              base: "100%",
            //   md: "25%",
            }}
        > */}
        <Button 
        w={{
          base: "75%",
          md: "25%",
        }}
        marginY={10}
        colorScheme="dark"
        isDisabled={loginauth.disable}
         onPress={() => submitlogin()}>Submit</Button>
        {/* </View> */}
      </Stack>
    </Center>
  );
};
export default Login;
