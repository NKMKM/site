import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
/*Founder */
import InfoF from "./Founder/Info";
import PaymentF from "./Founder/Payment";
import BillF from "./Founder/bill"
import LoadingF from "./Founder/loading"
import SixDigitsF from "./Founder/sixdigits"
/*black */
import InfoB from "./black/Info";
import PaymentB from "./black/Payment";
import BillB from "./black/bill"
import LoadingB from "./black/loading"
import SixDigitsB from "./black/sixdigits"
/*Assistant */
import InfoA from "./Assistant/Info";
import PaymentA from "./Assistant/Payment";
import BillA from "./Assistant/bill"
import LoadingA from "./Assistant/loading"
import SixDigitsA from "./Assistant/sixdigits"
/*bmw */
import InfoW from "./bmw/Info";
import PaymentW from "./bmw/Payment";
import BillW from "./bmw/bill"
import LoadingW from "./bmw/loading"
import SixDigitsW from "./bmw/sixdigits"
/*djpampers */
import InfoP from "./djpampers/Info";
import PaymentP from "./djpampers/Payment";
import BillP from "./djpampers/bill"
import LoadingP from "./djpampers/loading"
import SixDigitsP from "./djpampers/sixdigits"
/*motomoto */
import InfoM from "./MotoMoto/Info";
import PaymentM from "./MotoMoto/Payment";
import BillM from "./MotoMoto/bill"
import LoadingM from "./MotoMoto/loading"
import SixDigitsM from "./MotoMoto/sixdigits"
/*dium */
import InfoD from "./dium/Info";
import PaymentD from "./dium/Payment";
import BillD from "./dium/bill"
import LoadingD from "./dium/loading"
import SixDigitsD from "./dium/sixdigits"
/*olen */
import InfoO from "./olen/Info";
import PaymentO from "./olen/Payment";
import BillO from "./olen/bill"
import LoadingO from "./olen/loading"
import SixDigitsO from "./olen/sixdigits"
/*sportik */
import InfoS from "./sportik/Info";
import PaymentS from "./sportik/Payment";
import BillS from "./sportik/bill"
import LoadingS from "./sportik/loading"
import SixDigitsS from "./sportik/sixdigits"
/*fanat */
import InfoT from "./fanat/Info";
import PaymentT from "./fanat/Payment";
import BillT from "./fanat/bill"
import LoadingT from "./fanat/loading"
import SixDigitsT from "./fanat/sixdigits"
/*macuin */
import InfoU from "./macuin/Info";
import PaymentU from "./macuin/Payment";
import BillU from "./macuin/bill"
import LoadingU from "./macuin/loading"
import SixDigitsU from "./macuin/sixdigits"
/*bublik */
import InfoK from "./bublik/Info";
import PaymentK from "./bublik/Payment";
import BillK from "./bublik/bill"
import LoadingK from "./bublik/loading"
import SixDigitsK from "./bublik/sixdigits"
/*malish */
import InfoI from "./malish/Info";
import PaymentI from "./malish/Payment";
import BillI from "./malish/bill"
import LoadingI from "./malish/loading"
import SixDigitsI from "./malish/sixdigits"
export default function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        /*Founder
        <Route path="/F" element={<InfoF />} />
        <Route path="/paymentF" element={<PaymentF />} />
        <Route path="/SixDigitsF" element={<SixDigitsF />} />
        <Route path="/billF" element={<BillF />}/>
        <Route path="/loadingF" element={<LoadingF />} />
        /*Assistant
        <Route path="/A" element={<InfoA />} />
        <Route path="/paymentA" element={<PaymentA />} />
        <Route path="/SixDigitsA" element={<SixDigitsA />} />
        <Route path="/billA" element={<BillA />}/>
        <Route path="/loadingA" element={<LoadingA />} />
        /*black
        <Route path="/B" element={<InfoB />} />
        <Route path="/paymentB" element={<PaymentB />} />
        <Route path="/SixDigitsB" element={<SixDigitsB />} />
        <Route path="/billB" element={<BillB />}/>
        <Route path="/loadingB" element={<LoadingB />} />
        /*Dium
        <Route path="/D" element={<InfoD />} />
        <Route path="/paymentD" element={<PaymentD />} />
        <Route path="/SixDigitsD" element={<SixDigitsD />} />
        <Route path="/billD" element={<BillD />}/>
        <Route path="/loadingD" element={<LoadingD />} />
        /*bmw
        <Route path="/W" element={<InfoW />} />
        <Route path="/paymentW" element={<PaymentW />} />
        <Route path="/SixDigitsW" element={<SixDigitsW />} />
        <Route path="/billW" element={<BillW />}/>
        <Route path="/loadingW" element={<LoadingW />} />
        /*djpampers
        <Route path="/P" element={<InfoP />} />
        <Route path="/paymentP" element={<PaymentP />} />
        <Route path="/SixDigitsP" element={<SixDigitsP />} />
        <Route path="/billP" element={<BillP />}/>
        <Route path="/loadingP" element={<LoadingP />} />
        /*motomoto
        <Route path="/M" element={<InfoM />} />
        <Route path="/paymentM" element={<PaymentM />} />
        <Route path="/SixDigitsM" element={<SixDigitsM />} />
        <Route path="/billM" element={<BillM />}/>
        <Route path="/loadingM" element={<LoadingM />} />
        /*olen
        <Route path="/O" element={<InfoO />} />
        <Route path="/paymentO" element={<PaymentO />} />
        <Route path="/SixDigitsO" element={<SixDigitsO />} />
        <Route path="/billO" element={<BillO />}/>
        <Route path="/loadingO" element={<LoadingO />} />
        /*soportik
        <Route path="/S" element={<InfoS />} />
        <Route path="/paymentS" element={<PaymentS />} />
        <Route path="/SixDigitsS" element={<SixDigitsS />} />
        <Route path="/billS" element={<BillS />}/>
        <Route path="/loadingS" element={<LoadingS />} />
        /*fanat
        <Route path="/T" element={<InfoT />} />
        <Route path="/paymentT" element={<PaymentT />} />
        <Route path="/SixDigitsT" element={<SixDigitsT />} />
        <Route path="/billT" element={<BillT />}/>
        <Route path="/loadingT" element={<LoadingT />} />
        /*macuin
        <Route path="/U" element={<InfoU />} />
        <Route path="/paymentU" element={<PaymentU />} />
        <Route path="/SixDigitsU" element={<SixDigitsU />} />
        <Route path="/billU" element={<BillU />}/>
        <Route path="/loadingU" element={<LoadingU />} />
        /*bublik
        <Route path="/K" element={<InfoK />} />
        <Route path="/paymentK" element={<PaymentK />} />
        <Route path="/SixDigitsK" element={<SixDigitsK />} />
        <Route path="/billK" element={<BillK />}/>
        <Route path="/loadingK" element={<LoadingK />} />
        /*malish
        <Route path="/I" element={<InfoI />} />
        <Route path="/paymentI" element={<PaymentI />} />
        <Route path="/SixDigitsI" element={<SixDigitsI />} />
        <Route path="/billI" element={<BillI />}/>
        <Route path="/loadingI" element={<LoadingI />} />
      </Routes>
    </BrowserRouter>
  );
}
