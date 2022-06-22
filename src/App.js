import React from "react";

import Header from "./components/Layout/Header";
import OrderForm from "./components/Order/OrderForm";
import Notification from "./components/UI/Notification";

import handleSubmit from './app/submit'


function App() {

  return (
    <>
      <Notification />
      <Header />
      <main>
        <OrderForm onSubmit={handleSubmit} />
      </main>
    </>
  );
}

export default App;
