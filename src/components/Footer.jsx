import FacebookIcon from "../assets/icons/ic_facebook.svg";
import twitterIcon from "../assets/icons/ic_twitter.svg";
import YoutubeIcon from "../assets/icons/ic_youtube.svg";
import InstagramIcon from "../assets/icons/ic_instagram.svg";

const Footer = () => {
  return (
    <footer className="mt-16 bg-gray-900 py-8 px-4 md:px-6 lg:px-[200px]">
      <div className="mx-auto flex max-w-[696px] flex-col items-start gap-6 md:flex-row md:items-center md:justify-between lg:max-w-none">
        <p className="order-last text-base font-sans text-gray-400 md:order-none">
          ©codeit - 2024
        </p>

        <div className="flex w-full items-center justify-between md:contents">
          <div className="flex items-center gap-[30px]">
            <a href="#" className="text-base font-sans text-gray-200 font-normal wrap-break-word">Privacy Policy</a>
            <a href="#" className="text-base font-sans text-gray-200 font-normal wrap-break-word">FAQ</a>
          </div>

          <div className="flex items-center gap-3">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={FacebookIcon} alt="Facebook" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={twitterIcon} alt="Twitter" />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <img src={YoutubeIcon} alt="YouTube" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={InstagramIcon} alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
