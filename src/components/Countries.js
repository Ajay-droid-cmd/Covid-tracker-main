import { FormControl, InputLabel, MenuItem } from "@material-ui/core";
import React from "react";
import { useState, useEffect } from "react";
import { makeStyles, Select, Container } from "@material-ui/core";
import Country from "./Country";
import "./Map.css";
import ReactMapGL from "react-map-gl";


const useStyles = makeStyles({
  formControl: {
    marginTop: "30px",
    color: "white",
  },
  select: {
    width: "350px",
    color: "black",
    backgroundColor: "white",
    "&:hover": {
      backgroundColor: "lightblue",
    },
  },
  menu: {
    color: "#14213d",
  },
  entercountry: {
    textAlign: "center",
    color: "white",
    fontSize: "30px",
    marginTop: "10px",
  },
});

const Countries = (props) => {
  const classes = useStyles();
  const [loaded, setloaded] = useState([]);

  const [countrychange, setcountrychange] = useState("");
 
  const countries = async () => {
    try {
      const res = await fetch(
        "https://corona.lmao.ninja/v2/countries?yesterday&sort"
      );
      const jsondata = await res.json();

      setloaded(jsondata);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    countries();
  }, []);
 
  const onchangehandler = (e) => {
    setcountrychange(e.target.value);
  };
  useEffect(() => {
    props.myprops(countrychange);
  }, [countrychange]);


  return (
    <>
      <Container className="mb-5">
        <FormControl variant="filled" className={classes.formControl}>
          <InputLabel id="countries">Countries</InputLabel>
          <Select
            labelId="countries"
            className={classes.select}
            onChange={onchangehandler}
            value={countrychange}
          >
            {loaded &&
              loaded.map((countries) => (
                <MenuItem
                  id={countries.countryInfo._id}
                  value={countries.country}
                  className={classes.menu}
                  key={countries.country}
                >
                  {countries.country}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </Container>
      {countrychange === "" ? (
        <h2 className={classes.entercountry}>
          Please select a country from the dropdown.
        </h2>
      ) : (
        <Country country={countrychange}   />
      )}
      <br></br>
      <br></br>
     
    </>
  );
};

export default Countries;

