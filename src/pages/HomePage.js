import NavBar from '../components/NavBar';

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col h-[25rem] bg-center bg-cover bg-blue-400 relative">
        <NavBar />
        <div className="flex justify-center items-center mt-8">
          <h1 className="text-white text-[5rem] font-light text-center">Mark Lovesey</h1>
        </div>
        <div className="flex justify-center items-center mt-4">
          <h1 className="text-white text-[1.3rem] font-normal text-center">4th Year Computer Science Major and English Minor at UBC</h1>
        </div>
        <div className="flex justify-center items-center mt-4">
          <h2 className="text-white text-[1.2rem] font-extralight text-center">
            Bridging <a href="/projects" className="font-semibold underline text-white decoration-amber-300 decoration-wavy">Technology</a> & <a href="/projects" className="font-semibold underline text-white decoration-green-500 decoration-wavy">Humanities</a>
          </h2>
        </div>
      </div>
      <div className="absolute w-full overflow-hidden leading-none">
        <svg className="w-full h-24" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-blue-400"></path>
        </svg>
      </div>
      <div className="bg-white p-16">
      <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
  <div class="-m-1 flex flex-wrap md:-m-2">
    <div class="flex w-1/2 flex-wrap">
      <div class="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp" />
      </div>
      <div class="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp" />
      </div>
      <div class="w-full p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />
      </div>
    </div>
    <div class="flex w-1/2 flex-wrap">
      <div class="w-full p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
      </div>
      <div class="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp" />
      </div>
      <div class="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp" />
      </div>
    </div>
  </div>
</div>
      </div>
    </>
  );
};

export default HomePage;