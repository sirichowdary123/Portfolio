import './posts.css';
export default function Posts(){
    return(
        <div className="certificate">
           <h2>Recent Certifications</h2>
           <ul>
           <li>
                   <span className="certificate-title">Web Designer</span>
                    <span className="certificate-description">- from udemy</span>  
                </li>
           <li>
                   <span className="certificate-title">Internet of things </span>
                    <span className="certificate-description">- using Arduino</span>  
                </li>
                <li>
                   <span className="certificate-title">UI/Ux</span>
                    <span className="certificate-description">- from Great Learning</span>  
                </li>
                <li>
                   <span className="certificate-title">Data Analyst</span>
                    <span className="certificate-description">- from Excelr</span>  
                </li>
                <li>
                   <span className="certificate-title">HTML</span>
                    <span className="certificate-description">- from Great Learning</span>  
                </li>
                <li>
                   <span className="certificate-title">Machine Learning</span>
                    <span className="certificate-description">- from Nvidia</span>  
                </li>
                
                
           </ul>
        </div>
    );
}