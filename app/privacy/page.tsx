import Link from "next/link";

export const metadata = {
  title: "Privacy Policy — Prax",
  description: "Privacy Policy for Prax - AI Systems That Actually Work.",
};

export default function PrivacyPage() {
  return (
    <>
      <style>{`
        .legal-content { max-width: 800px; margin: 0 auto; padding: 40px 0; }
        .legal-content h1 { font-size: 2rem; margin-bottom: 8px; }
        .legal-content .updated { color: var(--text-muted); font-size: 0.9rem; margin-bottom: 32px; }
        .legal-content h2 { font-size: 1.25rem; margin-top: 32px; margin-bottom: 12px; }
        .legal-content p { color: var(--text-secondary); line-height: 1.7; margin-bottom: 16px; }
        .legal-content ul { margin-left: 24px; margin-bottom: 16px; }
        .legal-content li { color: var(--text-secondary); line-height: 1.7; margin-bottom: 8px; }
      `}</style>

      <div className="legal-content">
        <h1>Privacy Policy</h1>
        <p className="updated">Last updated: December 2024</p>

        <h2>1. Introduction</h2>
        <p>Prax ("we", "our", or "us") is operated by SNIPAI UK LTD (Company No. 16865430). This Privacy Policy explains how we collect, use, and protect your personal information.</p>

        <h2>2. Information We Collect</h2>
        <p>We collect information you provide directly:</p>
        <ul>
          <li>Email address (when you sign up or contact us)</li>
          <li>Name (optional, when you create an account)</li>
          <li>Payment information (processed securely by LemonSqueezy)</li>
          <li>System submissions and feedback</li>
        </ul>

        <h2>3. How We Use Your Information</h2>
        <p>We use your information to:</p>
        <ul>
          <li>Provide access to our AI systems library</li>
          <li>Process your purchases</li>
          <li>Send important updates about your account</li>
          <li>Improve our services</li>
          <li>Respond to your questions and feedback</li>
        </ul>

        <h2>4. Data Sharing</h2>
        <p>We do not sell your personal data. We share data only with:</p>
        <ul>
          <li>Payment processors (LemonSqueezy) to process transactions</li>
          <li>Authentication services (Clerk) to manage user accounts</li>
          <li>Hosting providers to deliver our service</li>
        </ul>

        <h2>5. Data Security</h2>
        <p>We implement appropriate security measures to protect your personal information. However, no internet transmission is completely secure.</p>

        <h2>6. Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access your personal data</li>
          <li>Request correction of inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Opt-out of marketing communications</li>
        </ul>
        <p>To exercise any of these rights, email us at <a href="mailto:hello@prax.digital" style={{color: 'var(--accent)'}}>hello@prax.digital</a>.</p>

        <h2>7. Cookies</h2>
        <p>We use essential cookies to maintain your session and preferences. We do not use tracking cookies for advertising.</p>

        <h2>8. Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. We will notify you of significant changes via email or through our website.</p>

        <h2>9. Contact Us</h2>
        <p>For any questions about this Privacy Policy, please contact us at <a href="mailto:hello@prax.digital" style={{color: 'var(--accent)'}}>hello@prax.digital</a>.</p>
      </div>

      <footer className="footer">
        <div>© 2025 Prax. A product of SNIPAI UK LTD (Company No. 16865430)</div>
        <div className="footer-links">
          <Link href="/about">About</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <a href="mailto:hello@prax.digital">Contact</a>
        </div>
      </footer>
    </>
  );
}
