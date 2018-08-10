import React, { Component } from "react";
import Login from "../components/Login/Login";
import { createStackNavigator } from "react-navigation";
import Welcome from "../components/Welcome/Welcome";
import CreateAccount from "../components/CreateAccount/CreateAccount";
import Notifications from "../components/Notifications/Notifications";
import YourUsers from "../components/YourUsers/YourUsers";
import UserDetails from "../components/UserDetails/UserDetails";
import UsersList from "../components/UsersList/UsersList";
import User from "../components/User/User";
import TermsAndConditions from "../components/TermsAndConditions/TermsAndConditions";
import TermsAndConditionsButton from "../components/Buttons/termCondBtn";
import YourUsers from "../components/YourUsers/YourUsers";

export const RootStack = createStackNavigator({
  Welcome: Welcome,
  Login: Login,
  CreateAccount: CreateAccount,
  Notifications: Notifications,
  YourUsers: YourUsers,
  UserDetails: UserDetails,
  UsersList: UsersList,
  User: User,
  TermsAndConditions: TermsAndConditions,
  TermsAndConditionsButton: TermsAndConditionsButton,
  initialRouteName: "Welcome"
});
