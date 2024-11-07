import React from 'react'
import { assets } from '../assets/assets'
const Footer = () => {
    return (
        <div className='md:max-10'>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '>
                {/* <!----------------Left- side-------------------> */}
                <div>
                <img className='mb-5 w-40' src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, ut sit? Culpa velit distinctio eius facere aspernatur asperiores odio deserunt dolorem similique accusantium, recusandae architecto totam voluptatem nulla quia nesciunt.</p>
                </div>
                {/* <!--------------------Center side----------------> */}
                <div >
                    <p className='text-xl font-medium mb-5'>Company</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Contact Us</li>
                        <li>Privacy Policy</li>
                    </ul>

                </div>
                {/* <!----------------Right Side--------------------> */}
                <div>

                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+1-212-456-7890</li>
                    <li>info@example.com</li>
                </ul>
                </div>
            </div>
            <div>
                {/* <!--------------------comment text----------------------> */}
                <hr />
                <p className='p-5 text-sm text-center'>Copyright © 2024 @ Prescripto All rights reserved </p>
            </div>
        </div>
    )
}

export default Footer
