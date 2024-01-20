import { Link } from 'react-router-dom'
import './login.css'

export default function Login() {
    return (
      <div className="login">
        <div className="card">
          <div className="left">
            <h2> -<br />PeerPulse Login<br />-</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt temporibus molestias inventore ad fugiat placeat dolorum voluptas, error deleniti laudantium.
            </p>
            <span>Don't have an account?</span>
            <Link to = '/signup'>
              <button className='btn btn-primary'>Register</button>
            </Link>
          </div>
          <form className="right">
            <input type="text" required placeholder='username' />
            <input type="password" required placeholder='password'/>
            <button type='submit' className='btn'>Login</button>
          </form>
        </div>
      </div>
    )
}