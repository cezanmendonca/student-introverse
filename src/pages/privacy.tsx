import { Footer } from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2>1. Information We Collect</h2>
          <p>We collect information that you provide directly to us when using our contact form, including your name and email address. This information is essential for responding to your inquiries and providing customer support.</p>
          
          <h2>2. Email Communication</h2>
          <p>When you submit your email address through our contact form:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>We use it solely to respond to your inquiries and provide requested information</li>
            <li>Your email is processed through our secure email handling system</li>
            <li>We do not share your email address with third parties</li>
            <li>You can request removal of your email from our records at any time</li>
          </ul>
          
          <h2>3. Information Usage</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Respond to your inquiries and provide customer support</li>
            <li>Send you important updates about our services</li>
            <li>Improve our website and user experience</li>
          </ul>
          
          <h2>4. Data Security</h2>
          <p>We implement reasonable security measures to protect your personal information, including:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Secure email transmission protocols</li>
            <li>Regular security assessments</li>
            <li>Limited access to personal information by our staff</li>
          </ul>
          
          <h2>5. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us through our contact form.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;