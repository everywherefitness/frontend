import React from 'react';
import ropes from '../../images/color-ropes.jpg'
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div>
            {/* {this needs to get sent to the back} */}
            <div class='h-96 bg-primary border-4 border-pink-dark'>

                {/* {this is really the "container"} */}
                {/* {so come up with a container size and set it to everything and design the page by size} */}
                <div class='mx-40 flex-column border-4 border-pink'> 

                    <div class='text-white p-4 space-x-3 text-left'>
                        <Link to='/'>About</Link>
                        <Link to='/register'>Contact</Link>
                        <Link to='/login'>Login</Link>
                        <h2>Remember, this is not a header</h2>
                    </div>
                    
                    <div class='flex justify-around items-center border-2 border-black'>
                        <div class='flex-column w-2/5'>

                            <div class='p-2 mb-8 text-6xl'>
                                <h2 class='p-1'>Get in shape.</h2>
                                <h2 class='p-1'>Never visit the gym.</h2>
                            </div>

                            <div class='p-2 text-2xl'>
                                <h4>Here’s to those New Year’s Resolutions that fizzled out. Turns out, you really hate going to the gym.</h4>
                            </div>
                        </div>
                        <div class='w-2/5'>
                            <img class='' src={ropes}  alt='ropes'/>
                        </div>
                    </div>

                    <div class='m-auto border-2 border-black w-max p-2 flex'>
                        <div><button class='bg-gray w-max rounded p-2 m-1'>Register today</button></div>
                        <div><button class='bg-gray w-max rounded p-2 m-1'>See pricing</button></div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default LandingPage;