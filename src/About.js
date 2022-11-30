import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function About() {
    return (
        <div>

            <header>
                <nav>
                   <ul>
                     <li><Link to='/' >Home</Link></li>
                     <li><Link to='/about'>About</Link></li>
                     <li><Link to='/services'>Services</Link></li>
                     <li><Link to='./contact'>Contact</Link></li>
                   </ul>
                </nav>
            </header>


            <section>
                <h2>This is About Page</h2>
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

        </div>
    );
}

export default About;