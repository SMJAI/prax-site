import Link from "next/link";

export default function UpgradePage() {
  return (
    <>
      <div style={{textAlign: 'center', padding: '80px 20px'}}>
        <h1 style={{fontSize: '2.5rem', marginBottom: '16px'}}>🔐 Unlock Pro Playbooks</h1>
        <p style={{color: '#a1a1aa', marginBottom: '40px'}}>Choose a plan to access 100+ AI systems.</p>
        
        <div style={{display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap'}}>
          <a href="https://praxai.lemonsqueezy.com/buy/625a0310-d89e-431f-85d2-cbb3a1a2ecec" 
             style={{padding: '20px 40px', background: '#1a1a24', border: '1px solid #333', borderRadius: '12px', color: 'white', textDecoration: 'none'}}>
            <div style={{fontSize: '1.5rem', fontWeight: 'bold'}}>$29</div>
            <div style={{color: '#888'}}>Starter Pack</div>
          </a>
          
          <a href="https://praxai.lemonsqueezy.com/buy/15eeba33-3d0d-45a4-898b-998cefce0157" 
             style={{padding: '20px 40px', background: '#8b5cf6', borderRadius: '12px', color: 'white', textDecoration: 'none'}}>
            <div style={{fontSize: '1.5rem', fontWeight: 'bold'}}>$299</div>
            <div>Team Playbooks</div>
          </a>
          
          <a href="https://praxai.lemonsqueezy.com/buy/557bd908-945f-4dd3-bbc0-e701df7303b9" 
             style={{padding: '20px 40px', background: '#1a1a24', border: '1px solid #333', borderRadius: '12px', color: 'white', textDecoration: 'none'}}>
            <div style={{fontSize: '1.5rem', fontWeight: 'bold'}}>$49/mo</div>
            <div style={{color: '#888'}}>Monthly Pro</div>
          </a>
        </div>
      </div>
      
      <footer className="footer" style={{marginTop: '80px'}}>
        <div>© 2025 Prax</div>
        <div className="footer-links">
          <Link href="/">Home</Link>
        </div>
      </footer>
    </>
  );
}