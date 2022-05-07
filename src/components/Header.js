import './Header.css';
export default function Header(){
    return(
        <header>
         <ul className="nav-list">
             <li>Blog</li>
             <li>Contact</li>
            <li> <a href="mailto:siri.career90@gmail.com?subject=contact siri from wesite&body=Hello Siri..!!!">@Siri</a></li>
            <li> <a href="tel:+91 9014852013">+91 9014852013</a></li>
         </ul>
        </header>
    )
}