export default function HowItWorks() {
  return (
    <section className="py-16 px-4  w-full bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-blue-50 p-6 rounded-xl">
              <div className="text-blue-600 font-bold text-lg mb-2">Step {index + 1}</div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    title: "Upload Resume",
    description: "Simply upload your resume in PDF format. Our AI will analyze your skills."
  },
  {
    title: "AI Analysis",
    description: "Our advanced AI processes your resume and identifies the best matching jobs."
  },
  {
    title: "Get Matched",
    description: "Receive personalized job recommendations and apply with one click."
  }
];