import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import emailjs from 'emailjs-com';
import "./Form.css"
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
  container: {
    background: 'white',
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function Form() {
  const classes = useStyles();
  const [value, setValue] = React.useState('');
  //   const [name,setname]= React.useState('')
  //   const [phno, setphno] = React.useState('');
  //   const [address, setaddress] = React.useState('');

  const [helperText, setHelperText] = React.useState(
    'please take the covid-test'
  );

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(' ');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value === 'high') {
      setHelperText('please take the covid-test');
    } else if (value === 'light') {
      setHelperText('please take the covid-test but might not be urgent');
    } else {
      setHelperText('Please select an option.');
    }
  };
  const handleSubmitMail = (e) => {
    e.preventDefault();
    const phno = document.getElementById('phno');
    const name = document.getElementById('name');
    const address = document.getElementById('addr');
    const parameter = {
      phno,
      name,
      address,
    };
    emailjs
      .sendForm(
        'gmail',
        'template_71oc54q',
        e.target,
        'user_8m42bkwACr8cd3eLQq6A6'
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Container className="formx">
      <form onSubmit={handleSubmit}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Symptoms Of Covid</FormLabel>
          <RadioGroup
            aria-label="fever"
            name="fever"
            value={value}
            onChange={handleRadioChange}
          >
            <FormControlLabel
              value="high"
              control={<Radio />}
              label="3 or above Symptoms"
            />
            <FormControlLabel
              value="light"
              control={<Radio />}
              label="less than 2 Symptoms"
            />
          </RadioGroup>
          <FormHelperText>{helperText}</FormHelperText>
          <Button
            type="submit"
            variant="outlined"
            color="primary"
            className={classes.button}
          >
            submit
          </Button>
        </FormControl>
      </form>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmitMail}
      >
        <TextField id="name" label="Name" variant="outlined" name="name" />
        <TextField
          id="phno"
          label="phone number"
          variant="outlined"
          name="phno"
        />
        <TextField id="addr" label="Address" variant="outlined" name="addr" />
        <Button
          type="submit"
          variant="outlined"
          color="textSecondary"
          className={classes.button}
        >
          submit
        </Button>
      </form>
    </Container>
  );
}