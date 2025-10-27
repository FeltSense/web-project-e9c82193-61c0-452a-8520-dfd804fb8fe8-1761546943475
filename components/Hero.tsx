export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
  
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-8">
        <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-400/30 rounded-full px-4 py-2 text-sm font-medium text-blue-300">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Trusted by 47 Fortune 500 Companies
        </div>
        
        <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
          Build Production-Ready
          <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
            AI Models That Scale
          </span>
        </h1>
        
        <p className="text-xl text-slate-300 leading-relaxed">
          We architect, train, and deploy custom machine learning models tailored to your business logic—from NLP pipelines for document processing to computer vision systems for quality control.
        </p>
        
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <svg className="w-6 h-6 text-teal-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <div>
              <h3 className="font-semibold text-lg text-white">Custom Model Development</h3>
              <p className="text-slate-400">Fine-tuned transformers, CNNs, and ensemble models built on your proprietary data with full ownership</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <svg className="w-6 h-6 text-teal-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <div>
              <h3 className="font-semibold text-lg text-white">MLOps & Deployment Infrastructure</h3>
              <p className="text-slate-400">Kubernetes-based serving, A/B testing frameworks, and monitoring dashboards for model performance</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <svg className="w-6 h-6 text-teal-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <div>
              <h3 className="font-semibold text-lg text-white">End-to-End AI Strategy</h3>
              <p className="text-slate-400">From feasibility studies and data audits to ROI modeling and team training for sustainable AI adoption</p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold px-8 py-4 rounded-lg shadow-lg shadow-blue-500/50 transition-all duration-200 transform hover:scale-105">
            Schedule Technical Consultation
          </button>
          <button className="border-2 border-slate-600 hover:border-slate-500 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:bg-slate-800">
            View Case Studies
          </button>
        </div>
        
        <div className="flex items-center gap-8 pt-6 border-t border-slate-700">
          <div>
            <div className="text-3xl font-bold text-white">98.7%</div>
            <div className="text-sm text-slate-400">Model Accuracy Avg</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">3.2M+</div>
            <div className="text-sm text-slate-400">Predictions/Day</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">40ms</div>
            <div className="text-sm text-slate-400">Avg Inference Time</div>
          </div>
        </div>
      </div>
      
      <div className="relative lg:h-[600px] hidden lg:block">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-teal-500/20 rounded-2xl backdrop-blur-3xl"></div>
        <div className="absolute top-8 right-8 bg-slate-800/90 backdrop-blur-sm border border-slate-700 rounded-lg p-4 shadow-2xl max-w-xs">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs font-mono text-slate-400">model_training.py</span>
          </div>
          <pre className="text-xs text-green-400 font-mono">
            <code>{`Epoch 47/50
Train Loss: 0.0023
Val Accuracy: 98.7%
F1 Score: 0.989
✓ Checkpoint saved`}</code>
          </pre>
        </div>
        
        <div className="absolute bottom-12 left-8 bg-slate-800/90 backdrop-blur-sm border border-slate-700 rounded-lg p-4 shadow-2xl max-w-sm">
          <div className="text-xs font-semibold text-slate-300 mb-2">Deployment Pipeline</div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-xs text-slate-400">Data Validation</span>
              <span className="ml-auto text-xs text-green-400">✓</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-xs text-slate-400">Model Training</span>
              <span className="ml-auto text-xs text-green-400">✓</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-slate-400">A/B Testing</span>
              <span className="ml-auto text-xs text-blue-400">Running</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
              <span className="text-xs text-slate-400">Production Deploy</span>
              <span className="ml-auto text-xs text-slate-500">Pending</span>
            </div>
          </div>
        </div>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-blue-500/30 to-teal-500/30 rounded-full blur-3xl animate-pulse"></div>
      </div>
    </div>
  </div>
</section>
  );
}