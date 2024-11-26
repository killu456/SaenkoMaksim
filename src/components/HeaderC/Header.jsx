
import "./HeaderStyle.css"
import { CONSULTATION_ROUTE, CONTACTS_ROUTE, MAIN_ROUTE, MYINFO_ROUTE, SERVICES_ROUTE } from "../../utils/constants";
import React from "react";

import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import { useMediaQuery } from "react-responsive";

export function Header(){

    const S1 = useMediaQuery({ maxWidth:1100 });

    React.useEffect(() => {
    
        Events.scrollEvent.register('begin', (to, element) => {
          console.log('begin', to, element);
        });
    
        Events.scrollEvent.register('end', (to, element) => {
          console.log('end', to, element);
        });
    
        scrollSpy.update();
    
        return () => {
          Events.scrollEvent.remove('begin');
          Events.scrollEvent.remove('end');
        };
      }, []);

      const scrollTo = () => {
        scroll.scrollTo(100); // Scrolling to 100px from the top of the page.
      };
    
      const scrollMore = () => {
        scroll.scrollMore(100); // Scrolling an additional 100px from the current scroll position.
      };

      const scrollToTop = () => {
        scroll.scrollToTop();
      };

      const scrollToBottom = () => {
        scroll.scrollToBottom();
      };

    return(
        <div className="headerDiv">
                <a onClick={scrollToTop}>
                <div className="divRow">
                    <img style={{marginLeft:"2vw"}} src = "img/logo1.png" width={40} height={40}/>
                    <div style={{marginLeft:"2vw",fontWeight:500}}>Иван Кутырин</div>
                </div>
                </a>
            

            <div className="divRow">
                {S1?

                <div class="dropdown" style = {{position:"absolute",top:"2.5vh",right:"19vw"}}>
                    <button class="btn btn-secondary dropdown-toggle" style = {{backgroundColor:"gold",border:"0px",color:"black"}} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      меню
                    </button>

                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li> <Link to = {MYINFO_ROUTE} activeClass="active"  
                        spy={true} 
                        smooth={true} 
                        offset={0} 
                        duration={500} className="dropdown-item">обо мне</Link></li>

                        <li> <Link to = {SERVICES_ROUTE} activeClass="active"  
                        spy={true} 
                        smooth={true} 
                        offset={0} 
                        duration={500} className="dropdown-item">услуги</Link></li>

                        <li> <Link to = {CONSULTATION_ROUTE} activeClass="active"  
                        spy={true} 
                        smooth={true} 
                        offset={0} 
                        duration={500} className="dropdown-item">консультация</Link></li> 


                        <li> <Link to = {CONTACTS_ROUTE} activeClass="active"  
                        spy={true} 
                        smooth={true} 
                        offset={0} 
                        duration={500} className="dropdown-item">контакты</Link></li>

                      
                    </ul>

                </div>


                :
                <>
                  <Link to = {MYINFO_ROUTE} activeClass="active"  
                        spy={true} 
                        smooth={true} 
                        offset={0} 
                        duration={500} className="item">обо мне </Link>
        
                  <Link to = {SERVICES_ROUTE} activeClass="active"  
                        spy={true} 
                        smooth={true} 
                        offset={0} 
                        duration={500} className="item">услуги</Link>


                  <Link to = {CONSULTATION_ROUTE} activeClass="active"  
                        spy={true} 
                        smooth={true} 
                        offset={0} 
                        duration={500} className="item">консультация</Link>

                  <Link to = {CONTACTS_ROUTE} activeClass="active"  
                        spy={true} 
                        smooth={true} 
                        offset={0} 
                        duration={500} className="item">контакты</Link>
                </>}
                <a  onClick={scrollToBottom} style = {{position:"absolute",top:"2vh",right:"6vw"}}>
                    <img src="img/strelka.png" width={"40px"} height={"auto"}/>
                </a>
            </div>
            




        </div>
    );
}