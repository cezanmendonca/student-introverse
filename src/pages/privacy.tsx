import { Footer } from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <h2>1. Information We Collect</h2>
          <p>We collect information that you provide directly to us when using our contact form, including your name and email address.</p>
          
          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to respond to your inquiries and provide customer support.</p>
          
          <h2>3. Information Sharing</h2>
          <p>We do not sell, trade, or otherwise transfer your personally identifiable information to third parties.</p>
          
          <h2>4. Data Security</h2>
          <p>We implement reasonable security measures to protect your personal information.</p>
          
          <h2>5. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us through our contact form.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;