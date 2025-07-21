import CTAButton from './CTAButton';

export default function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-12 pt-12 pb-16 bg-white">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4 leading-tight">
          Find Your Best-Fit <br />
          <span className="font-black">Tech Job Instantly</span>
        </h1>
        
        <div className="my-8 border-t border-gray-200 w-20 mx-auto"></div>
        
        <p className="text-lg text-gray-600 mb-8">
          Upload your resume and let AI match you with the most relevant roles from top tech companies.
        </p>
        
        <button className="px-8 py-4 bg-blue-600 text-white rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors">
          Get Started
        </button>
      </div>
    </section>
  );
}