import React, { useState } from "react";
import {
  Container,
  Grid,
  TextField,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  Checkbox,
  Button,
  Select,
  MenuItem,
  InputLabel,
  Typography,
  Box,
} from "@mui/material";
import backImage from "./backimage.png";

const Registration = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    phoneNumber: "",
    dateOfBirth: "",
    gender: "",
    hobbies: {
      reading: false,
      traveling: false,
      cooking: false,
      other: false,
    },
    profilePicture: null,
    country: "",
    bio: "",
    agreeToTerms: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        hobbies: {
          ...prevData.hobbies,
          [name]: checked,
        },
      }));
    } else if (type === "file") {
      setFormData((prevData) => ({
        ...prevData,
        profilePicture: event.target.files[0],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <Container className="mt-5">
      <Grid container spacing={3}>
        <Grid item md={4} className="image-container">
          <img src={backImage} className="img-fluid1" alt="Placeholder" />
          <Typography variant="h5" className="centered-heading">
            REGISTER NOW
          </Typography>
        </Grid>
        <Grid item md={8}>
          <form id="registrationForm" onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <FormLabel htmlFor="fullName" className="required">
                    FULL NAME
                  </FormLabel>
                  <TextField
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Full Name"
                    variant="outlined"
                    required
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <FormLabel htmlFor="username" className="required">
                    USERNAME
                  </FormLabel>
                  <TextField
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Username"
                    variant="outlined"
                    required
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <FormLabel htmlFor="password" className="required">
                    PASSWORD
                  </FormLabel>
                  <TextField
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    variant="outlined"
                    required
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <FormLabel htmlFor="confirmPassword" className="required">
                    CONFIRM PASSWORD
                  </FormLabel>
                  <TextField
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm Password"
                    variant="outlined"
                    required
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <FormLabel htmlFor="email" className="required">
                    EMAIL ADDRESS
                  </FormLabel>
                  <TextField
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    variant="outlined"
                    required
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <FormLabel htmlFor="phone" className="required">
                    PHONE NUMBER
                  </FormLabel>
                  <TextField
                    id="phone"
                    name="phoneNumber"
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    variant="outlined"
                    required
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <FormLabel htmlFor="dob" className="required">
                    DATE OF BIRTH
                  </FormLabel>
                  <TextField
                    id="dob"
                    name="dateOfBirth"
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    variant="outlined"
                    InputLabelProps={{ shrink: true }}
                    required
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl component="fieldset">
                  <FormLabel component="legend" className="required">
                    GENDER
                  </FormLabel>
                  <RadioGroup
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    row
                  >
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio />}
                      label="Other"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl component="fieldset">
                  <FormLabel component="legend">HOBBIES</FormLabel>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={formData.hobbies.reading}
                        onChange={handleChange}
                        name="reading"
                      />
                    }
                    label="Reading"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={formData.hobbies.traveling}
                        onChange={handleChange}
                        name="traveling"
                      />
                    }
                    label="Traveling"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={formData.hobbies.cooking}
                        onChange={handleChange}
                        name="cooking"
                      />
                    }
                    label="Cooking"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={formData.hobbies.other}
                        onChange={handleChange}
                        name="other"
                      />
                    }
                    label="Other"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <FormLabel htmlFor="profilePicture" className="required">
                    PROFILE PICTURE
                  </FormLabel>
                  <input
                    type="file"
                    id="profilePicture"
                    name="profilePicture"
                    onChange={handleChange}
                    className="form-control-file"
                    required
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="country" className="required">
                    COUNTRY
                  </InputLabel>
                  <Select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    variant="outlined"
                    required
                  >
                    <MenuItem value="">
                      <em>Select Country</em>
                    </MenuItem>
                    <MenuItem value="ind">India</MenuItem>
                    <MenuItem value="canada">Canada</MenuItem>
                    <MenuItem value="uk">UK</MenuItem>
                    <MenuItem value="us">USA</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <FormLabel htmlFor="bio">BIO</FormLabel>
                  <TextField
                    id="bio"
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    placeholder="Tell us about yourself"
                    multiline
                    rows={3}
                    variant="outlined"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.agreeToTerms}
                      onChange={handleChange}
                      name="agreeToTerms"
                    />
                  }
                  label="Agree to Terms and Conditions"
                  required
                />
              </Grid>
              <Grid item xs={12} className="d-flex justify-content-end">
                <Button
                  type="submit"
                  variant="contained"
                  color="success"
                  className="mr-2"
                >
                  Submit
                </Button>
                <Button type="reset" variant="contained" color="error">
                  Reset
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Registration;
