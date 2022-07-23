import React, { Component } from 'react';
// import the component
import Mailchimp from 'react-mailchimp-form'
import {
  CheckoutContainer,
  
} from './confirmation.styles';

class Confirmation extends Component {
  render() {
    return (
      <CheckoutContainer>
      
      <Mailchimp
      action="https://columbia.us13.list-manage.com/subscribe/post?u=b17d93a5474cfbb7fb3dc1ae1&amp;id=4085b3bf95"
      
      //Adding multiple fields:
      fields={[
        {
          name: 'EMAIL',
          placeholder: 'Email',
          type: 'email',
          required: true
        },
        {
          name: 'FNAME',
          placeholder: 'name',
          type: 'text',
          required: true
        }
      ]}
      // Change predetermined language
      messages = {
        {
          sending: "Sending...",
          success: "A Confirmation email has been sent!",
          error: "An unexpected internal error has occurred.",
          empty: "You must write an e-mail.",
          duplicate: "Too many subscribe attempts for this email address",
          button: "Confirm Appointments"
        }
      }
      // Add a personalized class
      className='<YOUR_CLASSNAME>'
      />
    </CheckoutContainer>
    );
  }
}
 
export default Confirmation;