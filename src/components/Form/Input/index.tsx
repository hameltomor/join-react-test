import styled from 'styled-components'

const Input = styled.input`
	color: #333;
  font-size: 1.2rem;
	margin: 0;
  padding: 1.5rem 2rem;
  border-radius: 0.2rem;
  background-color: rgb(255, 255, 255);
  border: none;
  width: 90%;
  display: block;
  border-bottom: 0.3rem solid transparent;
  transition: all 0.3s;

	&:placeholder-shown + .label {
		opacity: 0;
		visibility: hidden;
		-webkit-transform: translateY(-4rem);
		transform: translateY(-4rem);
	}

	@media ${p => p.theme?.media?.smallOnly} {
		padding: 0.7rem 1rem;
	}
`

export default Input;
