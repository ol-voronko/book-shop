import { Link } from "react-router-dom";
import { useBook } from "../context/useBook";
import imageNotFound from "../../assets/images/imageNotFound.png";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./book-list.css";


export default function BookItem(props) {
 
  const { title, author, price, image, shortDescription,id } = props;

  return (
    <>
      <Card
        sx={{
          maxWidth: 345,
        }}
      >
        <CardActionArea class="card">
          <CardMedia
            component="img"
            class="card-image"
            image={image || imageNotFound}
            alt="Обкладинка книги"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {author}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {shortDescription}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Price: {price}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              <Link to={`/books/${id}`}class="button">View</Link>
            </Button>
          </CardActions>
        </CardActionArea>
      </Card>
    </>
  );
}
