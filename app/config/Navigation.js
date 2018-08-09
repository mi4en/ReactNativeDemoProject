import React, { Component } from 'react'
import Login from '../components/Login/Login'
import { createStackNavigator } from 'react-navigation'
import Welcome from '../components/Welcome/Welcome'
import CreateAccount from '../components/CreateAccount/CreateAccount'
import Notifications from '../components/Notifications/Notifications'
import YourCards from '../components/YourCards/YourCards'
import CardDetails from '../components/CardDetails/CardDetails'
import RetailersList from '../components/RetailersList/RetailersList'
import Retailer from '../components/Retailer/Retailer'
import TermsAndConditions from '../components/TermsAndConditions/TermsAndConditions'
import TermsAndConditionsButton from '../components/Buttons/termCondBtn'

export const RootStack = createStackNavigator({
  Welcome: Welcome,
  Login: Login,
  CreateAccount: CreateAccount,
  Notifications: Notifications,
  YourCards: YourCards,
  CardDetails: CardDetails,
  RetailersList: RetailersList,
  Retailer: Retailer,
  TermsAndConditions: TermsAndConditions,
  TermsAndConditionsButton: TermsAndConditionsButton,
  initialRouteName: 'Welcome'
})
