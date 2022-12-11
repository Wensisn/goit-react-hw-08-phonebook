import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export const HomePages = () => {
  return (
    <Box
      sx={{
        padding: `40px 0`,
        display: `flex`,
        justifyContent: `center`,
        flexDirection: `column`,
        alignItems: `center`,
      }}
    >
      <Typography
        variant="h1"
        component="h2"
        sx={{
          marginBottom: `20px`,
          fontWeight: `500`,
          fontSize: `35px`,
          background: `linear-gradient(90deg, #833ab4, #f50057, #fcb045, #b345fc) 47% 0`,
          color: `white`,
        }}
      >
        Welcome
      </Typography>
      <Typography
        variant="h6"
        component="h2"
        sx={{
          background: `linear-gradient(90deg, #833ab4, #f50057, #fcb045, #b345fc) 47% 0`,
          fontWeight: `700`,
          marginBottom: `700px`,
          color: `white`,
        }}
      >
        Now you will exactly not forget your contacts! Please, Sign up or Log in
        to have access to the Phonebook!
      </Typography>
    </Box>
  );
};
