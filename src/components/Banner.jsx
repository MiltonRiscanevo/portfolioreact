import React from "react";
import datavideo from './videos/datavideo.mp4'

const Banner = () => {
    return (
        <section className= 'banner'>
            <video  muted autoPlay loop className="video-section">
                <source src={datavideo} type='video/mp4' media=""/>

                Not see this video?
            </video>
            <div className="banner-section">
                <div className="banner-content">
                    <h1>Welcome, I'm Milton, I'm developer software</h1>
                    <p>Not is only work hard, is join to do</p>
                    <a href="https://www.linkedin.com/in/milton-cesar-riscanevo-027a53147/"  className="primary-btn">Know more</a>
                </div>

            </div>

        </section>
      );
}
 
export default Banner;