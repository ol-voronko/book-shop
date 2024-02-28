import { useParams } from "react-router-dom";
import { useBook } from "../context/useBook";
import { useState, useMemo } from "react";
import imageNotFound from "../../assets/images/imageNotFound.png"
import useAuthRedirect from "../context/useAuthRedirect";

export default function Book() {
  useAuthRedirect();

  const params = useParams();
  const books = useBook();
  const id = Number(params.id);
  const book = books.find((book) => {
    return book.id === id;
  });
  const { title, author, image, description, price, amount } = book;

  const [count, setCount] = useState(1);

  //   if (count <= 1) {
  //     return 1;
  //   } else if (count >= 42) {
  //     return 42;
  //   }

  // });

  const totalPrice = useMemo(() => price * count, [count]);

  const changeCountHandler = (e) => {
    const currentValue = Number(e.target.value);
    if (currentValue >= amount) {
      setCount(amount);
    } else if (currentValue <= 1 || !currentValue) {
      setCount(1);
    } else {
      setCount(currentValue);
    }
  };

  return (
    <div>
      <img src={image||imageNotFound} alt="Обкладинка книги" />

      <p>{title}</p>
      <p>{author}</p>
      <p>{description}</p>
      <div>
        <p>{price}</p>

       
          <label for="count"> Кількість:</label>
          <button
            type="button"
            onClick={() => setCount(count - 1)}
            disabled={count <= 1}
          >
            -
          </button>
          <input id="count" onChange={changeCountHandler} value={count} />
          <button
            type="button"
            onClick={() => setCount(count + 1)}
            disabled={count >= amount}
          >
            +
          </button>

          <br />
          <p>
            Total price:<span>{totalPrice}</span>
          </p>
          <button >Додати до кошика</button>
        </div>
    </div>
  );
}
