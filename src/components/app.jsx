import axios from "axios";
import { useEffect } from "react";
import { Button } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";

// axios.defaults.baseURL = "http://localhost:3000";

export default function App() {
  async function fetchData() {
    await axios("/api/list").then(res => console.log(res.data));
  }
  useEffect(() => {
    fetchData();
  });

  return (
    <>
      <Button leftIcon={<EmailIcon />} colorScheme="teal" variant="solid" m={"20px"}>
        あいうお
      </Button>
      <h1>hello</h1>
    </>
  );
}