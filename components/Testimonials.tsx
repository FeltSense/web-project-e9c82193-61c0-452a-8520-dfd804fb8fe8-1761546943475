export default function Testimonials() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
        Trusted by Industry Leaders
      </h2>
      <p className="text-xl text-slate-600 max-w-2xl mx-auto">
        See how Nexus AI Labs is transforming businesses with cutting-edge AI solutions
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-100">
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          ))}
        </div>
        <p className="text-slate-700 mb-6 leading-relaxed">
          "Nexus AI Labs reduced our data processing time by 73% and improved accuracy to 99.2%. Their custom NLP models have revolutionized how we handle customer inquiries, saving us over $2M annually."
        </p>
        <div className="flex items-center">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
            SM
          </div>
          <div>
            <h4 className="font-semibold text-slate-900">Sarah Mitchell</h4>
            <p className="text-slate-600 text-sm">CTO, DataFlow Technologies</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-100">
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          ))}
        </div>
        <p className="text-slate-700 mb-6 leading-relaxed">
          "The predictive analytics platform from Nexus AI Labs gave us a competitive edge we didn't know was possible. We've increased forecast accuracy by 84% and optimized our supply chain to reduce waste by 41%."
        </p>
        <div className="flex items-center">
          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
            JC
          </div>
          <div>
            <h4 className="font-semibold text-slate-900">James Chen</h4>
            <p className="text-slate-600 text-sm">VP of Operations, GlobalRetail Inc.</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-100">
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          ))}
        </div>
        <p className="text-slate-700 mb-6 leading-relaxed">
          "Their computer vision solution transformed our quality control process. We now detect defects with 98.7% accuracy in real-time, reducing product returns by 67% and significantly improving customer satisfaction."
        </p>
        <div className="flex items-center">
          <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
            RP
          </div>
          <div>
            <h4 className="font-semibold text-slate-900">Rachel Patel</h4>
            <p className="text-slate-600 text-sm">Director of Manufacturing, Precision Parts Co.</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-100 md:col-span-2 lg:col-span-1">
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          ))}
        </div>
        <p className="text-slate-700 mb-6 leading-relaxed">
          "Working with Nexus AI Labs was seamless from day one. Their AI-powered recommendation engine increased our conversion rates by 156% and average order value by 43%. The ROI was evident within the first quarter."
        </p>
        <div className="flex items-center">
          <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
            MK
          </div>
          <div>
            <h4 className="font-semibold text-slate-900">Marcus Kim</h4>
            <p className="text-slate-600 text-sm">CEO, StreamCommerce</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}