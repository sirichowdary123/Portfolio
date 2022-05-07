/*import Logo from './../../public/logo512.png';*/
import './Image.css';
import MyImage from './../Siri.jpeg';

export default function Image(){
    return(
        <div className="image-wrapper">
            <div className="image-parent">
            <img  className="image" src={MyImage}  alt='Siri image'/>
            </div>
            <div className="text-wrapper">
            <span className="designation">Software Developer</span>
            <div className="my-bio">
                I am a Full Stack Developer..!! From Hyderabad, India.
            </div>
            </div>

        </div>
    );
}