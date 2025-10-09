export default function SecurityPage() {
  return (
    <main className="w-full min-h-screen bg-white">
      <div className="container mx-auto px-6 lg:px-12 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-teal-600 mb-6">
            Security & Compliance
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Your data security is our top priority. Learn about our comprehensive security measures and compliance standards.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Data Protection</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">End-to-End Encryption</h3>
                  <p className="text-gray-600">All data is encrypted in transit and at rest using industry-standard AES-256 encryption.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Access Controls</h3>
                  <p className="text-gray-600">Multi-factor authentication and role-based access controls protect your sensitive information.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Data Backup</h3>
                  <p className="text-gray-600">Regular automated backups ensure your data is always recoverable and protected.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Compliance Standards</h2>
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-3">SOC 2 Type II</h3>
                <p className="text-gray-600">Audited annually for security, availability, and confidentiality controls.</p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-3">GDPR Compliant</h3>
                <p className="text-gray-600">Full compliance with European data protection regulations.</p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-3">ISO 27001</h3>
                <p className="text-gray-600">Information security management system certification.</p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-3">HIPAA Ready</h3>
                <p className="text-gray-600">Healthcare data protection compliance available.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Security Monitoring</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Our security team monitors systems 24/7 with advanced threat detection and incident response capabilities.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600 mb-2">24/7</div>
              <div className="text-sm text-gray-600">Security Monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600 mb-2">&lt;15min</div>
              <div className="text-sm text-gray-600">Incident Response</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600 mb-2">99.9%</div>
              <div className="text-sm text-gray-600">Uptime SLA</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600 mb-2">Zero</div>
              <div className="text-sm text-gray-600">Data Breaches</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

