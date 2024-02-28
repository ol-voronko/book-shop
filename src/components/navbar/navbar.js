import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useUser } from "../context/useUser";
import { Badge, Button } from "@mui/material";
import "../header/header.css";

// import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
export default function Navbar() {
  const { username, setUsername } = useUser();


  return (
    <div className="navbar">
      <Link to="/cart">
        <Badge
          badgeContent={2}
          color="primary"
          fontSize="large"
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <ShoppingCartIcon color="secondary" fontSize="large" />
        </Badge>
      </Link>
      <Button
        size="large"
        variant="outlined"
        className="nav-button"
        onClick={() => {
          setUsername("");
        }}
      >
        Sign-Out
      </Button>
      <img src="#" alt="avatar"></img>
      <p>{username}</p>
    </div>
  );
}
