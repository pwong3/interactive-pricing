import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <body>
        <h1>Simple, traffic-based pricing</h1>
        <p>Sign-up for our 30-day trial. No credit card required.</p>
        Pageviews $ /month Monthly Billing Yearly Billing 25% discount
        <ul className='list'>
          <li>
            <input type='checkbox' />
            Unlimited websites
          </li>
          <li>
            <input type='checkbox' />
            100% data ownership
          </li>
          <li>
            <input type='checkbox' />
            Email reports
          </li>
        </ul>
        <button className='button'>Start my trial</button>
        <div className='attribution'>
          Challenge by
          <a href='https://www.frontendmentor.io?ref=challenge' target='_blank'>
            Frontend Mentor
          </a>
          . Coded by <a href='#'>pwong3</a>.
        </div>
      </body>
    </div>
  );
}

export default App;
