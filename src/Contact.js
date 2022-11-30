import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import './style.css';

export default function Contact() {

    var btn = useNavigate();

    function msg(){
        btn("/");
    }
  

    return (
        <div>

            <header>
                <nav>
                   <ul>
                     <li><Link to="/" >Home</Link></li>
                     <li><Link to="/about">About</Link></li>
                     <li><Link to="/services">Services</Link></li>
                     <li><Link to="/contact">Contact</Link></li>
                   </ul>
                </nav>
            </header>


            <section>
                <h2>This is Contact Page</h2>
                <p>
                    the quick brown fox jumps voer the layz odgthe quick brown fox jumps voer the layz odg
                    the quick brown fox jumps voer the layz odgthe quick brown fox jumps voer the layz odg
                    the quick brown fox jumps voer the layz odgthe quick brown fox jumps voer the layz odg
                    the quick brown fox jumps voer the layz odgthe quick brown fox jumps voer the layz odg
                    the quick brown fox jumps voer the layz odgthe quick brown fox jumps voer the layz odg
                    the quick brown fox jumps voer the layz odgthe quick brown fox jumps voer the layz odg
                    the quick brown fox jumps voer the layz odgthe quick brown fox jumps voer the layz odg
                </p>
                <p>
                    the quick brown fox jumps voer the layz odgthe quick brown fox jumps voer the layz odg
                    the quick brown fox jumps voer the layz odgthe quick brown fox jumps voer the layz odg
                    the quick brown fox jumps voer the layz odgthe quick brown fox jumps voer the layz odg
                    the quick brown fox jumps voer the layz odgthe quick brown fox jumps voer the layz odg
                    the quick brown fox jumps voer the layz odgthe quick brown fox jumps voer the layz odg
                    the quick brown fox jumps voer the layz odgthe quick brown fox jumps voer the layz odg
                    the quick brown fox jumps voer the layz odgthe quick brown fox jumps voer the layz odg
                </p>
            </section>

            <button onClick={()=>msg()}>
                Open Home Page..
            </button>

        </div>
    );
}

