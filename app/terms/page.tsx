import Link from "next/link";

export const metadata = {
  title: "Terms of Service — Prax",
  description: "Terms of Service for Prax - AI Systems That Actually Work.",
};

export default function TermsPage() {
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
        <h1>Terms of Service</h1>
        <p className="updated">Last updated: December 2024</p>

        <h2>1. Agreement to Terms</h2>
        <p>By accessing or using Prax, you agree to be bound by these Terms of Service. Prax is operated by SNIPAI UK LTD (Company No. 16865430), registered in England and Wales.</p>

        <h2>2. Description of Service</h2>
        <p>Prax provides a curated library of AI prompts and systems ("Systems") for use with various AI models. We offer both free and paid access tiers.</p>

        <h2>3. User Accounts</h2>
        <p>To access certain features, you may need to create an account. You are responsible for:</p>
        <ul>
          <li>Maintaining the confidentiality of your account</li>
          <li>All activities that occur under your account</li>
          <li>Notifying us immediately of any unauthorized use</li>
        </ul>

        <h2>4. License to Use Systems</h2>
        <p>When you purchase or access our Systems:</p>
        <ul>
          <li>You receive a non-exclusive, non-transferable license to use them</li>
          <li>You may use them for personal and commercial purposes</li>
          <li>You may not resell or redistribute the Systems themselves</li>
          <li>Team licenses are limited to the number of seats purchased</li>
        </ul>

        <h2>5. Payments and Refunds</h2>
        <p>Payments are processed securely through LemonSqueezy. Our refund policy:</p>
        <ul>
          <li>30-day money-back guarantee on all purchases</li>
          <li>Refund requests should be sent to hello@prax.digital</li>
          <li>Monthly subscriptions can be cancelled at any time</li>
        </ul>

        <h2>6. Intellectual Property</h2>
        <p>All Systems, content, and materials on Prax are owned by SNIPAI UK LTD or our contributors. You may not copy, modify, or distribute our Systems except as permitted by your license.</p>

        <h2>7. User Submissions</h2>
        <p>If you submit Systems to Prax:</p>
        <ul>
          <li>You retain ownership of your original content</li>
          <li>You grant us a license to use, display, and distribute your submission</li>
          <li>Partner revenue sharing is governed by separate Partner agreements</li>
        </ul>

        <h2>8. Disclaimer</h2>
        <p>Systems are provided "as is" without warranties. AI outputs depend on many factors outside our control. We do not guarantee specific results from using our Systems.</p>

        <h2>9. Limitation of Liability</h2>
        <p>SNIPAI UK LTD shall not be liable for any indirect, incidental, or consequential damages arising from your use of Prax.</p>

        <h2>10. Changes to Terms</h2>
        <p>We may update these Terms from time to time. Continued use of Prax after changes constitutes acceptance of the new Terms.</p>

        <h2>11. Governing Law</h2>
        <p>These Terms are governed by the laws of England and Wales.</p>

        <h2>12. Contact</h2>
        <p><strong>Email:</strong> <a href="mailto:hello@prax.digital" style={{color: 'var(--accent)'}}>hello@prax.digital</a></p>
        <p><strong>Company:</strong> SNIPAI UK LTD, Company No. 16865430</p>
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
