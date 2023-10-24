import React, { useState } from "react";
import { SendBirdProvider as SBProvider } from "sendbird-uikit";
import "sendbird-uikit/dist/index.css";

import CustomizedApp from "./CustomizedApp";
import { Form } from "./Form";
import "./styles.css";
import { APP_ID, USER_ID, NICKNAME } from "./const";

export default function App() {
  const [display, setDisplay] = useState({
    chatVisibility: false,
    formVisibility: true
  });
  const [form, setForm] = useState({ email: "", subject: "", description: "" });
  const [channelUrl, setChannelUrl] = useState(null);

  const createTicket = () => {
    //Call to your Salesforce webserver with the form details.
    setDisplay({ chatVisibility: true, formVisibility: false });
    setTimeout(() => {
      //Mocking call to webserver to get back created channel.
      //Use something like Axios to call to your webserver.
      //Add your own channel url here for testing.
      setChannelUrl("NEW_CHANNEL_URL");
    }, 500);
  };

  const submit = () => createTicket();

  const changeHandler = (source, value) => {
    let result = JSON.parse(JSON.stringify(form));
    result[source] = value;
    setForm(result);
  };

  const displayChat = () => {
    if (display.chatVisibility) {
      return (
        <SBProvider appId={APP_ID} userId={USER_ID} nickname={NICKNAME}>
          <CustomizedApp channelUrl={channelUrl} />
        </SBProvider>
      );
    }
    return <div></div>;
  };

  const displayForm = () => {
    if (display.formVisibility)
      return <Form changeHandler={changeHandler} submit={submit} />;
    return <div></div>;
  };

  return (
    <div>
      {displayForm()}
      {displayChat()}
    </div>
  );
}
