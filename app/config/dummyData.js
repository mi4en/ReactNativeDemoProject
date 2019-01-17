//Dummy data for mock testing

import { images } from '../assets/images/Images';

export const cards = [
	{
		logo: images.logoAdidas,
		name: 'Sub Zero',
		userPoints: '2300',
		cardNumber: '01223344'
	},
	{
		logo: images.logoNike,
		name: 'Liu Kang',
		userPoints: '100',
		cardNumber: '02223344'
	},

	{
		logo: images.logoPuma,
		name: 'Shao Kahn',
		userPoints: '799',
		cardNumber: '03223344'
	},
	{
		logo: images.logoSportDepot,
		name: 'Sonya Blade',
		userPoints: '250',
		cardNumber: '04223344'
	},
	{
		logo: images.logoAdidas,
		name: 'Johnny Cage',
		userPoints: '5700',
		cardNumber: '05223344'
	},
	{
		logo: images.logoNike,
		name: 'Scorpien',
		userPoints: '500',
		cardNumber: '06223344'
	},
	{
		logo: images.logoPuma,
		name: 'Raiden',
		userPoints: '890',
		cardNumber: '07223344'
	},
	{
		logo: images.logoSportDepot,
		name: 'Kitana',
		userPoints: '1100',
		cardNumber: '08223344'
	},
	{
		logo: images.logoAdidas,
		name: 'Reptile',
		userPoints: '380',
		cardNumber: '09223344'
	}
];

export const retailers = [
	{ name: 'Sport Depot', logo: images.logoSportDepot },
	{ name: 'Beauty Line', logo: images.default },
	{ name: 'Marks and Spencer', logo: images.default },
	{ name: 'Shell', logo: images.default },
	{ name: 'Adidas', logo: images.logoAdidas },
	{ name: 'Puma', logo: images.logoPuma },
	{ name: 'Nike', logo: images.logoNike },
	{ name: 'ASICS', logo: images.default },
	{ name: 'Nestle', logo: images.default }
];

export const vouchers = [
	{
		type: 'Discount Vaucher',
		amount: '25% OFF',
		barcode: 'QWE986679455467890',
		logo: images.logoPromo
	},
	{
		type: 'Shopping Vaucher',
		amount: '100$',
		barcode: 'ASD486679455467890',
		logo: images.logoPromo
	},
	{
		type: 'Gift Vaucher',
		amount: '50$',
		barcode: 'ZXC586679455467890',
		logo: images.logoPromo
	}
];
