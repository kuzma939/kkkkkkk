import Checkout from "../components/Checkout/Checkout.jsx";
import Layout from "../components/Layout";
import { Suspense } from "react";

export default function CheckoutPage() {
  return (
    <Layout>
      <Suspense fallback={<div>Оформлення...</div>}>
        <Checkout />
      </Suspense>
    </Layout>
  );
}
