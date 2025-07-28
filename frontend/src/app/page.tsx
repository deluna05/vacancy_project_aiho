import FAQSection from '../components/FAQSection';
import Link from 'next/link';
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[70vh] bg-white">
  <section className="pt-24 pb-20 bg-white"> 
  <h1 className="text-5xl md:text-6xl font-light text-center text-gray-900 mb-8">
    Find Your Best-Fit <br />
    <span className="font-extrabold">Tech Job Instantly</span>
  </h1>
  <p className="text-xl text-gray-600 text-center mb-13 max-w-2xl mx-auto">
    Upload your resume and let AI match you with the most relevant roles from top tech companies.
  </p>
  <button className="px-15 py-2 bg-black text-white text-xl font-semibold hover:bg-gray-800 transition-colors mx-auto block">
    Get Started
  </button>
</section>
  <section className="bg-gray-50 py-20 px-50">
  <h2 className="text-4xl text-center text-gray-900 mb-16">How It Works</h2>
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
    {/* Card 1 */}
    <div className="bg-white rounded-3xl shadow-sm border border-gray-200 flex flex-col items-center p-10 transition hover:shadow-md">
      <div className="bg-gray-100 rounded-full p-5 mb-6">
        {/* Upload Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5-5m0 0l5 5m-5-5v12" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">1. Upload Resume</h3>
      <p className="text-gray-500 text-center">Simply upload your resume in PDF format. Our AI will analyze your skills and experience.</p>
    </div>
    {/* Card 2 */}
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 flex flex-col items-center p-8 transition hover:shadow-md">
      <div className="bg-gray-100 rounded-full p-5 mb-6">
        {/* Lightning Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">2. AI Analysis</h3>
      <p className="text-gray-500 text-center">Our advanced AI processes your resume and identifies the best matching job opportunities.</p>
    </div>
    {/* Card 3 */}
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 flex flex-col items-center p-8 transition hover:shadow-md">
      <div className="bg-gray-100 rounded-full p-5 mb-6">
        {/* Check Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">3. Get Matched</h3>
      <p className="text-gray-500 text-center">Receive personalized job recommendations and apply with one click to your dream positions.</p>
    </div>
  </div>
</section>

<section className="bg-white py-20">
  <div className="max-w-7xl mx-auto text-center"> 
    <p className="text-xl text-gray-500 mb-12">Trusted by professionals at</p>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-45 text-2xl font-normal text-gray-400">
      <span className="text-gray-400 hover:text-black transition-colors">Google</span>
      <span className="text-gray-400 hover:text-black transition-colors">Microsoft</span>
      <span className="text-gray-400 hover:text-black transition-colors">Apple</span>
      <span className="text-gray-400 hover:text-black transition-colors">Amazon</span>
      <span className="text-gray-400 hover:text-black transition-colors">Meta</span>
      <span className="text-gray-400 hover:text-black transition-colors">Netflix</span>
      <span className="text-gray-400 hover:text-black transition-colors">Spotify</span>
      <span className="text-gray-400 hover:text-black transition-colors">Uber</span>
    </div>
  </div>
</section>

<section className="bg-gray-50 py-25 px-20">
  <h2 className="text-4xl font-normal text-center text-gray-900 mb-16">What Our Users Say</h2>
  <div className="max-w-6xl mx-5 grid grid-cols-1 md:grid-cols-3 gap-8 px-4 text-left">
    {/* Card 1 */}
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 flex flex-col items-left p-8 transition hover:shadow-md">
      {/* icon */}
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
            <polygon points="9.9,1.1 7.6,6.9 1.3,7.6 6,11.9 4.7,18.1 9.9,14.8 15.1,18.1 13.8,11.9 18.5,7.6 12.2,6.9" />
          </svg>
        ))}
      </div>
      
      <p className="text-gray-600 text-left italic mb-4">
        &quot;Found my dream job in just 2 days! The AI matching was incredibly accurate.&quot;
      </p>
     
      <p className="font-bold text-gray-900 mt-6">Sarah Chen</p>
      <p className="text-gray-500 text-sm">Software Engineer at Google</p>
    </div>
    {/* Card 2 */}
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 flex flex-col items-left p-8 transition hover:shadow-md">
      {/*icon */}
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
            <polygon points="9.9,1.1 7.6,6.9 1.3,7.6 6,11.9 4.7,18.1 9.9,14.8 15.1,18.1 13.8,11.9 18.5,7.6 12.2,6.9" />
          </svg>
        ))}
      </div>
    
      <p className="text-gray-600 text-left italic mb-4">
        &quot;The personalized recommendations saved me hours of searching. Highly recommend!"&quot;
      </p>
 
      <p className="font-bold text-gray-900 mt-6">Marcus Johnson</p>
      <p className="text-gray-500 text-sm">Product Manager at Microsoft</p>
    </div>
    {/* Card 3 */}
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 flex flex-col items-left p-8 transition hover:shadow-md">
      {/* icon */}
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
            <polygon points="9.9,1.1 7.6,6.9 1.3,7.6 6,11.9 4.7,18.1 9.9,14.8 15.1,18.1 13.8,11.9 18.5,7.6 12.2,6.9" />
          </svg>
        ))}
      </div>
   
        <p className="text-gray-600 text-left italic mb-4">
        &quot;Best job platform I've used. The resume analysis feature is game-changing.&quot;
      </p>
  
      <p className="font-bold text-gray-900 mt-6">Emily Rodriguez</p>
      <p className="text-gray-500 text-sm">Data Scientist at Netflix</p>
    </div>
  </div>
</section>

<section className="bg-white py-2 px-4 max-w-4xl mx-auto">
  <FAQSection />
</section>

<section className="py-20 px-80 bg-gray-900 text-white">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-light text-white mb-8">
      Ready to Find Your Dream Job?
    </h2>
    <p className="text-xl  mb-10 max-w-2xl mx-auto text-gray-400 ">
      Join thousands of professionals who found their perfect match with our AI-powered platform.
    </p>
    <button className="items-center px-5 py-2 bg-white text-black font-semibold hover:bg-white-50 transition-colors">
      Upload Your Resume Now
    </button>
  </div>
</section>

</main>
  );
}