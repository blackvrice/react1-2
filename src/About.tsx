import chefAbout from "./img/chef_about.png"
import right1 from "./img/right1.png"
import right2 from "./img/right2.png"
import AboutStyles from "./About.module.scss"
import {AboutCard} from "second";

function About(){
    return (
        <div className={AboutStyles.aboutBody}>
            <div className={AboutStyles.top}>
                <img src={chefAbout}/>
                <img src={right1}/>
                <img src={right2}/>
                <AboutCard className={AboutStyles.boxOdd} content={
                        <>
                            GLOBAL<br/>
                            BUSINESS<br/><br/>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed to elusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                        </>
                }/>
            </div>
            <div className={AboutStyles.boxAll}>
                <div className={AboutStyles.boxRight}>
                    <AboutCard className={AboutStyles.boxOdd} content={
                        <><b>Title</b><br/>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed to elusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                        </>
                    }/>
                    <AboutCard className={AboutStyles.boxEven} content={
                        <><b>Title</b><br/>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed to elusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                        </>
                    }/>
                    <AboutCard className={AboutStyles.boxEven} content={<div>TEST</div>}/>
                    <AboutCard className={AboutStyles.boxOdd} content={<>4</>}/>
                    <AboutCard className={AboutStyles.boxEven} content={<>5</>}/>
                    <AboutCard className={AboutStyles.boxOdd} content={<>6</>}/>
                </div>
                <AboutCard className={AboutStyles.boxLeft} content={<>7</>}/>
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