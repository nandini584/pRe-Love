import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BottomNav from '../Commoncomponents/BottomNav';
function FAQs() {
  return (
    <>
    <div className="py-10 px-6 md:py-20 md:px-20 md:mx-72 lg:mx-96">
        <h1 className='font-Montserrat text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-14 '>Frequently Asked Questions</h1>
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography> <span className='font-Montserrat text-2xl'>Shipping</span></Typography>
      
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
        <Accordion>
      <AccordionSummary>
        <Typography > <span className='font-bold font-Montserrat text-base'>How long will the delivery take?</span></Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography><span className='font-Montserrat text-base'>
        It's really quick! We strive to deliver all our orders / products in the fastest time possible. Depending upon your address, the delivery time may vary between 2 - 9 working days. That still won't stop us from trying to get you your order faster.
</span>
        </Typography>
      </AccordionDetails>
    </Accordion>
        <Accordion>
      <AccordionSummary>
        <Typography > <span className='font-bold font-Montserrat text-base'>How can I track my order?</span> </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
        <span className='font-Montserrat text-base'>You can track your order as soon as it is shipped out. To know the status of your item real time, just tap on the tracking link in the WhatsApp message sent to you.</span> </Typography>
      </AccordionDetails>
    </Accordion>
        <Accordion>
      <AccordionSummary>
        <Typography > <span className='font-bold font-Montserrat text-base'> Will all the products be shipped out together?</span></Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
        <span className='font-Montserrat text-base'>We try to ship all products of an order together. However, sometimes few products of an order may get dispatched from different locations. If so, we might ship some products out first and ship the remaining in a separate shipment to ensure that you don't wait even a minute longer than you have to. We will notify you each time a shipment is dispatched or it is out for delivery; so that you can track it till we knock on your door.</span> </Typography>
      </AccordionDetails>
    </Accordion>
        <Accordion>
      <AccordionSummary>
        <Typography ><span className='font-bold font-Montserrat text-base'>How much will the shipping cost me?</span></Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
        <span className='font-Montserrat text-base'>A nominal fee will be charged depending on your location.</span></Typography>
      </AccordionDetails>
    </Accordion>
        <Accordion>
      <AccordionSummary>
        <Typography ><span className='font-bold font-Montserrat text-base'>Will I have to be present personally to recieve my order?</span></Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
       <span className='font-Montserrat text-base'>***</span></Typography>
      </AccordionDetails>
    </Accordion>
        <Accordion>
      <AccordionSummary>
        <Typography ><span className='font-bold font-Montserrat text-base'>What should do if I miss my delivery?</span></Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
       <span className='font-Montserrat text-base'>***</span></Typography>
      </AccordionDetails>
    </Accordion>
        <Accordion>
      <AccordionSummary>
        <Typography ><span className='font-bold font-Montserrat text-base'>Can I change my delivery address or mobile number once the order has been placed?</span></Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
        <span className='font-Montserrat text-base'>Sorry, that is not possible at the moment as the system would have already passed the mobile number and address to our warehouse to pack and ship your product. That said, we never say never!</span>
</Typography>
      </AccordionDetails>
    </Accordion>
        <Accordion>
      <AccordionSummary>
        <Typography ><span className='font-bold font-Montserrat text-base'>Do you have a cash on delivery system in place?</span></Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
        <span className='font-Montserrat text-base'>No, we currently don't have the cash on delivery system in place but will soon set it up for you.</span>
</Typography>
      </AccordionDetails>
    </Accordion>
        <Accordion>
      <AccordionSummary>
        <Typography ><span className='font-bold font-Montserrat text-base'>Do you deliver everywhere in India?</span></Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
        <span className='font-Montserrat text-base'>That's the big dream and we're sure we'll achieve it soon! We strive to deliver to all the pin codes of India. At the time of shopping, we check if the shipping address is registered with our delivery partner. If not, we would request you to provide an alternate shipping address.</span></Typography>
      </AccordionDetails>
    </Accordion>
        <Accordion>
      <AccordionSummary>
        <Typography ><span className='font-bold font-Montserrat text-base'>Do you deliver internationally?</span></Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
        <span className='font-Montserrat text-base'>For now, we don't do international shipping. Our delivery network is set up only in India.</span></Typography>
      </AccordionDetails>
    </Accordion>
        <Accordion>
      <AccordionSummary>
        <Typography ><span className='font-bold font-Montserrat text-base'>What delivery carriers do you use?</span></Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
        <span className='font-Montserrat text-base'>At pRe-Love, we strive to make each shopping experience outstanding and enriching. Hence, we partner with the best in the industry. We use logistics services of Delhivery, Xpressbees &amp; Ecom Express. We will notify you the name of the partner delivering your order, in advance.</span>
</Typography>
      </AccordionDetails>
    </Accordion>
        <Accordion>
      <AccordionSummary>
        <Typography ><span className='font-bold font-Montserrat text-base'>What are the various statuses an order can have?</span></Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
        <span className='font-Montserrat text-base'>The various statuses are: Confirmed: This means that an order has been placed and the confirmation has been sent to you. Packed: This means that your order is packed and ready for dispatch. Dispatched: This means that the order is speeding towards you. Delivered: This means that the order has been delivered to you.</span></Typography>
      </AccordionDetails>
    </Accordion>

        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2a-content"
        id="panel2a-header"
      >
        <Typography ><span className='font-Montserrat text-2xl'>Payment</span></Typography>
      </AccordionSummary>
      <AccordionDetails>
      <Accordion>
      <AccordionSummary>
        <Typography ><span className='font-bold font-Montserrat text-base'>What are the various modes of payment at pRe-Love?</span></Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
        <span className='font-Montserrat text-base'>Currently we are accepting payment only through UPI. We will soon start accepting other payment methods like debit card, credit card, netbanking etc.</span></Typography>
      </AccordionDetails>
    </Accordion>
      <Accordion>
      <AccordionSummary>
        <Typography ><span className='font-bold font-Montserrat text-base'>Will I have to pay for any hidden costs like sales tax, OCTROI, etc…?</span>
</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
        <span className='font-Montserrat text-base'>You should not be asked to pay anything extra for the order. Only whatever is mentioned on the invoice can be paid. Please let us know if you've been bothered otherwise.</span></Typography>
      </AccordionDetails>
    </Accordion>
      <Accordion>
      <AccordionSummary>
        <Typography ><span className='font-bold font-Montserrat text-base'>Can I pay using international currency?</span></Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
        <span className='font-Montserrat text-base'>I am sorry, but at this time, we accept only INR at pRe-Love.</span></Typography>
      </AccordionDetails>
    </Accordion>
      <Accordion>
      <AccordionSummary>
        <Typography ><span className='font-bold font-Montserrat text-base'>What if the amount got debited from my side but I did not receive an Order ID?</span></Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
        <span className='font-Montserrat text-base'>We ensure that an Order ID is confirmed only once our bank receives the payment from your bank. Sometimes, due to unforeseen reasons, the amount might be debited from your side but wouldn't have been received by us yet. In that case, please reach out to our cutomer care and we'll sort it out for you.</span></Typography>
      </AccordionDetails>
    </Accordion>
      </AccordionDetails>
    </Accordion>
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2a-content"
        id="panel2a-header"
      >
        <Typography ><span className='font-Montserrat text-2xl'>Return Policy</span></Typography>
      </AccordionSummary>
      <AccordionDetails>
      <Accordion>
      <AccordionSummary>
        <Typography ><span className='font-bold font-Montserrat text-base'>What is your return policy?</span></Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
        <span className='font-Montserrat text-base'>We have a 24 hr return policy. We accept return policy only under 2 circumstances: <br /> <br />
1. The product is defective  <br />
2. The product delivered doesn't match the product ordered <br /> <br />

If the product is returned by the user is damaged or used, then the return request of the user shall be declined, and the said product shall be re-shipped to the customer and the user shall not be eligible for the refund in this case.</span></Typography>
      </AccordionDetails>
    </Accordion>
      <Accordion>
      <AccordionSummary>
        <Typography ><span className='font-bold font-Montserrat text-base'>How do I return my product?</span>
</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
        ***</Typography>
      </AccordionDetails>
    </Accordion>
      <Accordion>
      <AccordionSummary>
        <Typography ><span className='font-bold font-Montserrat text-base'>Can I return the product to the delivery person if I did not like it?</span></Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
        <span className='font-Montserrat text-base'>Please don't do that! We have a very flexible policy where you can create a Return on app, website or by giving us a call. To avoid any confusion or delays, our courier partners are instructed to not accept a package as a return while performing a package delivery.</span>
</Typography>
      </AccordionDetails>
    </Accordion>
      <Accordion>
      <AccordionSummary>
        <Typography ><span className='font-bold font-Montserrat text-base'>Do I get the shipping charges refunded in case of return?</span></Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
        <span className='font-Montserrat text-base'>If you have returned all the products in your order, you will be refunded the entire shipping charges.</span></Typography>
      </AccordionDetails>
    </Accordion>
      <Accordion>
      <AccordionSummary>
        <Typography ><span className='font-bold font-Montserrat text-base'>When is the refund for my return provided?</span></Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
        <span className='font-Montserrat text-base'>Once the Return ID is generated, we share a promised pick up date. By that date, your return order will be picked up. We also notify you of the estimated refund date as soon as the Return ID is generated.</span></Typography>
      </AccordionDetails>
    </Accordion>
      <Accordion>
      <AccordionSummary>
        <Typography ><span className='font-bold font-Montserrat text-base'>I haven't received my refund amount yet. Please help!</span></Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
        <span className='font-Montserrat text-base'>Once the returned product has been picked up, you will be notified of the promised date of refund. Before this date, a refund should get initiated. Once initiated, we will update you.</span></Typography>
      </AccordionDetails>
    </Accordion>
      <Accordion>
      <AccordionSummary>
        <Typography ><span className='font-bold font-Montserrat text-base'>Will I get back what I paid if I return the product?</span></Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
        <span className='font-Montserrat text-base'>We promise to refund the entire amount paid for the product, including any taxes that were paid - no strings attached!</span></Typography>
      </AccordionDetails>
    </Accordion>
      <Accordion>
      <AccordionSummary>
        <Typography ><span className='font-bold font-Montserrat text-base'>Why is my return put on hold?</span></Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
        <span className='font-Montserrat text-base'>That's just because we need some additional information. Dont worry, typically in such cases we call you within 48 hours to check and assist accordingly.</span></Typography>
      </AccordionDetails>
    </Accordion>
      <Accordion>
      <AccordionSummary>
        <Typography ><span className='font-bold font-Montserrat text-base'>When will the return order be picked up?</span></Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
        <span className='font-Montserrat text-base'>Once the Return ID is generated, we share a promised pick up date. By that date, your return order will be picked up. We also notify you of the estimated refund date as soon as the Return ID is generated.</span>
</Typography>
      </AccordionDetails>
    </Accordion>
      </AccordionDetails>
    </Accordion>
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2a-content"
        id="panel2a-header"
      >
        <Typography ><span className='font-Montserrat text-2xl'>General</span></Typography>
      </AccordionSummary>
      <AccordionDetails>
      <Accordion>
      <AccordionSummary>
        <Typography ><span className='font-bold font-Montserrat text-base'>I need a copy of my invoice for my order placed with pRe-Love. How do I go about with it?</span>
</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
        <span className='font-Montserrat text-base'>***</span></Typography>
      </AccordionDetails>
    </Accordion>
      <Accordion>
      <AccordionSummary>
        <Typography ><span className='font-bold font-Montserrat text-base'>Do you guys have offline stores?</span>
</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
        <span className='font-Montserrat text-base'>Currently we do not have any brick and mortar stores</span></Typography>
      </AccordionDetails>
    </Accordion>
      <Accordion>
      <AccordionSummary>
        <Typography ><span className='font-bold font-Montserrat text-base'>Are there any cancellation policies in place?</span></Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
        <span className='font-Montserrat text-base'>Sorry, but we don't have any cancellation policies yet! But we are building them for you!</span></Typography>
      </AccordionDetails>
    </Accordion>
      <Accordion>
      <AccordionSummary>
        <Typography ><span className='font-bold font-Montserrat text-base'>Can I modify my order once it is placed?</span></Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
        <span className='font-Montserrat text-base'>I am sorry but we don't allow that currently.</span></Typography>
      </AccordionDetails>
    </Accordion>
      <Accordion>
      <AccordionSummary>
        <Typography ><span className='font-bold font-Montserrat text-base'>Is my personal information secure? How can I edit my personal info?</span></Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
        <span className='font-Montserrat text-base'>It is absolutely secure, don't you worry! We ensure that the data you have entered is strictly confidential. It'll just help us understand you better so that we can provide you better services in the future. To edit your personal info, you can visit "My Profile" to make the changes you want.</span></Typography>
      </AccordionDetails>
    </Accordion>
      <Accordion>
      <AccordionSummary>
        <Typography ><span className='font-bold font-Montserrat text-base'>What if I forget my password?</span></Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
        <span className='font-Montserrat text-base'>Absolutely no worries, just click on the forgot password option. You will get an otp on your registered mail id and you can reset the password.</span></Typography>
      </AccordionDetails>
    </Accordion>
      </AccordionDetails>
    </Accordion>
  </div>
    <BottomNav />
    </>
  )
}

export default FAQs