import Image from './Image';
import Title from  './Title';
import Posts from  './Posts';
import './Main.css';
export default function Main(){
    return(
        <main className="nav-main">
           <Title></Title>
           <Image></Image>
           <Posts></Posts>
        </main>
    );
}