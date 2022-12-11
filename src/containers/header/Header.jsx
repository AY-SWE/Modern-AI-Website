import React from 'react'
import './header.css'
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
const Header = () => {
  return (
    <div className="gpt3__header section__padding" id = 'home'>
        <div className="gpt3__header-content">
            <h1 className="gradient__text">
                OpenAI ChatGPT is the Future
            </h1>
            <p>We’ve released new versions of GPT-3 and Codex which can edit or insert content into existing text, rather than just completing existing text. These new capabilities make it practical to use the OpenAI API to revise existing content, such as rewriting a paragraph of text or refactoring code.
            </p>
              <div className="gpt3__header-content__input">
                  <input type="email" placeholder='Your Email Address'/>
                  <button type='button'>Get Started</button>
              </div>
              <div className="gpt3__header-content__people">
                  <img src={people} alt='people'/>
                  <p>1,600 people requested access to OpenGPT</p>
              </div>
        </div>
        <div className="gpt3__header-image">
            <img src={ai}/>
        </div>
    </div>
  );
}

export default Header