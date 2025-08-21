import React, { useEffect } from 'react'

const Calendly = () => {
  useEffect(() => {
    // Load Calendly script if it hasn't been loaded already
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    
    // Check if script is already loaded
    const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
    
    if (!existingScript) {
      document.body.appendChild(script);
    }

    // Listen for Calendly events
    const handleCalendlyEvent = (e) => {
      if (e.data.event && e.data.event === 'calendly.event_scheduled') {
        // Redirect to thankyou page after successful scheduling
        window.location.href = '/thankyou';
      }
    };

    // Add event listener for Calendly events
    window.addEventListener('message', handleCalendlyEvent);

    // Cleanup function
    return () => {
      // Remove event listener
      window.removeEventListener('message', handleCalendlyEvent);
      
      // Remove script when component unmounts (optional)
      const scriptToRemove = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (scriptToRemove) {
        document.body.removeChild(scriptToRemove);
      }
    };
  }, []);

  return (
    <div>
      <div 
        className="calendly-inline-widget" 
        data-url="https://calendly.com/ab-abmedia/shopify" 
        style={{
          minWidth: '320px',
          height: '700px'
        }}
      ></div>
    </div>
  )
}

export default Calendly