import React from 'react';

const Blogs = () => {
    return (
        <div className='p-6 mt-6'>
            <p className='text-xl font-sans font-semibold'>Q1. What is context api?</p>
            <p className='font-sans mt-2'>Ans: Context API helps in exchanging unique details and assists in solving prop-drilling from all levels of application. Prop drilling refers to the process of sending props from a higher-level component to a lower-level component. props drilling can become an issue in itself because of its repetitive code. By using context Api we don't need to maiantain the hierarchy policy in terms of sending data. React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" means moving props from grandparent to child to parent, and so on.</p>

            <p className='text-xl font-sans font-semibold mt-4'>Q2. Semantic tag in html?</p>
            <p className='font-sans mt-2'>Ans: Semantic HTML tag introduces meaning to the web page rather than just presentation. For example, a 'p' tag indicates that the enclosed text is a paragraph. This is both semantic and presentational because people know what paragraphs are, and browsers know how to display them.
            Semantic HTML tags have names that tell the person or machine reading the code what exactly they're meant to do. It makes web pages more informative and adaptable, allowing browsers and search engines to better interpret content.</p>
        </div>
    );
};

export default Blogs;