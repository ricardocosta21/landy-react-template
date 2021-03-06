import { useState, useEffect } from "react";
import { notification } from "antd";
import firebase from "firebase";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyDa-VIK9Wpt10-rxzmLEFF3z43BlBYDejU",
  authDomain: "wedding2021-10740.firebaseapp.com",
  projectId: "wedding2021-10740",
  storageBucket: "wedding2021-10740.appspot.com",
  messagingSenderId: "376453441959",
  appId: "1:376453441959:web:2370661945a210d06a2e82",
  measurementId: "G-NJT83QCNH8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();



const scrollTo = (id) => {
  const element = document.getElementById(id);
  element.scrollIntoView({
    behavior: 'smooth',
  });
};

const useForm = (validate) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [shouldSubmit, setShouldSubmit] = useState(false);

  const [inputList, setInputList] = useState([{ fullName: "" }]);

  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: "Successo!",
      description: "O seu registo foi efectuado",
    });
  };

  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  const handleAddClick = () => {
    setInputList([...inputList, { fullName: "" }]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validate(values));
    console.log(values);  
    // Your url for API
    saveForm(values);
    setShouldSubmit(true);
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   setErrors(validate(values));
  //   // Your url for API
  //   const url = "";
  //   if (Object.keys(values).length === 3) {
  //     axios
  //       .post(url, {
  //         ...values,
  //       })
  //       .then(() => {
  //         setShouldSubmit(true);
  //       });
  //   }
  // };
  
  useEffect(() => {
    if (Object.keys(errors).length === 0 && shouldSubmit) {
      setValues("");
      openNotificationWithIcon("success");
    }
  }, [errors, shouldSubmit]);


  ///////
  // const handleInputChange = (i, event) => {
  //   event.persist();
    
  //   const { name, value } = event.target;
  //   values[i][name] = value;
  //   setValues((values) => ({
  //     ...values,
  //     [event.target.name]: event.target.value,
  //   }));
  //   setErrors((errors) => ({ ...errors, [event.target.name]: "" }));
  // };

 

  const handleChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
    setErrors((errors) => ({ ...errors, [event.target.name]: "" }));
  };
  
  const handleInputChange = (e, index) => {
    e.persist();
    const list = [...inputList];
    list[index][e.target.name] = e.target.value;
    // setInputList(list);
    setValues((values) => ({
      ...values,
      [e.target.name]: list,
    }));
    setErrors((errors) => ({ ...errors, [e.target.name]: "" }));
  };

  const saveForm = (values) => {
    db.collection("Guests").add({
      value: values,
    });
    //todo: only if form goes through
    // scrollTo('mission');
  };

  return {
    handleChange,
    handleSubmit,
    handleInputChange,
    handleRemoveClick,
    handleAddClick,
    inputList,
    values,
    errors,
  };
};

export default useForm;
