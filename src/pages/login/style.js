import styled from 'styled-components';
import formBorder from '../../statics/formBorder.png';

export const LoginWrapper = styled.div`
	z-index: 0;
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	top: 56px;
	background: #eee;
`;

export const LoginBox = styled.div`
	background: url(${formBorder});
	width: 400px;
	height: 180px;
	margin: 100px auto;
	padding-top: 20px;
	background: #fff;
	box-shadow: 0 0 8px rgba(0,0,0,.2);
	background-size: 140px;
  border-radius: 10px;
  background-repeat: repeat-x repeat-y;
`;

export const Input = styled.input`
	:focus {
		border: solid 2px #c87b86;
	}
	display: block;
	width: 200px;
	height: 30px;
	line-height: 30px;
	padding: 0 10px;
	margin: 10px auto;
	color: #777;
	border: solid 2px #dbbfc3;
	border-radius: 10px;
	outline:none;
`;

export const Button = styled.div`
	:hover {
		opacity: 1;
	}
	cursor: pointer;
	border: solid 2px #a55f67;
  background-color: #a55f67;
  opacity: .8;
  border-radius: 10px;
	width: 110px;
	height: 30px;
	line-height: 30px;
	color: #fff;
	border-radius: 15px;
	margin: 10px auto;
	text-align: center;
`;
