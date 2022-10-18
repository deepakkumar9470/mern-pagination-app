
import {Link} from 'react-router-dom'
import bank from '../assests/bank.png'
const Navbar = () => {


  return (
    <div className="navbar">
       <div className="logo">
        <Link className='link' to="/"><img src={bank} alt="logo" /></Link>
       </div>
       <div className="nav">
          <ul>
            <li><Link to="/" className='link'>Home</Link></li>
            <li><Link to="/add" className='link add_bank__btn'>Add</Link></li>
          </ul>
       </div>
    </div>
  );
};

export default Navbar;