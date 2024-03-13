import Layouts from "@layouts/Layouts";
import Accordion from 'react-bootstrap/Accordion';

import PageBanner from "@components/PageBanner";
import CallToActionSection from "@components/sections/CallToAction";
import PartnersSection from "@components/sections/Partners";

const FAQ = () => {
  const Content = {
    "items": [
      {
        "title": "What services does DH Solutions offer for new clients?",
        "text": "We provide a range of services for new clients, from personalized consultations to determine your unique needs to tailored solutions for seamless integration. Visit the ‘Getting Started’ section to explore the onboarding process and discover how we can elevate your digital experience."
    },
    {
        "title": "Is there a demo or trial period available for your services?",
        "text": "Yes, we offer demos and trial periods for specific services. Check out the ‘Getting Started’ section for information on how to request a demo or trial, allowing you to experience the power of our solutions firsthand."
    },
    {
        "title": "Can i customize my services based on my business requirements?",
        "text": "Absolutely! DH Solutions prides itself on delivering tailor-made solutions. Explore the ‘Getting Started’ section to learn how our team collaborates with you to understand your business goals and customize our services accordingly."
    },
    {
        "title": "What documentation or information do i need to provide during the onboarding process?",
        "text": "The onboarding process may require basic information about your business, your objectives, and any existing systems. Refer to the ‘Getting Started’ section for a detailed checklist to ensure a smooth onboarding experience."
    },
    {
        "title": "How does DH Solutions ensure the security of my data?",
        "text": "We prioritize data security through robust encryption, regular audits, and compliance with industry standards. Visit the ‘Security and Privacy’ section for an in-depth look at our security measures and commitment to safeguarding your information."
    },
    {
        "title": "Is my personal information shared with third parties?",
        "text": "DH Solutions maintains strict confidentiality. Read our privacy policies in the ‘Security and Privacy’ section to understand how we handle personal information and ensure it remains secure within our systems."
    },
    {
        "title": "How often does DH Solutions conduct security assessments?",
        "text": "Security assessments are conducted regularly to identify and address potential vulnerabilities. Discover more about our proactive security measures in the ‘Security and Privacy’ section, demonstrating our commitment to continuous protection."
    }

    ]
  }

  return (
    <Layouts>
      <PageBanner pageTitle={"Client’s FAQ"} pageDesc={"Solving business problems is an everyday."} />
      
      {/* Onovo Faq */}
			<section className="onovo-section gap-top-140 gap-bottom-140">
				<div className="container">

          {/* Faq items */}
          <Accordion>
          <div className="onovo-faq-items">
            {Content.items.map((item, key) => (
            <Accordion.Item key={`faq-item-${key}`} eventKey={`faq-acc-${key}`}>
            <div className="onovo-faq-item onovo-collapse-item">
              <Accordion.Header>
              <h5 className="title onovo-collapse-btn">
                <span>{item.heading}</span>
                <i className="arrow" />
              </h5>
              </Accordion.Header>
              <Accordion.Body>
                <div className="onovo-text">
                  <div dangerouslySetInnerHTML={{__html : item.content}} />
                </div>
              </Accordion.Body>
            </div>
            </Accordion.Item>
            ))}
          </div>
          </Accordion>

        </div>
			</section>

      <CallToActionSection />

      <PartnersSection paddingTop />

    </Layouts>
  );
};
export default FAQ;