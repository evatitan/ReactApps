import React, { Fragment } from 'react';
import ReactDOM from 'react';
import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';

const Backdrop = (props) => {
	return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
	return (
		<Card className={classes.modal}>
			<header className={classes.header}>
				<h2>{props.title}</h2>
			</header>
			<div className={classes.content}>
				<p>{props.message}</p>
			</div>
			<footer className={classes.action}>
				<Button onConfirm={props.onConfirm}>Okay</Button>
			</footer>
		</Card>
	);
};
const ErrorMadal = (props) => {
	return (
		<Fragment>
			{(ReactDOM.createPortal(<Backdrop onClick={props.onConfirm} />), document.getElementById('backdrop-root'))}
			{
				(ReactDOM.createPortal(
					<ModalOverlay title={props.title} message={props.message} onConfirm={props.onConfirm} />
				),
				document.getElementById('overlay-root'))
			}
		</Fragment>
	);
};

export default ErrorMadal;
