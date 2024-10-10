import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "./TodayMovies.css";
const TodayKey = "cfa92eb8ff8fc7290ac04b1ad017984c";
function TodayMovies() {
  const [todayMovie, setTodayMovies] = useState([]);
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  useEffect(function () {
    async function fetchTodayMovies() {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/trending/all/day?api_key=${TodayKey}`
        );
        const data = await res.json();
        setTodayMovies(data.results);
        console.log(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchTodayMovies();
  }, []);

  return (
    <div>
      <div className="swiper_video_header">
        <Swiper
          spaceBetween={10}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          <ul>
            {todayMovie.map((today) => (
              <li key={today.id}>
                <SwiperSlide key={today.id}>
                  <div
                    className="swiper-list"
                    style={{
                      backgroundImage: `
                        linear-gradient(
                          rgba(0, 0, 0, 0.1),  
                          rgba(0, 0, 0, 1)   
                        ),
                        url(https://image.tmdb.org/t/p/w500${today.poster_path})
                      `,
                    }}
                  >
                    <p>
                      <small>{today.media_type}</small>{" "}
                      <small>{today.release_date}</small>
                    </p>
                    <p>{today.overview}</p>
                  </div>
                </SwiperSlide>
              </li>
            ))}
          </ul>

          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>
    </div>
  );
}

export default TodayMovies;
