import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import Login from '../components/Login/Login';
import Welcome from '../components/Welcome/Welcome';
import CreateAccount from '../components/CreateAccount/CreateAccount';
import Notifications from '../components/Notifications/Notifications';
import YourCards from '../components/YourCards/YourCards';
import CardDetails from '../components/CardDetails/CardDetails';
import BrandsList from '../components/BrandsList/BrandsList';
import Brand from '../components/Brand/Brand';
import TermsAndConditions from '../components/TermsAndConditions/TermsAndConditions';
import TermsAndConditionsButton from '../components/Buttons/termCondBtn';
import ForgotPassword from '../components/ForgotPassword/ForgotPassword';
import Settings from '../components/Settings/Settings';
import ChangePassword from '../components/ChangePassword/ChangePassword';
import NotificationsSettings from '../components/Notifications/NotificationsSettings';
import MoreInfo from '../components/NoInternetConnection/MoreInfo';
import MapViewDummy from '../components/MapView/MapViewDummy';
import Vouchers from '../components/Vouchers/Vouchers';
import VoucherDetails from '../components/VoucherDetails/VoucherDetails';

export const RootStack = createStackNavigator({
	Welcome: Welcome,
	Login: Login,
	CreateAccount: CreateAccount,
	Notifications: Notifications,
	YourCards: YourCards,
	CardDetails: CardDetails,
	BrandsList: BrandsList,
	Brand: Brand,
	TermsAndConditions: TermsAndConditions,
	TermsAndConditionsButton: TermsAndConditionsButton,
	ForgotPassword: ForgotPassword,
	Settings: Settings,
	ChangePassword: ChangePassword,
	NotificationsSettings: NotificationsSettings,
	MoreInfo: MoreInfo,
	MapViewDummy: MapViewDummy,
	Vouchers: Vouchers,
	VoucherDetails: VoucherDetails,
	initialRouteName: 'Welcome'
});
