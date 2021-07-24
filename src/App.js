import "./App.scss";
import AppForm from "./components/AppForm";
import AppInput from "./components/AppInput";

function App() {
  return (
    <div className="App">
      <div className="form-container">
        <div className="formHeader">
          <h1>Checkout</h1>
          <h2>Credit Card Details</h2>
        </div>
        <hr className="divider" />
        <AppForm submitBtnText="SUBMIT" formName="checkout-form">
          <div className="top-half-of-form form-half">
            <AppInput
              className="cardholder-name"
              labelText="CARDHOLDER NAME"
              fieldName="Cardholder Name"
              placeholder="Cardholder Name"
              requiredField
            />
            <div className="app-input expiration-info">
              <label htmlFor="MM">EXPIRATION</label>
              <input
                type="number"
                name="MM"
                id="MM"
                placeholder="MM"
                required
              />
              <span> / </span>
              <input
                type="number"
                name="YY"
                id="YY"
                placeholder="YY"
                required
              />
            </div>
            <AppInput
              labelText="CARD NUMBER"
              fieldName="Card Number"
              placeholder="Card Number"
              requiredField
            />
            <AppInput
              labelText="CCV"
              fieldName="CCV"
              placeholder="CCV"
              requiredField
            />
          </div>
          <h2>Billing Info</h2>
          <hr />
          <div className="bottom-half-of-form form-half">
            <AppInput
              labelText="FIRST NAME"
              fieldName="First"
              placeholder="First"
              requiredField
            />
            <AppInput
              labelText="LAST NAME"
              fieldName="LAST"
              placeholder="LAST"
              requiredField
            />
            <AppInput
              labelText="ADDRESS"
              fieldName="Address"
              placeholder="528 South Drive"
              requiredField
            />
            <AppInput
              labelText="STATE"
              fieldName="State"
              placeholder="TX"
              requiredField
            />
            <AppInput
              labelText="CITY"
              fieldName="City"
              placeholder="Some City"
              requiredField
            />
            <AppInput
              labelText="ZIP"
              fieldName="Zip"
              placeholder="82900"
              requiredField
            />
          </div>
        </AppForm>
      </div>
    </div>
  );
}

export default App;
