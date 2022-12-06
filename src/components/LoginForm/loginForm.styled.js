import styled from 'styled-components';

// export const SectionForm = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;
// export const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   padding: 20px;
//   border-radius: 5px;
//   background-color: blanchedalmond;
// `;

// export const Label = styled.label`
//   display: flex;
//   flex-direction: column;
//   background-color: bisque;
// `;

// export const Input = styled.input`
//   background-color: bisque;
//   display: flex;
//   border: 2px solid burlywood;
// `;

// export const Name = styled.span`
//   display: flex;
//   justify-content: center;
//   font-size: 16px;
//   font-weight: 18px;
// `;

// export const Click = styled.button`
//   display: flex;
//   font-size: 16px;
//   background-color: bisque;
//   justify-content: center;
//   border: 1px solid burlywood;
//   margin-top: 20px;
// `;

// export const Text = styled.h2`
//   font-size: 20px;
//   display: flex;
//   justify-content: center;
// `;

// export const Boxs = styled.div`
//   background-color: linear-gradient(45deg, #fc466b, #3f5efb);
// `;

export const SectionForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(45deg, #fc466b, #3f5efb);
  margin-top: 50px;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
`;

export const Label = styled.label``;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.3);
  padding: 3em;
  height: 320px;
  border-radius: 20px;
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  box-shadow: 20px 20px 40px -6px rgba(0, 0, 0, 0.2);
  text-align: center;
  position: relative;
  transition: all 0.2s ease-in-out;
`;
export const Text = styled.p`
  font-weight: 500;
  color: #fff;
  opacity: 0.7;
  font-size: 1.4rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

export const Input = styled.input`
  background: transparent;
  width: 200px;
  padding: 1em;
  margin-bottom: 2em;
  border: none;
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 5000px;
  backdrop-filter: blur(5px);
  box-shadow: 4px 4px 60px rgba(0, 0, 0, 0.2);
  color: #fff;
  font-family: Montserrat, sans-serif;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

  :hover {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 4px 4px 60px 8px rgba(0, 0, 0, 0.2);
  }
  :focus {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 4px 4px 60px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const Button = styled.button`
  background: transparent;
  width: 200px;
  padding: 1em;
  margin-bottom: 2em;
  border: none;
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 5000px;
  backdrop-filter: blur(5px);
  box-shadow: 4px 4px 60px rgba(0, 0, 0, 0.2);
  color: #fff;
  font-family: Montserrat, sans-serif;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

  :hover {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 4px 4px 60px 8px rgba(0, 0, 0, 0.2);
  }
  :focus {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 4px 4px 60px 8px rgba(0, 0, 0, 0.2);
  }
`;
