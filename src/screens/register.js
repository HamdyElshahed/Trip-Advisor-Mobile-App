import * as React from "react";
import { FlatList } from "native-base";
import { useContext, useEffect, useState } from "react";
import { View } from "react-native";
import { TextInput } from "react-native";
import Carousel from "react-native-snap-carousel";
import CardCarousel from "../components/cardcarousel";
import {
  Text,
  Box,
  Input,
  Icon,
  Stack,
  Center,
  FormControl,
  Button,
  ScrollView,
  WarningOutlineIcon,
  NativeBaseProvider,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { app, db } from "../config/firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {
  setDoc,
  collection,
  doc,
} from "firebase/firestore";
const Register = ({ navigation }) => {
  const [registerauth, setregisterauth] = useState({
    id: "",
    username: "",
    usernamevalid: "",
    usernametext: true,
    email: "",
    emailvalid: true,
    emailtext: "",
    phone: "",
    phonevalid: true,
    phonetext: "",
    password: "",
    passwordvalid: true,
    passwordtext: "",
    confirmpassword: "",
    confirmpasswordvalid: true,
    confirmpasswordtext: "",
    isAdmin: false,
    disable: true,
  });

  const auth = getAuth(app);
  useEffect(() => {}, []);
  function handle(e, type) {
    const regusername = /^\s*\S+\s*$/;
    const regemail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regpassword =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-_]).{8,}$/;
    const regphone = /^01[0-2,5]{1}[0-9]{8}$/;
    switch (type) {
      case "username":
        setregisterauth({
          ...registerauth,
          username: e,
          usernamevalid: e.length === 0 || !regusername.test(e) ? false : true,
          usernametext: registerauth.usernamevalid
            ? "username is require and nospaces"
            : null,
          disable: !(
            registerauth.usernamevalid &&
            registerauth.emailvalid &&
            registerauth.passwordvalid 
          ),
        });
        break;
      case "email":
        setregisterauth({
          ...registerauth,
          email: e,
          emailvalid: regemail.test(e) ? true : false,
          emailtext: registerauth.emailvalid ? "" : "email input require",
          disable: !(
            registerauth.usernamevalid &&
            registerauth.emailvalid &&
            registerauth.passwordvalid 
          ),
        });
        break;
      case "phone":
        setregisterauth({
          ...registerauth,
          phone: e,
          phonevalid: regphone.test(e) ? true : false,
          phonetext: registerauth.phonevalid
            ? ""
            : "enter numeric value contain 11 number",
          disable: !(
            registerauth.usernamevalid &&
            registerauth.emailvalid &&
            registerauth.passwordvalid 
          ),
        });
        break;
      case "password":
        setregisterauth({
          ...registerauth,
          password: e,
          passwordvalid: regpassword.test(e) ? true : false,
          passwordtext: registerauth.passwordvalid
            ? ""
            : "password must contain at least one lowercase character , uppercase characte , numeric value ,(?=.*[-+_!@#$%^&*., ?]) represents at least one special character. ",
          disable: !(
            registerauth.usernamevalid &&
            registerauth.emailvalid &&
            registerauth.passwordvalid 
          ),
        });
        console.log(
          `email :  ${registerauth.email} password : ${registerauth.password}`
        );
        break;
      case "confirmpassword":
        setregisterauth({
          ...registerauth,
          confirmpassword: e,
          confirmpasswordvalid:
            (registerauth.password === e) ? true : false,
          confirmpasswordtext: registerauth.confirmpasswordvalid
            ? "confirm password must be a same password"
            : null,
          disable: !(
            registerauth.usernamevalid &&
            registerauth.emailvalid &&
            registerauth.passwordvalid 
          ),
        });
        break;
      default:
        break;
    }
    console.log(
      `email :  ${(registerauth.disable )}`
    );
  }

  async function SetUserDataRegister(user, username, phone, isAdmin) {
    const userdata = {
      uid: user.uid,
      email: user.email,
      displayName: username,
      phoneNumber: phone,
      emailVerified: user.emailVerified,
      isAdmin: isAdmin,
      photoURL:
        "https://firebasestorage.googleapis.com/v0/b/iti-trip-advisor.appspot.com/o/home%2Fprofile.jpg?alt=media&token=6c056796-3c9d-4148-a1d8-95a6d410d405",
    };
    console.log(user);

    const adduser = await setDoc(doc(db, "Users", user.uid), userdata, {
      merge: true,
    });
    // const adduser = await addDoc(collection(db,'Users'),userdata);
  }

  async function submitRgister() {
      createUserWithEmailAndPassword(
        auth,
        registerauth.email,
        registerauth.password
      )
        .then(async (userCredential) => {
          const user = await userCredential.user;
          await SetUserDataRegister(
            user,
            registerauth.username,
            registerauth.phone,
            registerauth.isAdmin,
          );
        })
        .catch((error) => {
            alert(error.message);
        });
      console.log(registerauth);
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
          {/* <FormControl.Label>User Name</FormControl.Label> */}
          <Input
            InputLeftElement={
              <Icon
                as={<MaterialIcons name="person" />}
                size={5}
                ml="2"
                color="black"
              />
            }
            type="text"
            variant="underlined"
            placeholder="your Name"
            borderColor={registerauth.usernamevalid ? "gray.400" : "danger"}
            onChangeText={(text) => {
              handle(text, "username");
            }}
          />
          {!registerauth.usernamevalid ? (
            <Text style={{ color: "red" }}>{registerauth.usernametext}</Text>
          ) : (
            ""
          )}
        </FormControl>
        <FormControl
          isRequired
          w={{
            base: "75%",
            md: "25%",
          }}
        >
          {/* <FormControl.Label>Email</FormControl.Label> */}
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
            borderColor={registerauth.passwordvalid ? "gray.400" : "red"}
            onChangeText={(text) => {
               handle(text, "email");
            }}
          />
          {!registerauth.emailvalid ? (
            <Text style={{ color: "red" }}>{registerauth.emailtext}</Text>
          ) : (
            ""
          )}
        </FormControl>
        <FormControl
          isRequired
          w={{
            base: "75%",
            md: "25%",
          }}
        >
          {/* <FormControl.Label>Phone</FormControl.Label> */}
          <Input
            InputLeftElement={
              <Icon
                as={<MaterialIcons name="phone" />}
                size={5}
                ml="2"
                color="black"
              />
            }
            type="number"
            variant="underlined"
            placeholder="Phone"
            borderColor={registerauth.phonevalid ? "gray.400" : "danger"}
            onChangeText={(text) => {
              handle(text, "phone");
            }}
          />
          {!registerauth.phonevalid ? (
            <Text style={{ color: "red" }}>{registerauth.phonevalid}</Text>
          ) : (
            ""
          )}
        </FormControl>
        <FormControl
          isRequired
          w={{
            base: "75%",
            md: "25%",
          }}
        >
          {/* <FormControl.Label>Password</FormControl.Label> */}
          <Input
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
            borderColor={registerauth.passwordvalid ? "gray.400" : "danger"}
            onChangeText={(text) => { handle(text, "password");
            }}
          />
          {!registerauth.passwordvalid ? (
            <Text style={{ color: "red" }}>{registerauth.passwordtext}</Text>
          ) : (
            ""
          )}
        </FormControl>
        <FormControl
          isRequired
          w={{
            base: "75%",
            md: "25%",
          }}
        >
          {/* <FormControl.Label>Confirm Password</FormControl.Label> */}
          <Input
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
            placeholder="Confirm Password"
            borderColor={registerauth.confirmpasswordvalid ? "gray.400" : "danger"}
            onChangeText={(text) => {
              handle(text, "confirmpassword");
            }}
          />
          {!registerauth.confirmpasswordvalid ? (
            <Text style={{ color: "red" }}>
              {registerauth.confirmpasswordtext}
            </Text>
          ) : (
            ""
          )}
        </FormControl>

        <Button
          w={{
            base: "75%",
            md: "25%",
          }}
          marginY={10}
          colorScheme="dark"
          isDisabled={registerauth.disable}
          onPress={() => submitRgister()}
        >
          Submit
        </Button>
        {/* </View> */}
      </Stack>
     </Center>
  );
};
export default Register;
