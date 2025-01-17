import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                <div>
                    <span className="mb-5 w-32">Rtk logo</span>
                    <p className=" w-full md:w-2/3 text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo beatae, facere repellat quo nihil facilis magnam dolores commodi unde aliquid ipsum porro! Iusto blanditiis, suscipit laudantium beatae tempora quaerat natus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio rem vitae animi obcaecati blanditiis fuga sed impedit, consectetur id quaerat necessitatibus reprehenderit totam, ex alias eos magni aspernatur quis iure?</p>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className="flex flex-col gap-1 text-gray-600">
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className="flex flex-col gap-1 text-gray-600">
                        <li>+1-787-554-9099</li>
                        <li>rtkgroup@gmail.com</li>
                    </ul>
                </div>

            </div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2025 RTK-Group - All Right Regidter</p>

        </div>
    )
}

export default Footer