import natureImg from '../../images/nature.jpg';



export default function AboutPage() {
  return (
    <div className="py-2 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img src={natureImg} alt="trail" loading="lazy" width="" height="" />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              At TeamTrailz, we're all about the love for hiking and the great outdoors.
            </h2>
            <p className="mt-6 text-gray-600">
              Our mission is simple: to connect and inspire fellow nature enthusiasts by sharing our favourite trails, one step at a time.
            </p>
            <p className="mt-4 text-gray-600">
              Whether you're a seasoned hiker or just lacing up your boots for the first time, TeamTrailz is your trusted companion. We believe that
              the beauty of nature is meant to be explored, enjoyed, and, most importantly, shared.
            </p>
            <p className="mt-4 text-gray-600">
              Our platform is a gathering place for hikers, backpackers, and outdoor adventurers of all skill levels. Here, you can help create and
              discover a vast collection of breathtaking trails, from tranquil woodland paths to rugged mountain treks, each with its unique charm. We
              encourage you to join our community and share your personal favorites, tips, and insights. After all, there's no greater joy than
              uniting with like-minded individuals who share your passion for the great outdoors.
            </p>
            <p className="mt-4 text-gray-600">
              Whether you're seeking a serene escape or an adrenaline-pumping adventure, TeamTrailz is here to guide you on your journey. Together,
              we'll uncover the hidden gems of the natural world and forge new paths to the extraordinary. Join us today, and let's trail-blaze
              together!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}