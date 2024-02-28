import { useUser } from "../context/useUser";
import Navbar from "../navbar/navbar";
// import MenuBookTwoToneIcon from "@mui/icons-material/MenuBookTwoTone";
import "./header.css";

export default function Header({ setUsername }) {
  const { username } = useUser();

  return (
    <>
      <div class="header">
        {/* <MenuBookTwoToneIcon /> */}
        <h1 class="title">X-course-task / Olena Voronko</h1>
        {username && <Navbar />}
      </div>
      <hr />
    </>
  );
}
