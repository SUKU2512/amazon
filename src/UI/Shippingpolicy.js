import React from "react";

export default function Shippingpolicy() {
  return (
    <div style={{ marginTop: 10, marginLeft: 230, marginRight: 230 ,textAlign:"justify",marginBottom:50}}>
      <h1>TRENDY SHIPPING GUIDE</h1>
      <br></br>
      <b>What are the delivery charges?</b>
      <br></br>
      Delivery charge varies with each Seller. Sellers incur relatively higher
      shipping costs on low value items. In such cases, charging a nominal
      delivery charge helps them offset logistics costs. Please check your order
      summary to understand the delivery charges for individual products. For
      Products listed as F-Assured a Rs 40 charge for delivery per item is
      applied if the order value is less than Rs 500. While, orders of Rs 500 or
      above are delivered free.
      <br></br>
      <b>
        {" "}
        Why does the delivery date not correspond to the delivery timeline of
        X-Y business days?
      </b>
      <br></br>
      It is possible that the Seller or our courier partners have a holiday
      between the day your placed your order and the date of delivery, which is
      based on the timelines shown on the product page. In this case, we add a
      day to the estimated date. Some courier partners and Sellers do not work
      on Sundays and this is factored in to the delivery dates.
      <br></br>
      <b>What is the estimated delivery time?</b>
      <br></br>
      Sellers generally procure and ship the items within the time specified on
      the product page. Business days exclude public holidays and Sundays.
      Estimated delivery time depends on the following factors: The Seller
      offering the product Product’s availability with the Seller The
      destination to which you want the order shipped to and location of the
      Seller.
      <br></br>
      <b>
        Are there any hidden costs (sales tax, octroi etc) on items sold by
        Sellers on Flipkart?
      </b>
      <br></br>
      There are NO hidden charges when you make a purchase on Flipkart. List
      prices are final and all-inclusive. The price you see on the product page
      is exactly what you would pay. Delivery charges are not hidden charges and
      are charged (if at all) extra depending on the Seller’s shipping policy.
      <br></br>
      <b>Why does the estimated delivery time vary for each seller?</b>
      <br></br>
      You have probably noticed varying estimated delivery times for sellers of
      the product you are interested in. Delivery times are influenced by
      product availability, geographic location of the Seller, your shipping
      destination and the courier partner’s time-to-deliver in your location.
      Please enter your default pin code on the product page (you don’t have to
      enter it every single time) to know more accurate delivery times on the
      product page itself.
      <br></br>
      <b>Seller does not/cannot ship to my area. Why?</b>
      <br></br>
      Please enter your pincode on the product page (you don’t have to enter it
      every single time) to know whether the product can be delivered to your
      location. If you haven’t provided your pincode until the checkout stage,
      the pincode in your shipping address will be used to check for
      serviceability. Whether your location can be serviced or not depends on
      Whether the Seller ships to your location Legal restrictions, if any, in
      shipping particular products to your location The availability of reliable
      courier partners in your location At times Sellers prefer not to ship to
      certain locations. This is entirely at their discretion.
      <br></br>
      <b>Why is the CoD option not offered in my location?</b>
      <br></br>
      Availability of CoD depends on the ability of our courier partner
      servicing your location to accept cash as payment at the time of delivery.
      Our courier partners have limits on the cash amount payable on delivery
      depending on the destination and your order value might have exceeded this
      limit. Please enter your pin code on the product page to check if CoD is
      available in your location.
    </div>
  );
}
