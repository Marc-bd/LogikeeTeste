import React, { SetStateAction } from "react";

export interface IPropsChildren {
	children: React.ReactNode;
}

export interface IpropsBoolean {
	isOpen: boolean;
}

export interface IprospModal {
	isOpen: boolean;
	closeModal?: React.ReactEventHandler<boolean>;
	openModal?: React.ReactEventHandler;
	title?: string;
	description?: string;
	chassis?: string;
	brand?: string;
	model?: string;
	name?: string;
	yearOfFabrication?: string;
	price?: string;

	color?: string;
	_id?: string;
}

export interface FormCarValues {
	brand?: string;
	model?: string;
	name?: string;
	yearOfFabrication?: string;
	price?: string;
	chassis?: string;
	color?: string;
	_id?: string;
	key?: string;
}

export interface FormCreateUser {
	username: string;
	email: string;
	password: string;
}

export interface ItoastConfig {
	position: string;
	autoClose: number;
	hideProgressBar: boolean;
	closeOnClick: boolean;
	pauseOnHover: boolean;
	draggable: boolean;
	progress: any;
	theme: string;
}
