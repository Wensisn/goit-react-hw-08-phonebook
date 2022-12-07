import { Component } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { Boks } from './loader.styled';

export class Loader extends Component {
  render() {
    return (
      <>
        <Boks>
          <ThreeDots
            height="80"
            width="500"
            radius="9"
            color="#violet"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </Boks>
      </>
    );
  }
}
