import './Footer.css';
export default function Footer(){
     return(
        <footer>
           <div className="footer-link">
              <ul>
                 <li ><a href="#">Home</a></li>
                 <li ><a href="#">Blog</a></li>
                 <li ><a href="#">Contact</a></li>
              </ul>
              <ul>
                 <li><a href="#">Stackoverflow</a></li>
                 <li><a href="#">GitHub</a></li>
                 <li><a href="#">linkedin</a></li>
                 
              </ul>

           </div>
           <div className="copyright-text">
              copyright &#169; Siri Kunamneni - 2022 
           </div>
        </footer>
     );
}