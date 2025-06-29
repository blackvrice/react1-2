import chefAbout from "./img/chef_about.png"
import right1 from "./img/right1.png"
import right2 from "./img/right2.png"
import AboutStyles from "./About.module.scss"
function About(){
    return (
        <div className={AboutStyles.aboutBody}>
            <div className={AboutStyles.top}>
                <img src={chefAbout}/>
                <img src={right1}/>
                <img src={right2}/>
                <div>
                    <b>
                        GLOBAL<br/>
                        BUSINESS<br/><br/>
                    </b>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed to elusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                </div>
            </div>
            <div className={AboutStyles.boxAll}>
                <div className={AboutStyles.boxRight}>
                    <div className={AboutStyles.boxOdd}>
                        <b>Title</b><br/>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed to elusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                    </div>
                    <div className={AboutStyles.boxEven}>
                        <b>Title</b><br/>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed to elusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                    </div>
                    <div className={AboutStyles.boxOdd}>3</div>
                    <div className={AboutStyles.boxEven}>4</div>
                    <div className={AboutStyles.boxOdd}>5</div>
                    <div className={AboutStyles.boxEven}>6</div>
                </div>
                <div className={AboutStyles.boxLeft}>7</div>
            </div>
            <footer>
                <div className={AboutStyles.footer}>
                    법적고지 <span>|</span>
                    이메일무단수집거부 <span>|</span>
                    이용약관 <span>|</span>
                    개인정보취급방침 <span>|</span>
                    고개센터 <span>|</span>
                    입찰공고
                </div>
            </footer>
        </div>
    )
}

export default About;