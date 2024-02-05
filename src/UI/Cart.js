import MuiAlert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import React, { useContext, useEffect, useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";
import carts from "./cart.module.css";
import { MyContext } from "./context";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={1} ref={ref} variant="filled" {...props} />;
});

export default function Cart() {
  const { cart, totalprice, disc, setCart, count, setCount, setTotalprice } =
    useContext(MyContext);
  const [items, setItems] = useState([]);
  const [para, setPara] = useState();
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const checkout = () => {
    if (cart.length === 0) {
      setOpen(true);
      setPara();
    } else {
      setPara("/payment");
    }
  };

  const deletes = (data) => {
    setOpen1(true);
    alert("Successfully Deleted");
    setCount(count - 1);
    const newp = data.item.price;
    setTotalprice(totalprice - newp);
    const newItems = items.filter(({ item }) => item.id !== data.item.id);
    setItems(newItems);
    setCart(newItems);
  };
  let payable = disc
    ? totalprice + totalprice * (0.2 / 100) + totalprice * (5 / 100)
    : totalprice + totalprice * (0.2 / 100);
  useEffect(() => {
    setItems(cart);
  }, [cart]);

  return (
    <div className="row" style={{ marginTop: 200, marginBottom: 200 }}>
      <div className="col">
        <div className={carts.left}>
          {count === 0 ? (
            <h1
              style={{ textAlign: "center", fontWeight: "bold", fontSize: 55 }}
            >
              NO PRODUCTS IN CART
            </h1>
          ) : (
            items.map((item) => {
              return (
                <div style={{ display: "flex" }}>
                  <Spinner
                    name={item.item.name}
                    image={item.item.image}
                    price={item.item.price}
                    number={1}
                  />
                  <MdDeleteOutline
                    style={{
                      height: 70,
                      width: 35,
                      marginTop: 48,
                      marginLeft: 30,
                      cursor: "pointer",
                      variant: "outlined",
                    }}
                    onClick={() => deletes(item)}
                  />
                  
                </div>
              );
            })
          )}
        </div>
      </div>
      <div
        className="col"
        style={{ display: "flex", position: "fixed", marginLeft: 900 }}
      >
        <table className={carts.checkout}>
          <tr className={carts.totalamount}>
            <td style={{ fontSize: 18 }}>SUB TOTAL</td>
            <td style={{ fontSize: 18, marginLeft: 27 }}>Rs.{totalprice}/-</td>
          </tr>
          <tr className={carts.totalamount}>
            <td style={{ fontSize: 18 }}>GST CHARGES</td>
            <td style={{ fontSize: 18 }}>Rs.{totalprice * (0.2 / 100)}/-</td>
          </tr>

          {disc ? (
            <tr>
              <td style={{ fontSize: 18 }}>SUBSCRIBED DISCOUNT</td>
              <td style={{ fontSize: 18 }}>{totalprice * (5 / 100)} </td>
            </tr>
          ) : (
            <tr>
              <td style={{ fontSize: 18 }}>SUBSCRIBED DISCOUNT</td>
              <td style={{ fontSize: 18 }}>Rs. 0/- </td>
            </tr>
          )}

          <tr className={carts.totalamount}>
            <td style={{ fontSize: 18 }}>FINAL PRICE</td>
            <td style={{ fontSize: 18 }}>Rs.{payable}/-</td>
          </tr>
          <tr>
            <td> 
              <Link to={para}>
                <Stack spacing={2} sx={{ width: "100%" }}>
                  <Button
                    variant="outlined"
                    className={carts.checkoutbtn}
                    onClick={checkout}
                  >
                    CHECK-OUT
                  </Button>

                  <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                  >
                    <Alert
                      onClose={handleClose}
                      severity="success"
                      sx={{ width: "100%" }}
                    >
                      WE CANNOT MOVE FORWORD AS THERE IS NO ITEM IN CART
                    </Alert>
                  </Snackbar>
                </Stack>
              </Link>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
