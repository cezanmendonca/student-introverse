import { Footer } from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
        <div className="prose">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing and using this website, you accept and agree to be bound by the terms and conditions of this agreement.</p>
          
          <h2>2. Service Infrastructure</h2>
          <p>Our service is powered by:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Vercel - for hosting and deployment</li>
            <li>Custom email handling system for secure communication</li>
          </ul>
          
          <h2>3. Use License</h2>
          <p>Permission is granted to temporarily access the materials on our website for personal, non-commercial use only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose</li>
            <li>Attempt to reverse engineer any software contained on the website</li>
            <li>Remove any copyright or other proprietary notations from the materials</li>
          </ul>
          
          <h2>4. Service Limitations</h2>
          <p>We reserve the right to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Modify or discontinue any part of our service without notice</li>
            <li>Limit access to certain features or parts of the website</li>
            <li>Update these terms of service at any time</li>
          </ul>
          
          <h2>5. Disclaimer</h2>
          <p>The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
          
          <h2>6. Contact Us</h2>
          <p>If you have any questions about these Terms of Service, please contact us through our contact form.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;