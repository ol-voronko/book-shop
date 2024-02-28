import { useNavigate } from "react-router-dom";
import "./style.css";
import { object,string } from "yup";
import { useFormik } from "formik";
import { TextField, Button } from "@mui/material";
import avatar from "../../assets/images/avatar.png"

const validationSchema = object({
  username: string()
    .min(4, " username should be of minimum 4 characters length")
    .max(16, "username should be of maximum 16 characters length")
    .required("username is required"),
});

export default function SignIn({ setUsername }) {
  const navigate = useNavigate();
  
  const formik = useFormik({
    initialValues: {
      username: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setUsername(values.username)
      navigate("/books")
    }
  });

  return (
    <>
      <div className="user-box">
        <img src={avatar} alt="Аватарка" />
        <form onSubmit={formik.handleSubmit}>
          <TextField
            id="username"
            name="username"
            label="Username"
            variant="outlined"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
          />
          <br />
          <br />
          <br />
          <Button
            color="primary"
            variant="contained"
            size="medium"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </div>
      {/* <img src={avatar} alt="Аватарка" />
        <label class="text-label" for="user">
          Username
        </label>
        <br />
        <br />
        <input class="field text" type="text" id="user" placeholder="username" />
        <br />
        <button class="field text" type="submit">
          <Link to="/books">Signin</Link>
        </button> */}
    </>
  );
}
