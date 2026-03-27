import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
  'pk_test_51TF0nyLnGYzPpJF67ufP7DmoxiQNRQbwjZ1WQvhvwPK7mVce3QwlxgnrcyfrbiAXQHZ9bS3NgJao8jPUsU5By0u600FNCuQS1G',
);

export default stripePromise;
