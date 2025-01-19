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
          
          <h2>2. Use License</h2>
          <p>Permission is granted to temporarily access the materials on our website for personal, non-commercial use only.</p>
          
          <h2>3. Disclaimer</h2>
          <p>The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
          
          <h2>4. Limitations</h2>
          <p>In no event shall we or our suppliers be liable for any damages arising out of the use or inability to use the materials on our website.</p>
          
          <h2>5. Contact Us</h2>
          <p>If you have any questions about these Terms of Service, please contact us through our contact form.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;