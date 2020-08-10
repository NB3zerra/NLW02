import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

import logoImg from "../../assets/images/logo.svg";
import backIcon from "../../assets/images/icons/back.svg";

//define o formato de tipagem de objeto no ts
interface PageHeaderProps {
	title: string;
	desctiption ?: string
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
	return (
		<header className='page-header'>
			<div className='top-bar-container'>
				<Link to='/'>
					<img src={backIcon} alt='voltar' />
				</Link>
				<img src={logoImg} alt='Proffy' />
			</div>

			<div className='header-content'>
				<strong>{props.title}</strong>
				{ props.desctiption && <p>{props.desctiption}</p> } 
                {props.children}
			</div>

           
		</header>
	);
};

export default PageHeader;
