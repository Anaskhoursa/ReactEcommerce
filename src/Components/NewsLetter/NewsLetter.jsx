import './NewsLetter.css'

const NewsLetter = () => {
    return ( 
        <div className="newsletter">
            <h1>Get Exclusive Offers in your Email</h1>
            <p>Subscribe intro ours Newsletter and stay updated</p>
            <div>
                <input type="email" placeholder='Your Email'/>
                <button>Subscribe</button>
            </div>
        </div>
     );
}
 
export default NewsLetter;