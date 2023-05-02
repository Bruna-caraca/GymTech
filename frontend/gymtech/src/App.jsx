import React from "react";
import { Provider } from "react-redux";
import Login from "./pages/login";
import store from "./Store";
import Routes from './routes'
import './global.css'

export default function App() {
  return (
    <Provider store={store}>
        <Login />
        <Routes />
    </Provider>
  );
}
