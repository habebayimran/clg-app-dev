import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Button, TextField, Typography, MenuItem, Select, FormControl, InputLabel, Modal, Box } from '@mui/material';
import styles from './PaymentPage.module.css';

const PaymentPage = () => {
  const location = useLocation();
  const course = location.state?.course || {};
  const courseAmount = course.amount || '';

  const [showModal, setShowModal] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [cardCvv, setCardCvv] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [upiId, setUpiId] = useState('');
  const [upiNumber, setUpiNumber] = useState('');

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
    setCardNumber('');
    setCardHolderName('');
    setCardCvv('');
    setCardExpiry('');
    setUpiId('');
    setUpiNumber('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;

    if (paymentMethod === 'card') {
      if (!/^\d{16}$/.test(cardNumber)) {
        alert('Card number must be 16 digits');
        valid = false;
      }
      if (!/^\d{3}$/.test(cardCvv)) {
        alert('CVV must be 3 digits');
        valid = false;
      }
      if (!/^\d{2}\/\d{4}$/.test(cardExpiry)) {
        alert('Expiry date must be in MM/YYYY format');
        valid = false;
      }
    }

    if (paymentMethod === 'upi') {
      if (!/@/.test(upiId)) {
        alert('UPI ID must contain @');
        valid = false;
      }
      if (!/^\d{9}$/.test(upiNumber)) {
        alert('UPI phone number must be 9 digits');
        valid = false;
      }
    }

    if (valid) {
      setShowModal(true);
    }
  };

  return (
    <div className={styles.paymentPage}>
      <div className={styles.formContainer}>
        <Typography variant="h4" align="center" gutterBottom>
          Payment Page
        </Typography>
        <form onSubmit={handleSubmit}>
          <FormControl fullWidth margin="normal">
            <InputLabel id="payment-method-label">Payment Method</InputLabel>
            <Select
              labelId="payment-method-label"
              value={paymentMethod}
              onChange={handlePaymentMethodChange}
            >
              <MenuItem value="card">Credit/Debit Card</MenuItem>
              <MenuItem value="upi">UPI</MenuItem>
            </Select>
          </FormControl>

          {paymentMethod === 'card' && (
            <>
              <TextField
                fullWidth
                label="Card Number"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Card Holder's Name"
                value={cardHolderName}
                onChange={(e) => setCardHolderName(e.target.value)}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Card CVV"
                value={cardCvv}
                onChange={(e) => setCardCvv(e.target.value)}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Card Expiry Date"
                value={cardExpiry}
                onChange={(e) => setCardExpiry(e.target.value)}
                margin="normal"
                required
                placeholder="MM/YYYY"
              />
            </>
          )}

          {paymentMethod === 'upi' && (
            <>
              <TextField
                fullWidth
                label="UPI ID"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="UPI Phone Number"
                value={upiNumber}
                onChange={(e) => setUpiNumber(e.target.value)}
                margin="normal"
                required
              />
            </>
          )}

          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            className={styles.payButton}
          >
            Pay {courseAmount}
          </Button>
        </form>
      </div>

      <Modal open={showModal} onClose={() => setShowModal(false)} aria-labelledby="modal-title" aria-describedby="modal-description">
        <Box className={styles.modalContent}>
          <Typography id="modal-title" variant="h6" component="h2">
            Payment Successful
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2 }}>
            Your payment has been processed successfully!
          </Typography>
          <Button
            onClick={() => setShowModal(false)}
            variant="contained"
            color="secondary"
            className={styles.modalFooterBtn}
          >
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default PaymentPage;
