import chef from './img/chef.png'
import icon1 from './img/icon1.png'
import icon2 from './img/icon2.png'
import icon3 from './img/icon3.png'
import icon4 from './img/icon4.png'
import logo from './img/logo.png'
import main from './img/main.png'
import {Link} from 'react-router-dom';
import HomeStyles from './Home.module.scss'
import {Card} from 'first'

function Home() {
    return(
        <div>
            <div className={HomeStyles.header}>
                <a href={"#"}>How it works</a>
                <a href={"#"}>Gifts</a>
                <Link to={"/about"}>About</Link>
                <img src={logo}/>
                <a href={"#"}>Login</a>
                <a href={"#"}>Members</a>
                <a href={"#"}>Contracts</a>
            </div>
            <div className={HomeStyles.mainPicture}>
                <img src={main}/>
            </div>
            <div className={HomeStyles.iconTitle}>
                <span className={HomeStyles.title}>WHATS FOR DINNER</span><br/>
                <span className={HomeStyles.contents}>
                FINALLY HAS AN<br/>
                EASY ANWSER
            </span>
            </div>
            <div className={HomeStyles.iconBox}>
                <Card icon={icon1}/>
                <Card icon={icon2}/>
                <Card icon={icon3}/>
                <Card className={HomeStyles.iconEnd} icon={icon4}/>
            </div>
            <div className={HomeStyles.chefs}>
                <div>
                    <p>
                        <b>Title</b><br/>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed to elusmod tempor incididunt ut
                        labore
                        et dolore magna aliqua.
                    </p>
                    <img src={chef}/>
                </div>
            </div>
        </div>
    )
}
export default Home;