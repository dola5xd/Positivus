// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const bubble = (
  <svg
    height="266"
    viewBox="0 0 606 266"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute top-0 left-0 w-full min-w-[200px] Tablet:min-w-[606px]"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M45 0C20.1472 0 0 20.1472 0 45V192.952C0 217.805 20.1676 237.952 45.0204 237.952H56.3613L83 266L109.639 237.952H560.979C585.832 237.952 606 217.805 606 192.952V45C606 20.1472 585.853 0 561 0H45Z"
    />
    <path
      d="M56.3613 237.952L57.0864 237.264L56.7907 236.952H56.3613V237.952ZM83 266L82.2749 266.689L83 267.452L83.7251 266.689L83 266ZM109.639 237.952V236.952H109.209L108.914 237.264L109.639 237.952ZM1 45C1 20.6995 20.6995 1 45 1V-1C19.5949 -1 -1 19.595 -1 45H1ZM1 192.952V45H-1V192.952H1ZM45.0204 236.952C20.7193 236.952 1 217.252 1 192.952H-1C-1 218.358 19.6159 238.952 45.0204 238.952V236.952ZM56.3613 236.952H45.0204V238.952H56.3613V236.952ZM83.7251 265.311L57.0864 237.264L55.6362 238.641L82.2749 266.689L83.7251 265.311ZM108.914 237.264L82.2749 265.311L83.7251 266.689L110.364 238.641L108.914 237.264ZM560.979 236.952H109.639V238.952H560.979V236.952ZM605 192.952C605 217.252 585.281 236.952 560.979 236.952V238.952C586.384 238.952 607 218.358 607 192.952H605ZM605 45V192.952H607V45H605ZM561 1C585.3 1 605 20.6995 605 45H607C607 19.5949 586.405 -1 561 -1V1ZM45 1H561V-1H45V1Z"
      fill="#B9FF66"
    />
  </svg>
);

const mobileBubble = (
  <svg
    height="328"
    viewBox="0 0 330 328"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute top-0 left-0 min-w-[330px] "
  >
    <path
      d="M45 1H285C309.301 1 329 20.6995 329 45V257.384C329 281.684 309.291 301.384 284.99 301.384H284.474H283.959H283.444H282.93H282.416H281.903H281.39H280.878H280.366H279.855H279.344H278.834H278.325H277.816H277.307H276.799H276.292H275.785H275.279H274.773H274.267H273.763H273.258H272.755H272.251H271.748H271.246H270.744H270.243H269.742H269.242H268.742H268.243H267.744H267.246H266.748H266.25H265.753H265.257H264.761H264.265H263.77H263.276H262.782H262.288H261.795H261.302H260.81H260.318H259.827H259.336H258.845H258.355H257.866H257.376H256.888H256.399H255.912H255.424H254.937H254.451H253.965H253.479H252.994H252.509H252.024H251.54H251.057H250.573H250.091H249.608H249.126H248.645H248.163H247.683H247.202H246.722H246.242H245.763H245.284H244.806H244.328H243.85H243.373H242.896H242.419H241.943H241.467H240.992H240.517H240.042H239.567H239.093H238.62H238.146H237.673H237.201H236.728H236.257H235.785H235.314H234.843H234.372H233.902H233.432H232.962H232.493H232.024H231.556H231.087H230.619H230.152H229.684H229.217H228.751H228.284H227.818H227.352H226.887H226.421H225.957H225.492H225.028H224.564H224.1H223.636H223.173H222.71H222.248H221.785H221.323H220.861H220.4H219.939H219.478H219.017H218.556H218.096H217.636H217.177H216.717H216.258H215.799H215.34H214.882H214.424H213.966H213.508H213.05H212.593H212.136H211.679H211.223H210.766H210.31H209.854H209.399H208.943H208.488H208.033H207.578H207.123H206.669H206.215H205.761H205.307H204.853H204.4H203.946H203.493H203.04H202.588H202.135H201.683H201.231H200.779H200.327H199.875H199.424H198.973H198.522H198.071H197.62H197.169H196.719H196.268H195.818H195.368H194.918H194.469H194.019H193.57H193.12H192.671H192.222H191.773H191.324H190.876H190.427H189.979H189.531H189.082H188.634H188.186H187.739H187.291H186.843H186.396H185.949H185.501H185.054H184.607H184.16H183.713H183.266H182.82H182.373H181.927H181.48H181.034H180.587H180.141H179.695H179.249H178.803H178.357H177.911H177.465H177.02H176.574H176.128H175.683H175.237H174.792H174.347H173.901H173.456H173.011H172.565H172.12H171.675H171.23H170.785H170.34H169.895H169.449H169.004H168.559H168.115H167.67H167.225H166.78H166.335H165.89H165.445H165H164.555H164.11H163.665H163.22H162.775H162.33H161.886H161.441H160.996H160.551H160.105H159.66H159.215H158.77H158.325H157.88H157.435H156.989H156.544H156.099H155.654H155.208H154.763H154.317H153.872H153.426H152.98H152.535H152.089H151.643H151.197H150.751H150.305H149.859H149.413H148.966H148.52H148.073H147.627H147.18H146.734H146.287H145.84H145.393H144.946H144.499H144.051H143.604H143.157H142.709H142.261H141.814H141.366H140.918H140.469H140.021H139.573H139.124H138.676H138.227H137.778H137.329H136.88H136.43H135.981H135.531H135.082H134.632H134.182H133.732H133.281H132.831H132.38H131.929H131.478H131.027H130.576H130.125H129.673H129.221H128.769H128.317H127.865H127.412H126.96H126.507H126.054H125.6H125.147H124.693H124.239H123.785H123.331H122.877H122.422H121.967H121.512H121.057H120.601H120.146H119.69H119.234H118.777H118.321H117.864H117.407H116.95H116.492H116.034H115.576H115.118H114.66H114.201H113.742H113.283H112.823H112.364H111.904H111.444H110.983H110.522H110.061H109.6H109.139H108.677H108.215H107.752H107.29H106.827H106.364H105.9H105.436H104.972H104.508H104.043H103.579H103.113H102.648H102.182H101.716H101.249H100.783H100.316H99.8484H99.3807H98.9127H98.4444H97.9758H97.5069H97.0376H96.568H96.0981H95.6278H95.1573H94.6863H94.2151H93.7435H93.2715H92.7993H92.3266H91.8537H91.3803H90.9066H90.4326H89.9582H89.4835H89.0083H88.5329H88.057H87.5808H87.1042H86.6273H86.1499H85.6722H85.1941H84.7157H84.2368H83.7576H83.2779H82.7979H82.3175H81.8367H81.3555H80.8739H80.3919H79.9095H79.4267H78.9435H78.4599H77.9758H77.4914H77.0065H76.5212H76.0355H75.5494H75.0628H74.5758H74.0884H73.6006H73.1123H72.6236H72.1345H71.6449H71.1548H70.6644H70.1734H69.6821H69.1902H68.698H68.2052H67.712H67.2184H66.7243H66.2297H65.7347H65.2392H64.7432H64.2467H63.7498H63.2524H62.7545H62.2561H61.7573H61.2579H60.7581H60.2578H59.757H59.2557H58.7539H58.2516H57.7488H57.2455H56.7417H56.2374H55.7325H55.2272H54.7213H54.215H53.7081H53.2007H52.6927H52.1843H51.6753H51.1658H50.6558H50.1452H49.6341H49.1224H48.6102H48.0975H47.5842H47.0704H46.556H46.0411H45.5256H45.0095C20.7087 301.384 1 281.684 1 257.384V45C1 20.6995 20.6995 1 45 1Z"
      stroke="#B9FF66"
      stroke-width="2"
    />
    <path
      d="M92.4831 299.884L66 325.686L39.5169 299.884L92.4831 299.884Z"
      stroke="#B9FF66"
    />
  </svg>
);

