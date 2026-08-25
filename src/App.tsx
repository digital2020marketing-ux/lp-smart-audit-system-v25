import React, { Suspense, lazy } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';

// Progressive lazy loading of below-the-fold components
const PainPoints = lazy(() => import('./components/PainPoints').then(m => ({ default: m.PainPoints })));
const CostOfInaction = lazy(() => import('./components/CostOfInaction').then(m => ({ default: m.CostOfInaction })));
const WorkflowSection = lazy(() => import('./components/WorkflowSection').then(m => ({ default: m.WorkflowSection })));
const AiToolsSuite = lazy(() => import('./components/AiToolsSuite').then(m => ({ default: m.AiToolsSuite })));
const BeforeAfterSection = lazy(() => import('./components/BeforeAfterSection').then(m => ({ default: m.BeforeAfterSection })));
const CompleteEcosystem = lazy(() => import('./components/CompleteEcosystem').then(m => ({ default: m.CompleteEcosystem })));
const TestimonialsSection = lazy(() => import('./components/TestimonialsSection').then(m => ({ default: m.TestimonialsSection })));
const WhyNotChatGPT = lazy(() => import('./components/WhyNotChatGPT').then(m => ({ default: m.WhyNotChatGPT })));
const ObjectionHandling = lazy(() => import('./components/ObjectionHandling').then(m => ({ default: m.ObjectionHandling })));
const ValueStack = lazy(() => import('./components/ValueStack').then(m => ({ default: m.ValueStack })));
const PriceJustification = lazy(() => import('./components/PriceJustification').then(m => ({ default: m.PriceJustification })));
const RiskReduction = lazy(() => import('./components/RiskReduction').then(m => ({ default: m.RiskReduction })));
const FinalOffer = lazy(() => import('./components/FinalOffer').then(m => ({ default: m.FinalOffer })));
const FaqSection = lazy(() => import('./components/FaqSection').then(m => ({ default: m.FaqSection })));
const LicenseNotice = lazy(() => import('./components/LicenseNotice').then(m => ({ default: m.LicenseNotice })));
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));
const FloatingWhatsApp = lazy(() => import('./components/FloatingWhatsApp').then(m => ({ default: m.FloatingWhatsApp })));
const PurchaseNotification = lazy(() => import('./components/PurchaseNotification').then(m => ({ default: m.PurchaseNotification })));

export default function App() {
  const [showBelowFold, setShowBelowFold] = React.useState(false);

  React.useEffect(() => {
    // Mount below-the-fold components smoothly after initial frame is rendered
    if ('requestIdleCallback' in window) {
      const handle = (window as any).requestIdleCallback(() => setShowBelowFold(true), { timeout: 300 });
      return () => (window as any).cancelIdleCallback(handle);
    } else {
      const timer = setTimeout(() => setShowBelowFold(true), 80);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleCheckoutScroll = () => {
    setShowBelowFold(true);
    const checkoutElem = document.getElementById('checkout');
    if (checkoutElem) {
      checkoutElem.scrollIntoView({ behavior: 'smooth' });
    } else {
      setTimeout(() => {
        const el = document.getElementById('checkout');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col selection:bg-blue-900 selection:text-white">
      {/* Top Fixed Navbar */}
      <Navbar onCheckoutClick={handleCheckoutScroll} />

      {/* Main Content: 16 Sequential Sections */}
      <main className="flex-1">
        {/* Section 1: Hero (Immediate Critical Render) */}
        <Hero onCheckoutClick={handleCheckoutScroll} />

        {/* Progressive Hydration for Sections 2-16 */}
        {showBelowFold && (
          <Suspense fallback={<div className="min-h-[200px]" />}>
            {/* Section 2: Problem Callout */}
            <PainPoints />

            {/* Section 3: Cost of Inaction */}
            <CostOfInaction />

            {/* Section 4: New Way / Mechanism */}
            <WorkflowSection />

            {/* Section 5: Hero Product: AI Suite (Core Value) + CTA #2 */}
            <AiToolsSuite onCheckoutClick={handleCheckoutScroll} />

            {/* Section 6: Before vs After */}
            <BeforeAfterSection />

            {/* Section 8: Complete Ecosystem */}
            <CompleteEcosystem />

            {/* Section 9: Social Proof + CTA #3 */}
            <TestimonialsSection onCheckoutClick={handleCheckoutScroll} />

            {/* Section 10: Why Not ChatGPT */}
            <WhyNotChatGPT />

            {/* Section 11: Objection Handling */}
            <ObjectionHandling />

            {/* Section 12: Value Stack + CTA #4 */}
            <ValueStack onCheckoutClick={handleCheckoutScroll} />

            {/* Section 13: Price Justification */}
            <PriceJustification />

            {/* Section 14: Risk Reduction */}
            <RiskReduction />

            {/* Section 15: Final Offer & Instant Activation Checkout Form */}
            <FinalOffer />

            {/* Section 16: Comprehensive 15-Question FAQ */}
            <FaqSection />

            {/* Section 17: Pengumuman Lisensi & Akad Penggunaan */}
            <LicenseNotice />
          </Suspense>
        )}
      </main>

      {/* Footer & Floating WhatsApp Support Widget & Purchase Popup */}
      {showBelowFold && (
        <Suspense fallback={null}>
          <Footer />
          <FloatingWhatsApp />
          <PurchaseNotification />
        </Suspense>
      )}
    </div>
  );
}
