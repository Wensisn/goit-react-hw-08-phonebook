import { Component } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import Box from '@mui/material/Box';

export class Loader extends Component {
  render() {
    return (
      <Box
        sx={{
          display: `flex`,
          justifyContent: `center`,
          marginTop: `100px`,
          marginBottom: `850px`,
        }}
      >
        <ThreeDots
          height="80"
          width="500"
          radius="9"
          color="#4d4dff"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </Box>
    );
  }
}