function Slider() {
  const isMobile = window.matchMedia("(max-width: 426px)").matches;

  return (
    <Swiper
      spaceBetween={30}
      loop={true}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      grabCursor={true}
      pagination={{
        clickable: true,
        renderBullet: function (index, className) {
          return (
            '<span class="' +
            className +
            '"><img class="pagination-bullet"/></span>'
          );
        },
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="slider-container"
    >
      <SwiperSlide className="slide">
        <div className=" mt-[50px] ">
          {isMobile ? mobileBubble : bubble}
          <p className="w-[350px] Tablet:w-[606px] px-[25px]">
            "
            {
              "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."
            }
            "
          </p>
        </div>

        <div className="mt-auto">
          <h1>John Smith</h1>
          <h3>Marketing Director at XYZ Corp</h3>
        </div>
      </SwiperSlide>
      <SwiperSlide className="slide">
        <div className=" mt-[50px] ">
          {isMobile ? mobileBubble : bubble}
          <p className="w-[350px] Tablet:w-[606px] px-[25px]">
            "
            {
              "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."
            }
            "
          </p>
        </div>

        <div className="mt-auto">
          <h1>John Smith</h1>
          <h3>Marketing Director at XYZ Corp</h3>
        </div>
      </SwiperSlide>
      <SwiperSlide className="slide">
        <div className=" mt-[50px] ">
          {isMobile ? mobileBubble : bubble}
          <p className="w-[350px] Tablet:w-[606px] px-[25px]">
            "
            {
              "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."
            }
            "
          </p>
        </div>

        <div className="mt-auto">
          <h1>John Smith</h1>
          <h3>Marketing Director at XYZ Corp</h3>
        </div>
      </SwiperSlide>
      <SwiperSlide className="slide">
        <div className=" mt-[50px] ">
          {isMobile ? mobileBubble : bubble}
          <p className="w-[350px] Tablet:w-[606px] px-[25px]">
            "
            {
              "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."
            }
            "
          </p>
        </div>

        <div className="mt-auto">
          <h1>John Smith</h1>
          <h3>Marketing Director at XYZ Corp</h3>
        </div>
      </SwiperSlide>
      <SwiperSlide className="slide">
        <div className=" mt-[50px] ">
          {isMobile ? mobileBubble : bubble}
          <p className="w-[350px] Tablet:w-[606px] px-[25px]">
            "
            {
              "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."
            }
            "
          </p>
        </div>

        <div className="mt-auto">
          <h1>John Smith</h1>
          <h3>Marketing Director at XYZ Corp</h3>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider;
