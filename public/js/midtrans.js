/* eslint-disable */

import { showAlert } from './alerts';

export const bookTour = async tourId => {
  try {
    const res = await axios(`/api/v1/bookings/checkout-session/${tourId}`);

    if (res.data.status === 'success') {
      snap.pay(res.data.token);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
